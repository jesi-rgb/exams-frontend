<script lang="ts">
	import { respuestas } from '../../../../stores';

	import Enunciado from '../subtipo3/Enunciado.svelte';

	export let data;
	const qNumber = data.number;
	const topicUrl = data.topicUrl;

	if ($respuestas[topicUrl] === 'undefined') {
		$respuestas[topicUrl] = '';
	}

	if ($respuestas[topicUrl][qNumber] === 'undefined') {
		$respuestas[topicUrl][qNumber] = '';
	}
	//
</script>

<Enunciado enunciado={data.question.enunciado} />

<textarea
	on:change={(e) => ($respuestas[topicUrl][qNumber] = e.target.value)}
	name="respuesta"
	id="respuesta"
	value={$respuestas[topicUrl][qNumber] == undefined ? '' : $respuestas[topicUrl][qNumber]}
	class="textarea textarea-bordered textarea-lg w-full"
/>
