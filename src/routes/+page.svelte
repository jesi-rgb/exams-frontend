<script>
	export let data;
	console.log(data.questions);
	const questions = data.questions;
</script>

<ul class="list-decimal">
	{#each questions as question}
		<div class="mb-6">
			<li class="font-semibold">{question.name}</li>
			<div class="ml-2 text-gray-500">
				{question.description}
			</div>
			<div class="text-blue-800">
				{question.answers}
			</div>
		</div>
	{/each}
</ul>

<a href="/create" class="text-3xl font-bold bg-gray-100 rounded-xl p-2">create</a>
