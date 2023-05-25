<script lang="ts">
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
				<div class="flex justify-between items-end space-x-3">
					<div class="w-3/4 flex items-baseline space-x-3">
						<div>{i + 1}.</div>
						<div>
							{o}
						</div>
					</div>
					<div
						class="tooltip text-left tooltip-left tooltip-primary"
						data-tip={` La respuesta correcta es ${respuestas[i]}, tu respuesta fue ${
							results[i].answer == 'none' ? 'dejada en blanco' : results[i].answer
						}`}
					>
						<div class="flex items-center space-x-3">
							<div class={results[i].bool ? 'text-success' : 'text-error'}>{respuestas[i]}</div>
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
