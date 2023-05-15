<script>
	import { PortableText } from '@portabletext/svelte';
	import Quote from '../lib/Components/Quote.svelte';

	export let data;
	console.log(data.questions);
	const questions = data.questions;
</script>

<ul class="list-decimal">
	{#each questions as question}
		<div class="mb-6">
			<li class="font-semibold">{question.name}</li>
			<div class="ml-2">
				<PortableText value={question.description} components={{ block: { blockquote: Quote } }} />
			</div>
			<div class="text-blue-800">
				{question.answers}
			</div>
		</div>
	{/each}
</ul>

<a href="/create" class="text-3xl font-bold bg-gray-100 rounded-xl p-2">create</a>
