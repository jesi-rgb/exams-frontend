<script lang="ts">
	import ArrowLeft from 'phosphor-svelte/lib/ArrowLeft';
</script>

<button class="btn btn-secondary group">
	<div class="flex space-x-3 items-center">
		<ArrowLeft
			class="transform transition-transform duration-100 group-hover:-translate-x-1"
			weight="bold"
			size={20}
		/>
		<p>Anterior</p>
	</div>
</button>
