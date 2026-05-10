<script lang="ts">
  import { onMount } from 'svelte';

  let angebote: any[] = $state([]);
  let laden = $state(true);
  let fehler = $state('');

  onMount(async () => {
    try {
      const res = await fetch('/api/angebote');
      if (!res.ok) throw new Error('Fehler beim Laden');
      angebote = await res.json();
    } catch (e) {
      fehler = 'Angebote konnten nicht geladen werden.';
    } finally {
      laden = false;
    }
  });
</script>

<main>
  <a href="/" class="back">← Zurück</a>
  <h1>Hilfsangebote in deiner Nähe</h1>
  <a href="/angebote/neu" class="btn">+ Neues Angebot</a>

  {#if laden}
    <p class="status">⏳ Lädt...</p>
  {:else if fehler}
    <p class="status fehler">{fehler}</p>
  {:else if angebote.length === 0}
    <p class="status">Noch keine Angebote vorhanden. Sei der Erste! 🙌</p>
  {:else}
    <div class="liste">
      {#each angebote as angebot}
        <div class="karte">
          <div class="kopf">
            <span class="nutzer">👤 {angebot.nutzer}</span>
            <span class="karma">⭐ {angebot.karma} Karma</span>
          </div>
          <h2>{angebot.titel}</h2>
          {#if angebot.beschreibung}
            <p class="beschreibung">{angebot.beschreibung}</p>
          {/if}
          <div class="skills">
            {#each angebot.skills as skill}
              <span class="tag">{skill}</span>
            {/each}
          </div>
          {#if angebot.verfuegbarkeit}
            <p class="verfuegbarkeit">🕐 {angebot.verfuegbarkeit}</p>
          {/if}
          <button class="anfragen">Hilfe anfragen</button>
        </div>
      {/each}
    </div>
  {/if}
</main>

<style>
  main { max-width: 700px; margin: 2rem auto; font-family: sans-serif; padding: 0 1rem; }
  .back { color: #4f46e5; text-decoration: none; }
  h1 { margin: 1rem 0; }
  .btn {
    display: inline-block;
    background: #4f46e5;
    color: white;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    text-decoration: none;
    margin-bottom: 1.5rem;
  }
  .status { color: #666; margin-top: 2rem; }
  .fehler { color: #dc2626; }
  .liste { display: flex; flex-direction: column; gap: 1rem; }
  .karte {
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 1.2rem;
    background: white;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  }
  .kopf { display: flex; justify-content: space-between; margin-bottom: 0.5rem; color: #666; font-size: 0.9rem; }
  h2 { margin: 0.3rem 0 0.5rem; }
  .beschreibung { color: #555; font-size: 0.95rem; margin-bottom: 0.8rem; }
  .skills { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.8rem; }
  .tag { background: #e0e7ff; color: #4f46e5; padding: 0.2rem 0.7rem; border-radius: 99px; font-size: 0.85rem; }
  .verfuegbarkeit { color: #666; font-size: 0.85rem; margin-bottom: 0.8rem; }
  .anfragen {
    background: #4f46e5;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.95rem;
  }
  .karma { color: #f59e0b; }
</style>