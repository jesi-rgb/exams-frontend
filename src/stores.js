import { persisted } from 'svelte-local-storage-store';

export const data = persisted('questions', undefined);

export const lastFetchedData = persisted('lastFetchedData', undefined);

export const respuestas = persisted('respuestas', {}, { storage: 'session' });
