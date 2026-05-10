<script lang="ts">
  import { onMount } from 'svelte';

  let benutzer: any[] = $state([]);
  let laden = $state(true);
  let zeigeFormular = $state(false);

  let name = $state('');
  let bio = $state('');
  let ort = $state('');
  let skills: string[] = $state([]);
  let erfolg = $state(false);

  const alleSkills = [
    "Einkaufen", "Tiere", "Transport", "Kochen",
    "Handwerk", "IT-Hilfe", "Kinderbetreuung", "Sonstiges"
  ];

  function toggleSkill(skill: string) {
    if (skills.includes(skill)) {
      skills = skills.filter(s => s !== skill);
    } else {
      skills = [...skills, skill];
    }
  }

  onMount(async () => {
    const res = await fetch('/api/benutzer');
    benutzer = await res.json();
    laden = false;
  });

  async function speichern() {
    if (!name) {
      alert('Bitte Name angeben.');
      return;
    }

    const res = await fetch('/api/benutzer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, bio, ort, skills })
    });

    if (res.ok) {
      const data = await res.json();
      benutzer = [data.benutzer, ...benutzer];
      erfolg = true;
      name = '';
      bio = '';
      ort = '';
      skills = [];
      zeigeFormular = false;
    }
  }
</script>

<main>
  <a href="/" class="back">← Zurück</a>
  <h1>Nachbarschafts-Profile</h1>

  <button class="btn" onclick={() => zeigeFormular = !zeigeFormular}>
    {zeigeFormular ? '✕ Abbrechen' : '+ Profil erstellen'}
  </button>

  {#if erfolg}
    <div class="erfolg">✅ Profil erstellt!</div>
  {/if}

  {#if zeigeFormular}
    <form onsubmit={(e) => { e.preventDefault(); speichern(); }} class="formular">
      <label>
        Name *
        <input bind:value={name} placeholder="Dein Name" required />
      </label>
      <label>
        Wohnort
        <input bind:value={ort} placeholder="z.B. Zürich Wiedikon" />
      </label>
      <label>
        Über mich
        <textarea bind:value={bio} placeholder="Was macht dich aus?"></textarea>
      </label>
      <fieldset>
        <legend>Deine Skills</legend>
        <div class="skill-grid">
          {#each alleSkills as skill}
            <button
              type="button"
              class="skill-btn"
              style={skills.includes(skill) ? "background:#4f46e5; color:white; border-color:#4f46e5;" : ""}
              onclick={() => toggleSkill(skill)}
            >{skill}</button>
          {/each}
        </div>
      </fieldset>
      <button type="submit" class="submit">Profil speichern</button>
    </form>
  {/if}

  {#if laden}
    <p class="status">⏳ Lädt...</p>
  {:else if benutzer.length === 0}
    <p class="status">Noch keine Profile vorhanden.</p>
  {:else}
    <div class="liste">
      {#each benutzer as b}
        <div class="karte">
          <div class="kopf">
            <span class="avatar">👤</span>
            <div>
              <h2>{b.name}</h2>
              {#if b.ort}<p class="ort">📍 {b.ort}</p>{/if}
            </div>
            <span class="karma">⭐ {b.karma} Karma</span>
          </div>
          {#if b.bio}<p class="bio">{b.bio}</p>{/if}
          {#if b.skills.length > 0}
            <div class="skills">
              {#each b.skills as skill}
                <span class="tag">{skill}</span>
              {/each}
            </div>
          {/if}
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
    border: none;
    cursor: pointer;
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
  .formular {
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  label { display: flex; flex-direction: column; gap: 0.4rem; font-weight: 500; }
  input, textarea {
    padding: 0.7rem;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 1rem;
    font-family: sans-serif;
  }
  textarea { min-height: 80px; resize: vertical; }
  fieldset { border: 1px solid #d1d5db; border-radius: 8px; padding: 1rem; }
  legend { font-weight: 500; padding: 0 0.5rem; }
  .skill-grid { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.5rem; }
  .skill-btn {
    padding: 0.4rem 1rem;
    border: 2px solid #d1d5db;
    border-radius: 99px;
    background: white;
    cursor: pointer;
    font-size: 0.9rem;
  }
  .submit {
    background: #4f46e5;
    color: white;
    border: none;
    padding: 0.8rem;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    font-weight: bold;
  }
  .erfolg {
    background: #d1fae5;
    border: 1px solid #6ee7b7;
    padding: 0.8rem 1rem;
    border-radius: 8px;
    color: #065f46;
    margin-bottom: 1rem;
  }
  .status { color: #666; margin-top: 1rem; }
  .liste { display: flex; flex-direction: column; gap: 1rem; }
  .karte {
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 1.2rem;
    background: white;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  }
  .kopf { display: flex; align-items: center; gap: 1rem; margin-bottom: 0.8rem; }
  .avatar { font-size: 2rem; }
  .kopf h2 { margin: 0; font-size: 1.1rem; }
  .ort { margin: 0.2rem 0 0; color: #666; font-size: 0.85rem; }
  .karma { margin-left: auto; color: #f59e0b; font-weight: bold; white-space: nowrap; }
  .bio { color: #555; font-size: 0.95rem; margin-bottom: 0.8rem; }
  .skills { display: flex; gap: 0.5rem; flex-wrap: wrap; }
  .tag { background: #e0e7ff; color: #4f46e5; padding: 0.2rem 0.7rem; border-radius: 99px; font-size: 0.85rem; }
</style>