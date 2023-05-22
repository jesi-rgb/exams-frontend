import { data } from '$lib/utils/data';
import { respuestas } from '../../../stores';
import { get } from 'svelte/store';

export function load({ params }) {
  for (let i = 0; i < data.length; i++) {
    const userAnswer = get(respuestas)[i];
    const realAnswer = data[i].respuesta;
  }
  return {
    questions: data
  };
}
