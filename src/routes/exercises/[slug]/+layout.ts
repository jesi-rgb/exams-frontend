import { error } from '@sveltejs/kit';

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
  if (typeof parseInt(params.slug) === 'number') {
    return { number: parseInt(params.slug) };
  }

  throw error(404, 'Not found');
}
