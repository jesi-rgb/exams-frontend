import { data } from '$lib/utils/data';
import { respuestas } from '../../../stores';
import { get } from 'svelte/store';

export function load({ params }) {
  for (let i = 0; i < data.length; i++) {
    const userAnswerObject = get(respuestas)[i];

    const realAnswer = data[i].respuesta;

    console.log(realAnswer);

    // TODO: figure out a way to process respuestas y the realAnswer
    // respuestas is an object, realAnswer is an array
    // how to find if its correct and how to display it
  }
  return {
    questions: data
  };
}
