<script lang="ts">
	import type { QuestionType1 } from '$lib/types/QuestionTypes';
	import AnswerField from './AnswerField.svelte';
	import Enunciado from './Enunciado.svelte';

	export let question: QuestionType1;

	console.log(question);
</script>

<Enunciado body={question.enunciado} termino={question.termino} />

<AnswerField
	oraciones={question.oraciones}
	opciones={question.opciones}
	termino={question.termino}
/>
