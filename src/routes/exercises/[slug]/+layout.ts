import { error } from '@sveltejs/kit';

import { data } from '$lib/utils/data';
// in params, we have the index of the question:
// params.slug = 1 -> /exercises/1
//
// so, we get the params.slug and access the object with all
// the questions and render this particular question's content
//
// same thing will be done in page.ts
// in fact, here we only load the index of the question to show
// "Ejercicio N", actual content is rendered in page.ts

export function load({ params }) {
  console.log(data);
  const totalQuestions = data.length;

  if (typeof parseInt(params.slug) === 'number') {
    //the slug contains a number

    const question = data[parseInt(params.slug) - 1];
    return { number: parseInt(params.slug), total: totalQuestions, question: question };
  }

  throw error(404, 'Not found');
}
