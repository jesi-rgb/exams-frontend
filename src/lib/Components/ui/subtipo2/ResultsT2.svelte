<script lang="ts">
	import { Check, X } from 'phosphor-svelte';

	export let results;
	export let question;

	const oraciones = question.oraciones;
	const opciones = question.opciones;
	const respuestas = question.respuesta.map((x: string) => x.split(';'));
	console.log(respuestas);
</script>

<div class="">
	{#each oraciones as o, i}
		<div class="mb-4">
			<div class="flex space-x-1 items-start">
				<span>{i + 1}.</span>
				<div>{o}</div>
			</div>
			<div class="">
				{#each respuestas[i] as r, j}
					<div class="flex items-center space-x-1">
						<div>{opciones[j]}:</div>
						<div class={results[opciones.length * i + j].bool ? 'text-success' : 'text-error'}>
							<div class="flex space-x-2 items-center">
								<div class="font-bold">{r === '0' ? 'No hay' : r}</div>
								<div>—</div>
								<div>
									{results[opciones.length * i + j].answer === '0'
										? 'No hay'
										: results[2 * i + j].answer}
								</div>

								<div class={results[opciones.length * i + j].bool ? 'text-success' : 'text-error'}>
									{#if results[opciones.length * i + j].bool}
										<Check weight="bold" />
									{:else}
										<X weight="bold" />
									{/if}
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>
