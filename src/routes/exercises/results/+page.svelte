<script>
	import { respuestas } from '../../../stores';
	import { evaluation } from '$lib/utils/evaluation';
	import { onMount } from 'svelte';
	import ResultsT1 from '$lib/Components/ui/subtipo1/ResultsT1.svelte';
	import ResultsT3 from '$lib/Components/ui/subtipo3/ResultsT3.svelte';
	import { CaretDoubleDown, NotePencil, PencilLine } from 'phosphor-svelte';

	export let data;

	const questions = data.questions;
	const answers = $respuestas;

	let evaluated = undefined;
	onMount(() => {
		evaluated = evaluation(questions, answers);
	});
</script>

<div class="text-5xl mb-5 font-bold">Resultados</div>

<div class="mb-10">
	<details>
		<summary class="text-xl cursor-pointer font-bold text-primary">
			Cómo interpretar los resultados
		</summary>
		<p>
			Se presentan aquí los resultados de las preguntas en contraste con las respuestas
			canónicamente correctas.

			<br />
			<br />
			<span class="inline-block">
				<CaretDoubleDown weight="fill" />
			</span>
			En los ejercicios de elección por desplegable, la respuesta correcta se presenta al lado de la
			oración a la que corresponde. El color de la respuesta indica si se ha elegido correctamente o
			no.

			<br /><br />
			<span class="inline-flex">
				<PencilLine weight="fill" />
			</span>
			En los ejercicios de respuesta abierta, es tarea del estudiante contrastar su respuesta con la
			provista como <i>correcta</i>.
		</p>
	</details>
</div>

{#if evaluated}
	<ul>
		{#each questions as q, i}
			<li class="mb-12">
				<div class="flex justify-start space-x-3 items-center">
					<NotePencil weight="fill" size={25} />
					<div class="text-xl font-bold">
						{`Ejercicio ${i + 1}`}
					</div>
					<!-- <div class="text-secondary text-sm self-end">{q._type}</div> -->
				</div>
				<div class="mb-2 text-base text-secondary">{q.enunciado}</div>
				{#if q._type === 'subtipo1'}
					<ResultsT1 results={evaluated[i]} question={q} />
				{:else if q._type === 'subtipo2'}
					<div>nothing</div>
				{:else if q._type === 'subtipo3'}
					<div />
					<ResultsT3 results={evaluated[i]} question={q} />
				{/if}

				<!-- <div class="italic">{JSON.stringify(answers[i + 1])}</div> -->
			</li>
		{/each}
	</ul>
{:else}
	<div>procesando resultados...</div>
{/if}
