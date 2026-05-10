<script>
  const appName = "Hilfadar";
  const tagline = "Nachbarschaftshilfe im 500m-Radius";
</script>

<main>
  <h1>🤝 {appName}</h1>
  <p>{tagline}</p>

  <div class="actions">
    <a href="/angebote" class="btn primary">Hilfe suchen</a>
    <a href="/angebote/neu" class="btn secondary">Hilfe anbieten</a>
  </div>
</main>

<style>
  main {
    max-width: 600px;
    margin: 4rem auto;
    text-align: center;
    font-family: sans-serif;
  }
  h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
  p { color: #666; margin-bottom: 2rem; }
  .actions { display: flex; gap: 1rem; justify-content: center; }
  .btn {
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
  }
  .btn.primary { background: #4f46e5; color: white; }
  .btn.secondary { background: #e5e7eb; color: #111; }
</style>