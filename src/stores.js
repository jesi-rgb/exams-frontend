import { persisted } from 'svelte-local-storage-store';

export const data = persisted('data', {});
export const respuestas = persisted(
  'respuestas',
  {},
  {
    storage: 'session' // 'session' for sessionStorage, defaults to 'local'
  }
);
