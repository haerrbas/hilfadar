import { readFileSync, writeFileSync } from 'fs';

const path = 'node_modules/@sveltejs/adapter-netlify/index.js';
const content = readFileSync(path, 'utf-8');

const patched = content.replace(
  "appendFileSync(join(assets, '_headers'), text);",
  "try { appendFileSync(join(assets, '_headers'), text); } catch(e) { mkdirSync(assets, {recursive:true}); appendFileSync(join(assets, '_headers'), text); }"
);

writeFileSync(path, patched);
console.log('adapter-netlify patched ✅');