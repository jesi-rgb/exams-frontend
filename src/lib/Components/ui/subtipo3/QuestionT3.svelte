<script lang="ts">
	import { respuestas } from '../../../../stores';

	import Enunciado from '../subtipo3/Enunciado.svelte';

	export let data;
	const qNumber = data.number;

	if ($respuestas[qNumber] === 'undefined') {
		$respuestas[qNumber] = '';
	}
	//
</script>

<Enunciado enunciado={data.question.enunciado} />

<textarea
	on:change={(e) => ($respuestas[qNumber] = e.target.value)}
	name="respuesta"
	id="respuesta"
	value={$respuestas[qNumber] == undefined ? '' : $respuestas[qNumber]}
	class="textarea textarea-bordered textarea-lg w-full"
/>
