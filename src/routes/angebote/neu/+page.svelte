<script lang="ts">
	import { goto } from '$app/navigation';

	let titel = $state('');
	let beschreibung = $state('');
	let skills = $state<string[]>([]);
	let neuerSkill = $state('');
	let verfuegbarkeit = $state('');
	let lade = $state(false);
	let fehler = $state('');
	let popupSichtbar = $state(false);

	const kategorien = [
		'Einkaufen',
		'Reparatur',
		'Transport',
		'Garten',
		'Übersetzung',
		'Wissen',
		'Haushalt',
		'Sonstiges'
	];

	function skillToggle(kategorie: string) {
		if (skills.includes(kategorie)) {
			skills = skills.filter((s) => s !== kategorie);
		} else {
			skills = [...skills, kategorie];
		}
	}

	function skillEntfernen(skill: string) {
		skills = skills.filter((s) => s !== skill);
	}

	function customSkillHinzufuegen() {
		const trimmed = neuerSkill.trim();
		if (trimmed && !skills.includes(trimmed)) {
			skills = [...skills, trimmed];
			neuerSkill = '';
		}
	}

	async function speichern(e: Event) {
		e.preventDefault();
		if (!titel.trim()) {
			fehler = 'Bitte gib einen Titel an.';
			return;
		}
		if (skills.length === 0) {
			fehler = 'Bitte wähle mindestens einen Skill aus.';
			return;
		}
		fehler = '';
		lade = true;
		try {
			const res = await fetch('/api/angebote', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					titel: titel.trim(),
					beschreibung: beschreibung.trim(),
					skills,
					verfuegbarkeit: verfuegbarkeit.trim()
				})
			});
			if (!res.ok) throw new Error('Speichern fehlgeschlagen');
			popupSichtbar = true;
		} catch (err) {
			fehler = (err as Error).message;
		} finally {
			lade = false;
		}
	}

	function popupSchliessen() {
		popupSichtbar = false;
		goto('/angebote');
	}
</script>

<main>
	<a href="/" class="back">← Zurück</a>
	<h1>Neues Angebot erstellen</h1>
	<p class="subtitle">Biete deine Hilfe in der Nachbarschaft an.</p>

	<form onsubmit={speichern}>
		<label>
			<span class="label-text">Titel <span class="pflicht">*</span></span>
			<input type="text" bind:value={titel} placeholder="z. B. Beim Umzug helfen" required />
		</label>

		<label>
			<span class="label-text">Beschreibung</span>
			<textarea
				bind:value={beschreibung}
				placeholder="Was kannst du genau anbieten? (optional)"
				rows="3"
			></textarea>
		</label>

		<div class="feld">
			<span class="label-text">Skills <span class="pflicht">*</span></span>
			<p class="hilfe">Wähle eine oder mehrere Kategorien aus.</p>
			<div class="kategorie-grid">
				{#each kategorien as kategorie}
					<button
						type="button"
						class="kategorie-chip"
						class:aktiv={skills.includes(kategorie)}
						onclick={() => skillToggle(kategorie)}
					>
						{kategorie}
					</button>
				{/each}
			</div>

			<div class="custom-skill">
				<input
					type="text"
					bind:value={neuerSkill}
					placeholder="Eigener Skill..."
					onkeydown={(e) =>
						e.key === 'Enter' && (e.preventDefault(), customSkillHinzufuegen())}
				/>
				<button type="button" onclick={customSkillHinzufuegen}>+</button>
			</div>

			{#if skills.length > 0}
				<div class="ausgewaehlt">
					{#each skills as skill}
						<span class="ausgewaehlt-tag">
							{skill}
							<button type="button" onclick={() => skillEntfernen(skill)}>×</button>
						</span>
					{/each}
				</div>
			{/if}
		</div>

		<label>
			<span class="label-text">Verfügbarkeit</span>
			<input
				type="text"
				bind:value={verfuegbarkeit}
				placeholder="z. B. heute Nachmittag, morgen, Samstag 14-17 Uhr"
			/>
		</label>

		{#if fehler}
			<p class="fehler">⚠️ {fehler}</p>
		{/if}

		<button type="submit" class="submit" disabled={lade}>
			{#if lade}
				Wird gespeichert...
			{:else}
				Angebot veröffentlichen
			{/if}
		</button>
	</form>

	{#if popupSichtbar}
		<div
			class="popup-overlay"
			role="button"
			tabindex="0"
			onclick={popupSchliessen}
			onkeydown={(e) => e.key === 'Escape' && popupSchliessen()}
		>
			<div
				class="popup"
				role="dialog"
				aria-modal="true"
				onclick={(e) => e.stopPropagation()}
				onkeydown={(e) => e.stopPropagation()}
			>
				<div class="popup-icon">🎉</div>
				<h2>Angebot veröffentlicht</h2>
				<p>Dein Hilfsangebot ist jetzt für deine Nachbarschaft sichtbar.</p>
				<button class="popup-ok" onclick={popupSchliessen}>Zu den Angeboten</button>
			</div>
		</div>
	{/if}
</main>

<style>
	main {
		max-width: 700px;
		margin: 2rem auto;
		font-family: sans-serif;
		padding: 0 1rem;
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
	form {
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
	}
	label {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}
	.label-text {
		font-weight: 600;
		color: #222;
	}
	.pflicht {
		color: #ef4444;
	}
	input[type='text'],
	textarea {
		font-family: inherit;
		font-size: 1rem;
		padding: 0.7rem 0.9rem;
		border: 1px solid #d1d5db;
		border-radius: 8px;
		background: white;
	}
	input[type='text']:focus,
	textarea:focus {
		outline: none;
		border-color: #4f46e5;
		box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);
	}
	textarea {
		resize: vertical;
		min-height: 4.5rem;
	}
	.feld {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}
	.hilfe {
		margin: 0 0 0.6rem;
		font-size: 0.85rem;
		color: #666;
	}
	.kategorie-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.kategorie-chip {
		padding: 0.5rem 1rem;
		border: 1px solid #d1d5db;
		background: white;
		border-radius: 99px;
		cursor: pointer;
		font-size: 0.9rem;
		transition: all 0.15s;
	}
	.kategorie-chip:hover {
		border-color: #4f46e5;
	}
	.kategorie-chip.aktiv {
		background: #4f46e5;
		color: white;
		border-color: #4f46e5;
	}
	.custom-skill {
		display: flex;
		gap: 0.5rem;
		margin-top: 0.7rem;
	}
	.custom-skill input {
		flex: 1;
	}
	.custom-skill button {
		background: #4f46e5;
		color: white;
		border: none;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 8px;
		cursor: pointer;
		font-size: 1.4rem;
	}
	.ausgewaehlt {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		margin-top: 0.7rem;
	}
	.ausgewaehlt-tag {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		background: #e0e7ff;
		color: #4f46e5;
		padding: 0.3rem 0.6rem 0.3rem 0.8rem;
		border-radius: 99px;
		font-size: 0.85rem;
	}
	.ausgewaehlt-tag button {
		background: transparent;
		color: #4f46e5;
		border: none;
		cursor: pointer;
		font-size: 1.1rem;
		line-height: 1;
		padding: 0;
		margin-left: 0.1rem;
	}
	.fehler {
		background: #fef2f2;
		color: #b91c1c;
		padding: 0.7rem 1rem;
		border-radius: 8px;
		margin: 0;
	}
	.submit {
		background: #4f46e5;
		color: white;
		border: none;
		padding: 0.9rem 1.5rem;
		border-radius: 10px;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		margin-top: 0.5rem;
	}
	.submit:hover:not(:disabled) {
		background: #4338ca;
	}
	.submit:disabled {
		opacity: 0.6;
		cursor: not-allowed;
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
	.popup p {
		margin: 0 0 1.5rem;
		color: #444;
		font-size: 1rem;
		line-height: 1.4;
	}
	.popup-ok {
		background: #4f46e5;
		color: white;
		border: none;
		padding: 0.6rem 2rem;
		border-radius: 8px;
		cursor: pointer;
		font-size: 1rem;
	}
</style>
