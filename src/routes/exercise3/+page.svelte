<script>
	import Steps from '$lib/Components/ui/Steps.svelte';
	import ListItem from '$lib/Components/ui/subtipo1/ListItem.svelte';
	import { ArrowRight } from 'phosphor-svelte';

	let checked = false;
</script>

<Steps current={3} total={8} />

<div class="text-3xl font-semibold tracking-tight font-serif">Ejercicio 3</div>

<!-- ENUNCIADO -->
<div class="mb-20 mt-10 pb-5 border-b border-primary tracking-wide">
	<div>
		Introduzca en los recuadros correspondientes las secuencias de palabras que funcionan como
		complementos directos o complementos indirectos o marque la casilla <span
			class="inline-block self-center"
		>
			<input type="checkbox" class="checkbox checkbox-xs checkbox-primary" checked /></span
		> en caso de que no haya.
	</div>
</div>

<!-- EJERCICIO -->
<div class="">
	<ol class="list-decimal flex flex-col space-y-10">
		<li>
			<div class="flex flex-col">
				<p class="w-3/4">No podía decirle la verdad.</p>
				<div class="flex flex-col">
					<div class="flex space-x-5">
						<div>
							<label for="CD">CD</label>
							<input id="CD" type="text" disabled={checked} class="input input-primary input-xs" />
						</div>
						<div class="self-end">
							<input
								type="checkbox"
								bind:checked
								class="checkbox checkbox-xs checkbox-primary"
								id="none-1"
							/>
							<label for="none-1">No hay</label>
						</div>
					</div>

					<div class="flex flex-col">
						<div class="flex space-x-5">
							<div>
								<label for="CI" class="mr-[9px]">CI</label>
								<input id="CI" type="text" class="input input-primary input-xs" />
							</div>
							<div class="self-end">
								<input type="checkbox" class="checkbox checkbox-xs checkbox-primary" id="none" />
								<label for="none">No hay</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</li>
		<li>
			<div class="flex flex-col">
				<p class="w-3/4">¿Qué le compraste al final?</p>
				<div class="flex flex-col">
					<div class="flex space-x-5">
						<div>
							<label for="CD">CD</label>
							<input id="CD" type="text" class="input input-primary input-xs" />
						</div>
						<div class="self-end">
							<input type="checkbox" class="checkbox checkbox-xs checkbox-primary" id="none" />
							<label for="none">No hay</label>
						</div>
					</div>

					<div class="flex flex-col">
						<div class="flex space-x-5">
							<div>
								<label for="CI" class="mr-[9px]">CI</label>
								<input id="CI" type="text" class="input input-primary input-xs" />
							</div>
							<div class="self-end">
								<input type="checkbox" class="checkbox checkbox-xs checkbox-primary" id="none" />
								<label for="none">No hay</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</li>
		<li>
			<div class="flex flex-col">
				<p class="w-3/4">Se le ha caído el sombrero.</p>
				<div class="flex flex-col">
					<div class="flex space-x-5">
						<div>
							<label for="CD">CD</label>
							<input id="CD" type="text" class="input input-primary input-xs" />
						</div>
						<div class="self-end">
							<input type="checkbox" class="checkbox checkbox-xs checkbox-primary" id="none" />
							<label for="none">No hay</label>
						</div>
					</div>

					<div class="flex flex-col">
						<div class="flex space-x-5">
							<div>
								<label for="CI" class="mr-[9px]">CI</label>
								<input id="CI" type="text" class="input input-primary input-xs" />
							</div>
							<div class="self-end">
								<input type="checkbox" class="checkbox checkbox-xs checkbox-primary" id="none" />
								<label for="none">No hay</label>
							</div>
						</div>
					</div>
				</div>
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
