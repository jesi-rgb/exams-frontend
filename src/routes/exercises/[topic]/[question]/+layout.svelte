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
	import TopicsButton from '$lib/Components/ui/TopicsButton.svelte';

	export let data;

	// https://stackoverflow.com/questions/75756247/dynamic-routes-dont-refresh-when-navigation-between-them
	// finally some answers to this lol
	$: totalQuestions = data.total;
	$: topicUrl = data.topicUrl;

	$: exerciseNumber = data.number;
	$: nextExercise = (
		exerciseNumber + 1 > totalQuestions ? exerciseNumber : exerciseNumber + 1
	).toString();
	$: previousExercise = (exerciseNumber - 1 <= 0 ? exerciseNumber : exerciseNumber - 1).toString();
	$: question = data.question;

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

{#if visible && question}
	<div in:fly={{ y: 20, duration: 1000, easing: cubicOut }}>
		<TopicsButtonSmall />
		<ExerciseTitle number={exerciseNumber} />
		<ExerciseDetails bloque={question.bloque} tema={question.tema} />

		<slot />

		<div class="flex mt-20 justify-between">
			{#if exerciseNumber <= 1}
				<a target="_self" href={`/exercises/${topicUrl}/${previousExercise}`}>
					<TopicsButton />
				</a>
			{/if}
			{#if exerciseNumber > 1}
				<a target="_self" href={`/exercises/${topicUrl}/${previousExercise}`}>
					<PreviousButton />
				</a>
			{/if}
			{#if exerciseNumber < totalQuestions}
				<a target="_self" href={`/exercises/${topicUrl}/${nextExercise}`}>
					<ContinueButton />
				</a>
			{/if}
			{#if exerciseNumber >= totalQuestions}
				<a target="_self" href={`/exercises/${topicUrl}/results`}>
					<FinishButton />
				</a>
			{/if}
		</div>
	</div>
{/if}

<svelte:window on:keydown={handleKeydown} />
