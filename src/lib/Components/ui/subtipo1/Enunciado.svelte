<script lang="ts">
	export let body: string;
	export let termino: string;

	function replacer(match: string) {
		return `<span class="text-primary font-bold">${match}</span>`;
	}
	function highlightTerm(text: string, term: string) {
		return text.replaceAll(new RegExp(`\\W${term}\\W`, 'g'), replacer);
	}

	const highlightedBody = highlightTerm(body, termino);
</script>

<div class="mb-20 mt-10 pb-5 border-b border-primary">
	<div>
		{@html highlightedBody}
	</div>
</div>
