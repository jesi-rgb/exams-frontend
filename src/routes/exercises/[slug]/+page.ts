import { error } from '@sveltejs/kit';
import { respuestas } from '../../../stores';

import { data } from '$lib/utils/data';
export async function load({ params, fetch }) {
  // this data should only come from a store, not api calls
  // otherwise we fucking die

  const totalQuestions = data.length;
  console.log(respuestas);

  if (typeof parseInt(params.slug) === 'number') {
    //the slug contains a number

    const question = data[parseInt(params.slug) - 1];
    return { number: parseInt(params.slug), total: totalQuestions, question: question };
  }

  throw error(404, 'Not found');
}
