import { error } from '@sveltejs/kit';

export function load({ params }) {
	if (typeof parseInt(params.slug) === 'number') {
		return { number: parseInt(params.slug) };
	}

	throw error(404, 'Not found');
}
