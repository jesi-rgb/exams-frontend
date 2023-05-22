import { persisted } from 'svelte-local-storage-store';

export const respuestas = persisted(
  'respuestas',
  {},
  {
    storage: 'session' // 'session' for sessionStorage, defaults to 'local'
  }
);
