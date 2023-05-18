<script>
	export let options = ['relativo', 'conjunción'];
</script>

<select class="select select-sm select-primary">
	{#each options as opt}
		<option value={opt}>{opt}</option>
	{/each}
</select>
