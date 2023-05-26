<script>
	import unidecode from 'unidecode';
	export let data;

	const bloques = Object.keys(data);
</script>

<svelte:head>
	<title>Ejercicios de gramática</title>
</svelte:head>

{#each bloques as bloque}
	<div class="mb-20">
		<div class="font-bold text-5xl mb-4 tracking-tight">{bloque}</div>
		{#each Object.keys(data[bloque]) as t}
			<a href={`/exercises/${unidecode(t).toLowerCase().replaceAll(' ', '-')}/1`}>
				<div class="flex space-x-3 text-xl mb-2">
					<div>{t}</div>
					<div class="text-secondary">{data[bloque][t]} preguntas</div>
				</div>
			</a>
		{/each}
	</div>
{/each}
