<script>
	import AnswerField from '$lib/Components/ui/subtipo1/AnswerField.svelte';
	import Enunciado from '$lib/Components/ui/subtipo1/Enunciado.svelte';

	export let data;

	console.log(data);
</script>

<Enunciado body={data.question.enunciado} termino={data.question.termino} />

<AnswerField
	oraciones={data.question.oraciones}
	opciones={data.question.opciones}
	termino={data.question.termino}
/>
