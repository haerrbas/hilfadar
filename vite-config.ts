import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { writeFileSync, mkdirSync } from 'fs';

const createHeadersPlugin = {
  name: 'create-headers',
  closeBundle() {
    mkdirSync('.svelte-kit/output/client', { recursive: true });
    writeFileSync('.svelte-kit/output/client/_headers', '');
  }
};

export default defineConfig({
  plugins: [sveltekit(), createHeadersPlugin]
});