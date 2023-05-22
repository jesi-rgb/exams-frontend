<script lang="ts">
	import AnswerField from './AnswerField.svelte';
	import Enunciado from './Enunciado.svelte';

	export let data;
</script>

<Enunciado body={data.question.enunciado} termino={data.question.termino} />

<AnswerField
	number={data.number}
	oraciones={data.question.oraciones}
	opciones={data.question.opciones}
	termino={data.question.termino}
/>
