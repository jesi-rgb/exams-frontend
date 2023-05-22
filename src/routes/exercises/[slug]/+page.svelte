<script>
	import QuestionT1 from '$lib/Components/ui/subtipo1/QuestionT1.svelte';
	import QuestionT2 from '$lib/Components/ui/subtipo2/QuestionT2.svelte';
	import QuestionT3 from '$lib/Components/ui/subtipo3/QuestionT3.svelte';
	import { respuestas } from '../../../stores.js';

	export let data;
	const type = data.question._type;
</script>

{#if type === 'subtipo1'}
	<QuestionT1 {data} />
{:else if type === 'subtipo2'}
	<QuestionT2 question={data.question} />
{:else if type === 'subtipo3'}
	<QuestionT3 {data} />
{/if}
