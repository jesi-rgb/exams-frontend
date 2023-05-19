<script lang="ts">
	import Enunciado from './Enunciado.svelte';
	import Options from './Options.svelte';

	export let questions: Array<QuestionType1>;
</script>

<ul class="list-decimal">
	{#each questions as question}
		<li class="mb-10">
			<div>Bloque: {question.bloque}</div>
			<div>Tema: {question.tema}</div>
			<div class="font-bold font-serif">{question.name}</div>
			<Enunciado body={question.enunciado} termino={question.termino} />

			<ol class="list-inside list-decimal">
				{#each question.oraciones as oracion}
					<li>
						<div class="flex justify-between">
							<p>
								{oracion}
							</p>

							<Options options={question.opciones} />
						</div>
					</li>
				{/each}
			</ol>
		</li>
	{/each}
</ul>
