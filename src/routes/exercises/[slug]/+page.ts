import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
	const promise: Promise = await fetch('https://random-word-api.vercel.app/api');
	const newWord = await promise.json();
	if (typeof parseInt(params.slug) === 'number') {
		return { number: parseInt(params.slug), word: newWord[0] };
	}

	throw error(404, 'Not found');
}
