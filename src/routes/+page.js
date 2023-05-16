// src/routes/+page.js

import { createClient } from '@sanity/client';

const client = createClient({
	projectId: 'ljxmu3sa',
	dataset: 'production',
	apiVersion: '2021-10-21',
	useCdn: false
});

export async function load() {
	const data = await client.fetch(`*[_type == "question"]`);

	console.log(data);
	if (data) {
		return {
			questions: data
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
