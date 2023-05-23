<script lang="ts">
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
	<div class="italic">{results}</div>
</div>
