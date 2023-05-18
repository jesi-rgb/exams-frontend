<script>
	import ContinueButton from '$lib/Components/ui/ContinueButton.svelte';
	import PreviousButton from '$lib/Components/ui/PreviousButton.svelte';

	export let data;

	const nextExercise = (data.number + 1).toString();
	const previousExercise = data.number - 1 > 1 ? data.number - 1 : 1;

	console.log(data.number);
</script>

<div>Este es el enunciado del ejercicio {data.number}</div>
<div>Aquí tenemos una palabra nueva: {data.word}</div>

<div class="flex mt-20 justify-between">
	{#if data.number > 1}
		<a target="_self" href={`/exercises/${previousExercise}`}>
			<PreviousButton />
		</a>
	{/if}
	<a target="_self" class="" href={`/exercises/${nextExercise}`}>
		<ContinueButton />
	</a>
</div>
