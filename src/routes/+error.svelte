<script>
	import { House } from 'phosphor-svelte';
</script>

<div class="my-20">
	<div class="text-center text-9xl font-bold tabular-nums">404</div>
	<div class="text-center text-3xl mb-3">Ups! Parece que esta página no existe.</div>
	<div class="text-center text-2xl text-secondary-focus">¿Volvemos al inicio?</div>
	<button class="btn btn-outline btn-lg btn-primary flex mx-auto my-20"
		><a href="/"
			><div class="flex space-x-2 items-center">
				<House size={20} weight="fill" />
				<p>Inicio</p>
			</div></a
		></button
	>
</div>
