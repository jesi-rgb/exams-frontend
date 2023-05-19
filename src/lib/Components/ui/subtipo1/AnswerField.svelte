<script lang="ts">
	import { highlightTerm } from '$lib/utils/questionType1';
	import Options from './Options.svelte';

	export let oraciones: Array<string>;
	export let opciones: Array<string>;
	export let termino: string;

	const oracinoesHighlighted = oraciones.map((o) => {
		return highlightTerm(o, termino);
	});
</script>

<ol class=" list-decimal">
	{#each oracinoesHighlighted as oracion}
		<li>
			<div class="flex space-y-5 justify-between items-baseline">
				<div class="w-3/4">
					{@html oracion}
				</div>

				<Options options={opciones} />
			</div>
		</li>
	{/each}
</ol>
