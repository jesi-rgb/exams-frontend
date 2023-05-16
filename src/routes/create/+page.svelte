<script lang="ts">
	import Editor from '$lib/Components/Editor.svelte';
	import FormField from '$lib/Components/FormField.svelte';

	let innerHTML: string;
</script>

<div class="text-4xl font-bold">Crear nuevas preguntas</div>

<form method="POST" class="my-4 space-y-3 items-start w-full">
	<FormField name="title" />
	<div class="flex flex-col">
		<label class="text-xl font-bold">Description</label>
		<textarea
			contenteditable
			placeholder="Añade una descripción de la pregunta..."
			name="description"
			value="Explica con 3 palabras lo que significa algo"
			class="border border-black px-3 py-2 rounded-md"
			id="editor"
			rows="10"
			cols="20"
		/>
	</div>
	<FormField name="answers" type="number" />
	<button class="text-xl font-bold bg-gray-100 border p-3 mt-10">Guardar</button>
</form>
