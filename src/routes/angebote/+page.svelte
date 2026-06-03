<script>
	import { onMount } from 'svelte';

	let angebote = $state([]);
	let laden = $state(true);
	let sucheLaeuft = $state(false);
	let erfolgSichtbar = $state(false);
	let gewaehltesAngebot = $state(null);
	let suchStatus = $state('');
	let timers = [];

	let loeschenAngebot = $state(null);
	let loescheLaeuft = $state(false);
	let loescheFehler = $state('');

	onMount(async () => {
		await ladeAngebote();
	});

	async function ladeAngebote() {
		laden = true;
		try {
			const res = await fetch('/api/angebote');
			if (!res.ok) throw new Error();
			angebote = await res.json();
		} catch (e) {
			angebote = [];
		} finally {
			laden = false;
		}
	}

	function hilfeAnfragen(angebot) {
		gewaehltesAngebot = angebot;
		sucheLaeuft = true;
		suchStatus = `Suche nach passendem Helfer in deiner Nähe...`;

		timers.push(
			setTimeout(() => {
				suchStatus = `${angebot.nutzer} wird kontaktiert...`;
			}, 1200)
		);
		timers.push(
			setTimeout(() => {
				suchStatus = 'Anfrage wird übermittelt...';
			}, 2400)
		);
		timers.push(
			setTimeout(() => {
				sucheLaeuft = false;
				erfolgSichtbar = true;
			}, 3500)
		);
	}

	function timersStoppen() {
		timers.forEach(clearTimeout);
		timers = [];
	}

	function suchAbbrechen() {
		timersStoppen();
		sucheLaeuft = false;
		gewaehltesAngebot = null;
	}

	function erfolgSchliessen() {
		erfolgSichtbar = false;
		gewaehltesAngebot = null;
	}

	function loeschenAnfragen(angebot) {
		loeschenAngebot = angebot;
		loescheFehler = '';
	}

	function loeschenAbbrechen() {
		loeschenAngebot = null;
		loescheFehler = '';
	}

	async function loeschenBestaetigen() {
		if (!loeschenAngebot) return;
		loescheLaeuft = true;
		loescheFehler = '';
		try {
			const res = await fetch('/api/angebote', {
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ id: loeschenAngebot._id })
			});
			if (!res.ok) throw new Error('Löschen fehlgeschlagen');
			angebote = angebote.filter((a) => a._id !== loeschenAngebot._id);
			loeschenAngebot = null;
		} catch (e) {
			loescheFehler = (e instanceof Error ? e.message : 'Fehler beim Löschen');
		} finally {
			loescheLaeuft = false;
		}
	}
</script>

<main>
	<a href="/" class="back">← Zurück</a>
	<h1>Hilfsangebote in deiner Nähe</h1>
	<p class="subtitle">Schau, wer in deiner Nachbarschaft helfen möchte.</p>

	<a href="/angebote/neu" class="btn">+ Neues Angebot</a>

	{#if laden}
		<p class="status">⏳ Lädt...</p>
	{:else if angebote.length === 0}
		<p class="status">Noch keine Angebote vorhanden. Sei der Erste! 👋</p>
	{:else}
		<div class="liste">
			{#each angebote as angebot}
				<div class="karte">
					<div class="kopf">
						<span class="nutzer">👤 {angebot.nutzer}</span>
						<div class="kopf-rechts">
							<span class="karma">⭐ {angebot.karma ?? 0} Karma</span>
							<button
								class="loeschen-btn"
								aria-label="Angebot löschen"
								title="Angebot löschen"
								onclick={() => loeschenAnfragen(angebot)}
							>
								🗑
							</button>
						</div>
					</div>
					<h2>{angebot.titel}</h2>
					{#if angebot.beschreibung}
						<p class="beschreibung">{angebot.beschreibung}</p>
					{/if}
					{#if angebot.skills && angebot.skills.length > 0}
						<div class="skills">
							{#each angebot.skills as skill}
								<span class="tag">{skill}</span>
							{/each}
						</div>
					{/if}
					{#if angebot.verfuegbarkeit}
						<p class="verfuegbarkeit">⏰ {angebot.verfuegbarkeit}</p>
					{/if}
					<button class="anfragen" onclick={() => hilfeAnfragen(angebot)}>Hilfe anfragen</button>
				</div>
			{/each}
		</div>
	{/if}

	{#if sucheLaeuft}
		<div
			class="popup-overlay"
			role="button"
			tabindex="0"
			onclick={suchAbbrechen}
			onkeydown={(e) => e.key === 'Escape' && suchAbbrechen()}
		>
			<div
				class="popup popup-suche"
				role="dialog"
				aria-modal="true"
				onclick={(e) => e.stopPropagation()}
				onkeydown={(e) => e.stopPropagation()}
			>
				<div class="spinner"></div>
				<h2>Anfrage wird gesendet</h2>
				<p class="status-text">{suchStatus}</p>
				<button class="popup-cancel" onclick={suchAbbrechen}>Abbrechen</button>
			</div>
		</div>
	{/if}

	{#if erfolgSichtbar}
		<div
			class="popup-overlay"
			role="button"
			tabindex="0"
			onclick={erfolgSchliessen}
			onkeydown={(e) => e.key === 'Escape' && erfolgSchliessen()}
		>
			<div
				class="popup"
				role="dialog"
				aria-modal="true"
				onclick={(e) => e.stopPropagation()}
				onkeydown={(e) => e.stopPropagation()}
			>
				<div class="popup-icon">✅</div>
				<h2>Anfrage gesendet</h2>
				<p>Helfer wurde informiert und wird in Kürze bei dir sein.</p>
				<button class="popup-ok" onclick={erfolgSchliessen}>OK</button>
			</div>
		</div>
	{/if}

	{#if loeschenAngebot}
		<div
			class="popup-overlay"
			role="button"
			tabindex="0"
			onclick={loeschenAbbrechen}
			onkeydown={(e) => e.key === 'Escape' && loeschenAbbrechen()}
		>
			<div
				class="popup popup-loeschen"
				role="dialog"
				aria-modal="true"
				onclick={(e) => e.stopPropagation()}
				onkeydown={(e) => e.stopPropagation()}
			>
				<div class="popup-icon">🗑</div>
				<h2>Angebot löschen?</h2>
				<p>
					Möchtest du das Angebot <strong>„{loeschenAngebot.titel}"</strong> wirklich entfernen? Diese
					Aktion kann nicht rückgängig gemacht werden.
				</p>
				{#if loescheFehler}
					<p class="fehler">⚠️ {loescheFehler}</p>
				{/if}
				<div class="popup-aktionen">
					<button
						class="popup-cancel"
						onclick={loeschenAbbrechen}
						disabled={loescheLaeuft}
					>
						Abbrechen
					</button>
					<button
						class="popup-delete"
						onclick={loeschenBestaetigen}
						disabled={loescheLaeuft}
					>
						{loescheLaeuft ? 'Wird gelöscht...' : 'Ja, löschen'}
					</button>
				</div>
			</div>
		</div>
	{/if}
</main>

<style>
	main {
		max-width: 700px;
		margin: 2rem auto;
		font-family: sans-serif;
		padding: 0 1rem 6rem;
	}
	.back {
		color: #4f46e5;
		text-decoration: none;
	}
	h1 {
		margin: 1rem 0 0.3rem;
	}
	.subtitle {
		color: #666;
		margin: 0 0 1.5rem;
	}
	.btn {
		display: inline-block;
		background: #4f46e5;
		color: white;
		padding: 0.6rem 1.2rem;
		border-radius: 8px;
		text-decoration: none;
		margin-bottom: 1.5rem;
	}
	.status {
		text-align: center;
		color: #666;
		font-size: 1rem;
		padding: 2rem 0;
	}
	.liste {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.karte {
		border: 1px solid #e5e7eb;
		border-radius: 12px;
		padding: 1.2rem;
		background: white;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
	}
	.kopf {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.5rem;
		color: #666;
		font-size: 0.9rem;
	}
	.kopf-rechts {
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}
	h2 {
		margin: 0.3rem 0 0.5rem;
	}
	.beschreibung {
		margin: 0 0 0.8rem;
		color: #444;
		font-size: 0.95rem;
		line-height: 1.4;
	}
	.skills {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
		margin-bottom: 0.6rem;
	}
	.tag {
		background: #e0e7ff;
		color: #4f46e5;
		padding: 0.2rem 0.7rem;
		border-radius: 99px;
		font-size: 0.85rem;
	}
	.verfuegbarkeit {
		margin: 0 0 1rem;
		color: #666;
		font-size: 0.9rem;
	}
	.anfragen {
		background: #4f46e5;
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		cursor: pointer;
		font-size: 0.95rem;
	}
	.karma {
		color: #f59e0b;
	}
	.loeschen-btn {
		background: transparent;
		border: 1px solid transparent;
		padding: 0.2rem 0.4rem;
		border-radius: 6px;
		cursor: pointer;
		font-size: 1rem;
		line-height: 1;
		opacity: 0.55;
		transition: all 0.15s;
	}
	.loeschen-btn:hover {
		opacity: 1;
		background: #fef2f2;
		border-color: #fecaca;
	}
	.popup-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		padding: 1rem;
	}
	.popup {
		background: white;
		border-radius: 16px;
		padding: 2rem;
		max-width: 90%;
		width: 380px;
		text-align: center;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
	}
	.popup-icon {
		font-size: 3rem;
		margin-bottom: 0.5rem;
	}
	.popup h2 {
		margin: 0.5rem 0 1rem;
		color: #4f46e5;
	}
	.popup-loeschen h2 {
		color: #b91c1c;
	}
	.popup p {
		margin: 0 0 1.5rem;
		color: #444;
		font-size: 1rem;
		line-height: 1.4;
	}
	.popup-ok,
	.popup-cancel,
	.popup-delete {
		border: none;
		padding: 0.6rem 1.5rem;
		border-radius: 8px;
		cursor: pointer;
		font-size: 1rem;
	}
	.popup-ok {
		background: #4f46e5;
		color: white;
	}
	.popup-cancel {
		background: #e5e7eb;
		color: #444;
	}
	.popup-delete {
		background: #b91c1c;
		color: white;
	}
	.popup-delete:hover:not(:disabled) {
		background: #991b1b;
	}
	.popup-delete:disabled,
	.popup-cancel:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
	.popup-aktionen {
		display: flex;
		gap: 0.6rem;
		justify-content: center;
	}
	.fehler {
		background: #fef2f2;
		color: #b91c1c;
		padding: 0.6rem 1rem;
		border-radius: 8px;
		margin: 0 0 1rem !important;
		font-size: 0.9rem;
	}
	.popup-suche .spinner {
		width: 3.5rem;
		height: 3.5rem;
		border: 4px solid #e0e7ff;
		border-top-color: #4f46e5;
		border-radius: 50%;
		margin: 0 auto 1rem;
		animation: drehen 1s linear infinite;
	}
	.status-text {
		min-height: 2.5em;
	}
	@keyframes drehen {
		to {
			transform: rotate(360deg);
		}
	}
</style>
