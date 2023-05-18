<script lang="ts">
	export let current: number;

	export let total: number;
</script>

<ul class="steps font-bold font-mono mb-10" style="filter: drop-shadow(0px 0px 1px #CCCCCCCC);">
	{#each { length: current } as cli}
		<li class="step step-primary" />
	{/each}

	{#each { length: total - current } as cli}
		<li class="step" />
	{/each}
</ul>
