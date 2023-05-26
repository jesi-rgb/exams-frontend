<script lang="ts">
	import AnswerField from './AnswerField.svelte';
	import Enunciado from './Enunciado.svelte';

	export let data;
	const topicUrl = data.topicUrl;
</script>

<Enunciado body={data.question.enunciado} termino={data.question.termino} />

<AnswerField
	{topicUrl}
	number={data.number}
	oraciones={data.question.oraciones}
	opciones={data.question.opciones}
	termino={data.question.termino}
/>
