<script>
	import Check from 'phosphor-svelte/lib/Check';
</script>

<button class="btn btn-primary group">
	<div class="flex space-x-3 items-center">
		<p>Finalizar</p>
		<Check
			class="transform transition-transform group-hover:scale-125 duration-100"
			weight="bold"
			size={20}
		/>
	</div>
</button>
