<script>
	import ContinueButton from '$lib/Components/ui/ContinueButton.svelte';
	import Steps from '$lib/Components/ui/Steps.svelte';
	import ListItem from '$lib/Components/ui/subtipo1/ListItem.svelte';
</script>

<Steps current={2} total={8} />

<div class="text-3xl font-semibold tracking-tight font-serif">Ejercicio 2</div>

<!-- ENUNCIADO -->
<div class="mb-20 mt-10 pb-5 border-b border-primary">
	<div>
		Indique por qué no se puede hacer una oración pasiva refleja a partir de la oración: <span
			class="text-primary italic">Eligieron a los trabajadores mejor cualificados.</span
		>
	</div>
</div>

<!-- EJERCICIO -->
<div>
	<textarea
		placeholder="Bio"
		cols="30"
		class="textarea textarea-bordered textarea-primary textarea-lg w-full"
	/>
</div>

<div class="flex justify-end mt-10">
	<ContinueButton />
</div>
