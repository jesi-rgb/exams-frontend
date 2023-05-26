<script>
	import { House } from 'phosphor-svelte';
	import { page } from '$app/stores';
	import HomeButton from '$lib/Components/ui/HomeButton.svelte';
</script>

<div class="my-20">
	<div class="text-center text-9xl font-bold tabular-nums">404</div>
	<div class="text-center text-3xl mb-3">Ups! Parece que esta página no existe.</div>
	<div class="text-center text-2xl text-secondary mb-5">¿Volvemos al inicio?</div>
	<div class="text-center text-xl text-secondary-focus">{$page.status}: {$page.error.message}</div>
	<div class="text-center text-xl text-secondary-focus">{JSON.stringify($page.data)}</div>

	<div class="flex justify-center mt-10">
		<HomeButton />
	</div>
</div>
