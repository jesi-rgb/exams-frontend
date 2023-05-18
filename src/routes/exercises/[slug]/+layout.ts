import { error } from '@sveltejs/kit';

export function load({ params }) {
  console.log('server', params.slug);
  if (typeof parseInt(params.slug) === 'number') {
    return { number: parseInt(params.slug) };
  }

  throw error(404, 'Not found');
}
