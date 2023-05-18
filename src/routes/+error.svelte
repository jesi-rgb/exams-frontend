<script>
	import { House } from 'phosphor-svelte';
</script>

<div class="my-[50%]">
	<div class="text-center text-8xl font-bold font-mono">404</div>
	<div class="text-center text-3xl">Ups! Parece que esta página no existe.</div>
	<button class="btn btn-outline btn-lg btn-primary flex mx-auto my-20"
		><a href="/"
			><div class="flex space-x-2 items-center">
				<House size={20} weight="fill" />
				<p>Inicio</p>
			</div></a
		></button
	>
</div>
