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

type Question = {
	_id: string;
	_type: string;
	name: string;
	description?: Array<Object>;
	answers: number;
	correct_answer: number;
};

export const actions: Actions = {
	default: async (action) => {
		let data = await action.request.formData();

		console.log(action);
		console.log(data);

		const title: string = data.get('title') as string;
		const description: string = data.get('description') as string;
		const answers: number = data.get('answers') as string;

		const id = title.replaceAll(' ', '-');
		console.log(title, description, answers, id);

		const question: Question = {
			_id: id,
			_type: 'question',
			name: title,
			description: description,
			answers: answers
		};

		// client.delete({ query: '*[_type == "question"][0...999]' }).then((res) => console.log(res));
		console.log(`lolz created question: ${question}`);

		client.createIfNotExists(question).then((res) => {
			console.log(`item created with id ${question._id}`);
			console.log(res);
		});
	}
};
