<script>
	import Steps from '$lib/Components/ui/Steps.svelte';
	export let data;

	console.log('layout', data);
	let exerciseNumber = data.number;
</script>

<Steps current={exerciseNumber} total={8} />

<div class="text-3xl font-semibold font-serif mb-10">Ejercicio {exerciseNumber}</div>

<slot />
