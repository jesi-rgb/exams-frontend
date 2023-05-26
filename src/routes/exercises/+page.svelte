<script>
	import unidecode from 'unidecode';
	export let data;

	const bloques = Object.keys(data);
</script>

<svelte:head>
	<title>Temario – Ejercicios de gramática avanzada del español</title>
</svelte:head>

<div class="mb-10">
	<div class="text-6xl font-bold mb-3 text-primary">Temario</div>
	<div class="text-secondary">
		<p>
			El compendio de ejercicios se divide en 2 grandes bloques: <b>Morfología</b> y
			<b>Sintaxis</b>. En cada bloque podemos encotrar ejercicios agrupados por temas.
		</p>
		<p>
			Clica en cualquiera de los temas para empezar el test. Al final del test, podrás comprobar tus
			resultados.
		</p>
	</div>
</div>
{#each bloques as bloque}
	<div class="mb-20">
		<div class="font-bold text-4xl mb-4 tracking-tight">{bloque}</div>
		{#each Object.keys(data[bloque]) as t}
			<a href={`/exercises/${unidecode(t).toLowerCase().replaceAll(' ', '-')}/1`}>
				<div class="flex space-x-3 text-xl mb-2 btn btn-outline justify-between">
					<div>{t}</div>
					<div>
						{data[bloque][t]}
						{data[bloque][t] === 1 ? 'pregunta' : 'preguntas'}
					</div>
				</div>
			</a>
		{/each}
	</div>
{/each}
