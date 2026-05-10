<script>
  let titel = $state("");
  let beschreibung = $state("");
  let skills = $state([]);
  let verfuegbarkeit = $state("");
  let erfolg = $state(false);

  const alleSkills = [
    "Einkaufen", "Tiere", "Transport", "Kochen",
    "Handwerk", "IT-Hilfe", "Kinderbetreuung", "Sonstiges"
  ];

  function toggleSkill(skill) {
    if (skills.includes(skill)) {
      skills = skills.filter(s => s !== skill);
    } else {
      skills = [...skills, skill];
    }
  }

  async function absenden() {
    if (!titel || skills.length === 0) {
      alert("Bitte Titel und mindestens einen Skill angeben.");
      return;
    }
    console.log({ titel, beschreibung, skills, verfuegbarkeit });
    erfolg = true;
  }
</script>

<main>
  <a href="/angebote" class="back">← Zurück</a>
  <h1>Neues Angebot erstellen</h1>

  {#if erfolg}
    <div class="erfolg">
      ✅ Angebot erfolgreich erstellt! <a href="/angebote">Zur Übersicht</a>
    </div>
  {:else}
    <form onsubmit={(e) => { e.preventDefault(); absenden(); }}>
      <label>
        Was kannst du helfen? *
        <input bind:value={titel} placeholder="z.B. Einkauf erledigen" required />
      </label>

      <label>
        Beschreibung
        <textarea bind:value={beschreibung} placeholder="Weitere Details..."></textarea>
      </label>

      <fieldset>
        <legend>Skills * (mind. 1 auswählen)</legend>
        <div class="skill-grid">
          {#each alleSkills as skill}
            <button
              type="button"
              style={skills.includes(skill)
                ? "background:#4f46e5; color:white; border-color:#4f46e5;"
                : ""}
              class="skill-btn"
              onclick={() => toggleSkill(skill)}
            >
              {skill}
            </button>
          {/each}
        </div>
      </fieldset>

      <label>
        Verfügbarkeit
        <input bind:value={verfuegbarkeit} placeholder="z.B. Wochentags nachmittags" />
      </label>

      <button type="submit" class="submit">Angebot publizieren</button>
    </form>
  {/if}
</main>

<style>
  main { max-width: 600px; margin: 2rem auto; font-family: sans-serif; padding: 0 1rem; }
  .back { color: #4f46e5; text-decoration: none; }
  h1 { margin: 1rem 0 1.5rem; }
  form { display: flex; flex-direction: column; gap: 1.2rem; }
  label { display: flex; flex-direction: column; gap: 0.4rem; font-weight: 500; }
  input, textarea {
    padding: 0.7rem;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 1rem;
    font-family: sans-serif;
  }
  textarea { min-height: 100px; resize: vertical; }
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
    transition: all 0.15s;
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
    padding: 1rem;
    border-radius: 8px;
    color: #065f46;
  }
  .erfolg a { color: #065f46; font-weight: bold; }
</style>