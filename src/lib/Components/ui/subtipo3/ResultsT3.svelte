<script lang="ts">
	import { FileDashed } from 'phosphor-svelte';
	import Check from 'phosphor-svelte/lib/Check';
	import PencilLine from 'phosphor-svelte/lib/PencilLine';

	export let question;
	export let results: string;
</script>

<div class="mb-3">
	<div class="flex items-center text-primary space-x-3">
		<Check weight="bold" />
		<div class="font-bold">Respuesta correcta:</div>
	</div>
	<div>{question.respuesta}</div>
</div>

<div>
	<div class="flex items-center text-primary space-x-3">
		<PencilLine weight="fill" />
		<div class="font-bold">Tu respuesta:</div>
	</div>
	{#if results === undefined || results === ''}
		<div class="flex items-center text-error space-x-2">
			<FileDashed weight="bold" size={22} />
			<div class="italic">Pregunta sin contestar</div>
		</div>
	{:else}
		<div class="italic">{results}</div>
	{/if}
</div>
