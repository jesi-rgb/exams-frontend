import { data } from '$lib/utils/data';
import { respuestas } from '../../../stores';
import { get } from 'svelte/store';

export function load({ params }) {
  return {
    questions: data
  };
}
