<script lang="ts">
	import { respuestas } from '../../../../stores';

	export let options: Array<string>;
	export let qNumber: number; // question we are in
	export let idSelect: number; // sentence we are in within the question

	// if it's the first time we go into the question,
	// we initialize the global object with this question's number
	if ($respuestas[qNumber] === undefined) {
		$respuestas[qNumber] = {};
	}
</script>

<select
	id={idSelect.toString()}
	on:change={(e) => {
		const value = e.target?.value;

		$respuestas[qNumber][idSelect] = value;
	}}
	class="select select-sm select-primary"
>
	{#each options as opt}
		<option selected={$respuestas[qNumber][idSelect] == opt} value={opt}>{opt}</option>
	{/each}
</select>
