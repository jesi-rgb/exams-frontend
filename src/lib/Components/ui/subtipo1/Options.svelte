<script lang="ts">
	export let options: Array<string>;
</script>

<select class="select select-sm select-primary">
	{#each options as opt}
		<option value={opt}>{opt}</option>
	{/each}
</select>
