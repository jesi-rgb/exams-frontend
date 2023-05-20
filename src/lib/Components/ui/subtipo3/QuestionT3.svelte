<script lang="ts">
	import type { QuestionType3 } from '$lib/types/QuestionTypes';
	import Enunciado from '../subtipo3/Enunciado.svelte';

	export let question: QuestionType3;
	console.log('hi from q3 component');
</script>

<Enunciado enunciado={question.enunciado} />

<textarea name="respuesta" id="respuesta" class="textarea textarea-bordered textarea-lg w-full" />
