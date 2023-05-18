<script>
	import Steps from '$lib/Components/ui/Steps.svelte';
	import ListItem from '$lib/Components/ui/subtipo1/ListItem.svelte';
	import { ArrowRight } from 'phosphor-svelte';
</script>

<Steps current={1} total={8} />

<div class="text-3xl font-semibold tracking-tight font-serif">Ejercicio 1</div>

<!-- ENUNCIADO -->
<div class="mb-20 mt-10 pb-5 border-b border-primary">
	<div>
		En los siguientes ejemplos aparecen distintos tipos de <span class="text-primary font-bold"
			>que</span
		>. Indique en el recuadro si
		<span class="text-primary font-bold">que</span> es un pronombre relativo o una conjunción.
	</div>
</div>

<!-- EJERCICIO -->
<div class="">
	<ol class="list-decimal flex flex-col space-y-5">
		<li>
			<div class="flex items-center justify-between">
				<p class="w-3/4">
					El chico <span class="text-primary font-bold">que</span> llegó tarde era mi hermano.
				</p>
				<ListItem options={['relativo', 'conjunción']} />
			</div>
		</li>
		<li>
			<div class="flex items-center justify-between">
				<p class="w-3/4">
					El hecho de <span class="text-primary font-bold">que</span> no te guste no legitima tu actuación.
				</p>
				<ListItem options={['relativo', 'conjunción']} />
			</div>
		</li>
	</ol>
</div>

<div class="flex justify-end mt-10">
	<button class="btn btn-primary">
		<div class="flex space-x-3 items-center">
			<p>Continuar</p>
			<ArrowRight weight="bold" size={20} />
		</div>
	</button>
</div>
