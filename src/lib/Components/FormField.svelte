<script lang="ts">
	export let name: string;
	export let type: 'text' | 'number' = 'text';
</script>

<div class="w-full">
	<label class="text-xl font-bold">{name}</label>
	<input class="border flex justify-between text-left" {name} {type} placeholder={name} />
</div>
