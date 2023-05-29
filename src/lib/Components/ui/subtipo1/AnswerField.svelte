<script lang="ts">
	import { highlightTerm } from '$lib/utils/questionType1';
	import Options from './Options.svelte';

	export let oraciones: Array<string>;
	export let opciones: Array<string>;
	export let termino: string;
	export let number: number;
	export let topicUrl: string;

	const oracionesHighlighted = oraciones.map((o) => {
		return highlightTerm(o, termino);
	});
</script>

<ol class=" list-decimal">
	{#each oracionesHighlighted as oracion, i}
		<li>
			<div
				class="flex flex-col md:flex-row justify-start md:justify-between md:items-start mb-14 md:mb-9"
			>
				<div class="mr-5 md:mr-0">
					{@html oracion}
				</div>

				<Options idSelect={i} {topicUrl} qNumber={number} options={opciones} />
			</div>
		</li>
	{/each}
</ol>
