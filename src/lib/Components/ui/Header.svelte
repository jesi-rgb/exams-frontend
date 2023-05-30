<script>
	import { House, BookOpen, Info } from 'phosphor-svelte';
</script>

<nav class="flex justify-start space-x-4 text-xl font-semibold text-primary">
	<a href="/" class="flex space-x-2 items-center group hover:text-primary-focus transition-colors">
		<House class="transform group-hover:rotate-12 transition-transform duration-300" />
		<div>Inicio</div>
	</a>
	<a
		href="/exercises"
		class="flex space-x-2 items-center group hover:text-primary-focus transition-colors"
	>
		<BookOpen class="transform group-hover:rotate-12 transition-transform duration-300" />
		<div>Temas</div>
	</a>
	<a
		href="/about"
		class="flex space-x-2 items-center group hover:text-primary-focus transition-colors"
	>
		<Info class="transform group-hover:rotate-12 transition-transform duration-300" />
		<div>Más información</div>
	</a>
</nav>
