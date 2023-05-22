<script>
	import { respuestas } from '../../../stores';
	export let data;

	console.log(data.questions);
	const questions = data.questions;
	const answers = $respuestas;
</script>

<div class="text-5xl mb-10 font-bold">Resultados</div>

<ul class="list-decimal">
	{#each questions as q, i}
		<li class="mb-5">
			<div class="flex justify-start space-x-3 items-baseline">
				<div class="text-xl font-semibold">
					{`Ejercicio ${i + 1}`}
				</div>
				<div class="text-secondary text-sm">{q._type}</div>
			</div>
			<div>{q.enunciado}</div>
			<div>{q.respuesta}</div>

			<div class="italic">{JSON.stringify(answers[i + 1])}</div>
		</li>
	{/each}
</ul>
