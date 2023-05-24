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
		<div class="mb-9">
			<div class="flex space-x-1 items-start font-bold mb-1">
				<span>{i + 1}.</span>
				<div>{o}</div>
			</div>
			<div class="">
				{#each respuestas[i] as r, j}
					<div class="flex items-center justify-between mb-3">
						<div class="text-sm text-secondary">{opciones[j]}:</div>
						<div
							class={`flex items-center space-x-4 justify-end w-3/4 ${
								results[opciones.length * i + j].bool ? 'text-success' : 'text-error'
							}`}
						>
							<div class="font-bold text-primary text-right">{r === '0' ? 'No hay' : r}</div>
							<div class="text-secondary">—</div>
							<div class="w-max">
								{results[opciones.length * i + j].answer === '0'
									? 'No hay'
									: results[2 * i + j].answer}
							</div>

							<div class="w-min">
								{#if results[opciones.length * i + j].bool}
									<Check weight="bold" size={22} />
								{:else}
									<X weight="bold" size={22} />
								{/if}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>
