<script lang="ts">
	import { respuestas } from '../../../../stores';

	export let options: Array<string>;
	export let qNumber: number; // question we are in
	export let idSelect: number; // sentence we are in within the question
	export let topicUrl: string;

	if ($respuestas[topicUrl] === undefined) $respuestas[topicUrl] = {};

	if ($respuestas[topicUrl][qNumber] === undefined) $respuestas[topicUrl][qNumber] = {};

	if ($respuestas[topicUrl][qNumber][idSelect] === undefined)
		$respuestas[topicUrl][qNumber][idSelect] = 'none';
</script>

<select
	id={idSelect.toString()}
	on:change={(e) => {
		const value = e.target.value;
		console.log(e, idSelect);

		$respuestas[topicUrl][qNumber][idSelect] = value;
	}}
	class="self-end md:self-center select select-sm select-primary mt-2"
>
	{#each options as opt}
		<option selected={$respuestas[topicUrl][qNumber][idSelect] == opt} value={opt}>{opt}</option>
	{/each}
	<option selected={$respuestas[topicUrl][qNumber][idSelect] === 'none'} value="none"
		>Seleccione</option
	>
</select>
