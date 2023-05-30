<script>
	import Header from '$lib/Components/ui/Header.svelte';
	import Footer from '$lib/Components/ui/Footer.svelte';
</script>

<div class="my-20 text-base md:text-lg mx-auto max-w-xs sm:max-w-sm md:max-w-xl xl:max-w-xl">
	<Header />
	<div class="my-10">
		<slot />
	</div>
	<Footer />
</div>
