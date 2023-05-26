<script lang="ts">
	import ContinueButton from '$lib/Components/ui/ContinueButton.svelte';
	import ExerciseDetails from '$lib/Components/ui/ExerciseDetails.svelte';
	import ExerciseTitle from '$lib/Components/ui/ExerciseTitle.svelte';
	import FinishButton from '$lib/Components/ui/FinishButton.svelte';
	import PreviousButton from '$lib/Components/ui/PreviousButton.svelte';
	import Steps from '$lib/Components/ui/Steps.svelte';

	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { error } from '@sveltejs/kit';
	import TopicsButtonSmall from '$lib/Components/ui/TopicsButtonSmall.svelte';

	export let data;

	const totalQuestions = data.total;
	const topicUrl = data.topicUrl;

	const exerciseNumber = data.number;
	const nextExercise = (exerciseNumber + 1).toString();
	const previousExercise = (exerciseNumber - 1).toString();
	console.log(exerciseNumber);

	let visible: boolean = false;
	onMount(() => (visible = true));

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'ArrowRight') {
			e.preventDefault();
			window.location.href = `/exercises/${topicUrl}/${nextExercise}`;
		}
		if (e.key === 'ArrowLeft') {
			e.preventDefault();
			window.location.href = `/exercises/${topicUrl}/${previousExercise}`;
		}
	}
</script>

<svelte:head>
	<title>Ejercicio {exerciseNumber.toString()} – {data.question.tema}</title>
</svelte:head>

<Steps current={exerciseNumber} total={totalQuestions} />

{#if visible}
	<div in:fly={{ y: 20, duration: 1000, easing: cubicOut }}>
		<TopicsButtonSmall />
		<ExerciseTitle number={exerciseNumber.toString()} />
		<ExerciseDetails bloque={data.question.bloque} tema={data.question.tema} />

		<slot />

		<div class="flex mt-20 justify-between">
			{#if data.number > 1}
				<a target="_self" href={`/exercises/${topicUrl}/${previousExercise}`}>
					<PreviousButton />
				</a>
			{/if}
			{#if data.number < totalQuestions}
				<div class="place-self-end">
					<a target="_self" href={`/exercises/${topicUrl}/${nextExercise}`}>
						<ContinueButton />
					</a>
				</div>
			{/if}
			{#if data.number == totalQuestions}
				<a target="_self" href={`/exercises/${topicUrl}/results`}>
					<FinishButton />
				</a>
			{/if}
		</div>
	</div>
{/if}

<svelte:window on:keydown={handleKeydown} />
