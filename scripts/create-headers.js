import { mkdirSync, writeFileSync } from 'fs';

mkdirSync('.svelte-kit/output/client', { recursive: true });
writeFileSync('.svelte-kit/output/client/_headers', '');
console.log('_headers created ✅');