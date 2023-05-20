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
<div>
	contenido de la pregunta Et sunt occaecat cupidatat consectetur excepteur aute id. Officia anim
	cupidatat laborum qui quis occaecat commodo irure sunt aute fugiat enim. Ea eiusmod consequat ad
	et adipisicing nulla ex. Ad consequat aliquip aliqua sit qui exercitation cillum veniam est. Amet
	mollit velit tempor magna magna consequat eu fugiat irure ad pariatur consequat est sint. Duis non
	proident voluptate. Proident nostrud ex nisi sint.
</div>
