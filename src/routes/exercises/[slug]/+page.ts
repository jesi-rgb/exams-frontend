import { error } from '@sveltejs/kit';

import { data } from '$lib/utils/data';
export async function load({ params, fetch }) {
  // this data should only come from a store, not api calls
  // otherwise we fucking die
  console.log(data);

  const totalQuestions = data.length;

  if (typeof parseInt(params.slug) === 'number') {
    //the slug contains a number

    const question = data[parseInt(params.slug) - 1];
    return { number: parseInt(params.slug), total: totalQuestions, question: question };
  }

  throw error(404, 'Not found');
}
