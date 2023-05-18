<script>
	import ContinueButton from '$lib/Components/ui/ContinueButton.svelte';
	import PreviousButton from '$lib/Components/ui/PreviousButton.svelte';

	export let data;

	const nextExercise = (data.number + 1).toString();
	const previousExercise = (data.number - 1 > 1 ? data.number - 1 : 1).toString();
</script>

<div class="flex mt-20 justify-between">
	<a href={`/exercises/${previousExercise}`}>
		<PreviousButton />
	</a>
	<a href={`/exercises/${nextExercise}`}>
		<ContinueButton />
	</a>
</div>
