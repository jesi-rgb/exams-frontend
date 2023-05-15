<script>
	import FormField from '$lib/Components/FormField.svelte';
</script>

<div class="text-4xl font-bold">Crear nuevas preguntas</div>

<form method="POST" class="my-4 space-y-3 items-start w-full">
	<FormField name="title" />
	<FormField name="description" />
	<FormField name="answers" type="number" />
	<button class="text-xl font-bold bg-gray-100 border p-3 mt-10">Guardar</button>
</form>
