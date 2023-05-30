<script>
	import Footer from '$lib/Components/ui/Footer.svelte';
	import Header from '$lib/Components/ui/Header.svelte';
</script>

<div>
	<Header />
	<div class="my-10">
		<slot />
	</div>
	<Footer />
</div>
