<script>
	import ContinueButton from '$lib/Components/ui/ContinueButton.svelte';
	import ExerciseDetails from '$lib/Components/ui/ExerciseDetails.svelte';
	import ExerciseTitle from '$lib/Components/ui/ExerciseTitle.svelte';
	import PreviousButton from '$lib/Components/ui/PreviousButton.svelte';
	import Steps from '$lib/Components/ui/Steps.svelte';
	export let data;

	const totalQuestions = data.total;

	const exerciseNumber = data.number;
	const nextExercise = (exerciseNumber + 1).toString();
	const previousExercise = (exerciseNumber - 1).toString();
</script>

<svelte:head>
	<title>Ejercicio {exerciseNumber.toString()} – Ejercicios Gramática</title>
</svelte:head>

<Steps current={exerciseNumber} total={totalQuestions} />

<ExerciseTitle number={exerciseNumber.toString()} />
<ExerciseDetails bloque={data.question.bloque} tema={data.question.tema} />

<slot />

<div class="flex mt-20 justify-between">
	{#if data.number > 1}
		<a target="_self" href={`/exercises/${previousExercise}`}>
			<PreviousButton />
		</a>
	{/if}
	{#if data.number < totalQuestions}
		<a target="_self" href={`/exercises/${nextExercise}`}>
			<ContinueButton />
		</a>
	{/if}
</div>
