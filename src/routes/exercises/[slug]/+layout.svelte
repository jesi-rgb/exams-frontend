<script>
	import ContinueButton from '$lib/Components/ui/ContinueButton.svelte';
	import PreviousButton from '$lib/Components/ui/PreviousButton.svelte';
	import Steps from '$lib/Components/ui/Steps.svelte';
	export let data;

	console.log('layout', data);
	let exerciseNumber = data.number;
	const nextExercise = (data.number + 1).toString();
	const previousExercise = (data.number - 1 > 1 ? data.number - 1 : 1).toString();
</script>

<Steps current={exerciseNumber} total={8} />

<div class="text-3xl font-semibold font-serif mb-10">Ejercicio {exerciseNumber}</div>

<slot />

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
