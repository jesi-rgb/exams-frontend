<script lang="ts">
	import { highlightTerm } from '$lib/utils/questionType1';
	import Options from './Options.svelte';

	export let oraciones: Array<string>;
	export let opciones: Array<string>;
	export let termino: string;
	export let number: number;

	const oracionesHighlighted = oraciones.map((o) => {
		return highlightTerm(o, termino);
	});
</script>

<ol class=" list-decimal">
	{#each oracionesHighlighted as oracion, i}
		<li>
			<div class="flex justify-between items-center md:items-start mb-9">
				<div class="mr-3 md:mr-0">
					{@html oracion}
				</div>

				<Options idSelect={i} qNumber={number} options={opciones} />
			</div>
		</li>
	{/each}
</ol>
