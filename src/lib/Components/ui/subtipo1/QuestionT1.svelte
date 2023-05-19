<script lang="ts">
	import type { QuestionType1 } from '$lib/types/QuestionType1';
	import AnswerField from './AnswerField.svelte';
	import Enunciado from './Enunciado.svelte';
	import Options from './Options.svelte';

	export let questions: Array<QuestionType1>;

	console.log(questions[0].oraciones);
</script>

<ul class="list-none">
	{#each questions as question, i}
		<li class="mb-32">
			<div class="font-bold font-serif text-3xl mb-5">{`Ejercicio ${i + 1}`}</div>
			<div class="flex space-x-5 text-sm">
				<div><b>Bloque</b>: {question.bloque}</div>
				<div><b>Tema</b>: {question.tema}</div>
			</div>
			<Enunciado body={question.enunciado} termino={question.termino} />

			<AnswerField
				oraciones={question.oraciones}
				opciones={question.opciones}
				termino={question.termino}
			/>
		</li>
	{/each}
</ul>
