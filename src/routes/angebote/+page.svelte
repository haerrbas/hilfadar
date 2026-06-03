<script>
	import { onMount } from 'svelte';

	let angebote = $state([]);
	let laden = $state(true);
	let popupSichtbar = $state(false);

	onMount(async () => {
		const res = await fetch('/api/angebote');
		angebote = await res.json();
		laden = false;
	});

	function hilfeAnfragen() {
		popupSichtbar = true;
	}

	function popupSchliessen() {
		popupSichtbar = false;
	}
</script>

<main>
	<a href="/" class="back">← Zurück</a>
	<h1>
		{#if laden}
			<p>Lädt...</p>
		{:else if angebote.length === 0}
			<p>Noch keine Angebote vorhanden.</p>
		{/if}
	</h1>

	<a href="/angebote/neu" class="btn">+ Neues Angebot</a>

	<div class="liste">
		{#each angebote as angebot}
			<div class="karte">
				<div class="kopf">
					<span class="nutzer">👤 {angebot.nutzer}</span>
					<span class="karma">⭐ {angebot.karma} Karma</span>
				</div>
				<h2>{angebot.titel}</h2>
				<div class="skills">
					{#each angebot.skills as skill}
						<span class="tag">{skill}</span>
					{/each}
				</div>
				<button class="anfragen" onclick={hilfeAnfragen}>Hilfe anfragen</button>
			</div>
		{/each}
	</div>

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
				<div class="popup-icon">✅</div>
				<h2>Anfrage gesendet</h2>
				<p>Helfer wurde informiert und wird in Kürze bei dir sein.</p>
				<button class="popup-ok" onclick={popupSchliessen}>OK</button>
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
		margin: 1rem 0;
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
		margin-bottom: 0.5rem;
		color: #666;
		font-size: 0.9rem;
	}
	h2 {
		margin: 0.3rem 0 0.8rem;
	}
	.skills {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
		margin-bottom: 1rem;
	}
	.tag {
		background: #e0e7ff;
		color: #4f46e5;
		padding: 0.2rem 0.7rem;
		border-radius: 99px;
		font-size: 0.85rem;
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
