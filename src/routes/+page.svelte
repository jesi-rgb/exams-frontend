<script lang="ts">
	import Enunciado from '$lib/Components/ui/subtipo1/Enunciado.svelte';
	import Options from '$lib/Components/ui/subtipo1/Options.svelte';
	import QuestionT1 from '$lib/Components/ui/subtipo1/QuestionT1.svelte';
	import type { QuestionType1 } from '$lib/types/QuestionType1.js';

	export let data;
	console.log(data.questions);
	const questions: Array<QuestionType1> = data.questions;
</script>

<QuestionT1 questions={data.questions} />
