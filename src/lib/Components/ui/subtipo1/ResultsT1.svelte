<script lang="ts">
	import { FileDashed } from 'phosphor-svelte';
	import Check from 'phosphor-svelte/lib/Check';
	import X from 'phosphor-svelte/lib/X';

	export let results; // user answers. two fields: bool and answer
	export let question;

	const oraciones = question.oraciones;
	const respuestas = question.respuesta;
</script>

<!-- here we are rendering a single sentence from the subtype1 exercise -->
<div>
	<ul>
		{#each oraciones as o, i}
			<li class="list-item">
				<div
					class="flex justify-between items-end space-x-3 py-2 rounded-xl px-4 transition-colors hover:bg-opacity-5 hover:bg-neutral-100"
				>
					<div class="w-3/4 flex items-baseline space-x-3 text-sm md:text-lg">
						<div>{i + 1}.</div>
						<div>
							{o}
						</div>
					</div>
					<div
						class="tooltip text-left tooltip-left tooltip-primary"
						data-tip={` La respuesta correcta es ${respuestas[i]}, tu respuesta fue ${
							results[i].answer === 'none' ? 'dejada en blanco' : results[i].answer
						}`}
					>
						<div class="flex items-center space-x-3">
							<div class={results[i].bool ? 'text-success' : 'text-error'}>
								{#if results[i].answer === 'none'}
									<FileDashed weight="bold" size={22} />
								{:else}
									{results[i].answer}
								{/if}
							</div>
							<div class={results[i].bool ? 'text-success' : 'text-error'}>
								{#if results[i].bool}
									<Check weight="bold" />
								{:else}
									<X weight="bold" />
								{/if}
							</div>
						</div>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>
