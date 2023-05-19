<script lang="ts">
	import type { QuestionType1 } from '$lib/types/QuestionType1';
	import ExerciseDetails from '../ExerciseDetails.svelte';
	import ExerciseTitle from '../ExerciseTitle.svelte';
	import AnswerField from './AnswerField.svelte';
	import Enunciado from './Enunciado.svelte';
	import Options from './Options.svelte';

	export let questions: Array<QuestionType1>;

	console.log(questions[0].oraciones);
</script>

<ul class="list-none">
	{#each questions as question, i}
		<li class="mb-32">
			<ExerciseTitle number={i + 1} />
			<ExerciseDetails bloque={question.bloque} tema={question.tema} />
			<Enunciado body={question.enunciado} termino={question.termino} />

			<AnswerField
				oraciones={question.oraciones}
				opciones={question.opciones}
				termino={question.termino}
			/>
		</li>
	{/each}
</ul>
