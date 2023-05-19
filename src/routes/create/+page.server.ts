import type { Actions } from '@sveltejs/kit';

import { SANITY_TOKEN } from '$env/static/private';
import { createClient } from '@sanity/client';

const client = createClient({
	projectId: 'ljxmu3sa',
	token: SANITY_TOKEN,
	dataset: 'production',
	apiVersion: '2021-10-21',
	useCdn: true
});

export type Question = {
	_id: string;
	_type: string;
	bloque: string;
	tema: number;
	name: string;
	description?: string;
	answers: number;
	correct_answer: number;
};

export const actions: Actions = {
	default: async (action) => {
		let data = await action.request.formData();

		const bloque: string = data.get('Bloque') as string;
		const tema: string = data.get('Tema') as string;

		const title: string = data.get('Título') as string;
		const description: string = data.get('Descripción') as string;
		const answers: number = data.get('Respuestas') as string;

		const formattedTitle = title
			.toLowerCase()
			.replaceAll(/[^a-z ]/g, '')
			.replaceAll(' ', '-');

		const formattedBloque = bloque.toLowerCase().trim();
		const formattedTema = `tema${tema}`;

		const id = [formattedBloque, formattedTema, formattedTitle].join('.');
		console.log(id);

		const question: Question = {
			_id: id,
			_type: 'question',
			name: title,
			description: description,
			answers: answers
		};

		// client.delete({ query: '*[_type == "question"][0...999]' }).then((res) => console.log(res));
		// console.log(`lolz created question: ${question}`);
		//
		// client.createIfNotExists(question).then((res) => {
		// 	console.log(`item created with id ${question._id}`);
		// 	console.log(res);
		// });
	}
};
