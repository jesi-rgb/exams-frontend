<script lang="ts">
	import Enunciado from '../subtipo1/Enunciado.svelte';
	import EnunciadoT2 from './EnunciadoT2.svelte';

	export let data;
	const question = data.question;
	const opciones = question.opciones;
	const oraciones = question.oraciones;
	console.log(data);

	let checkedMap: Object<string, boolean> = {};
	oraciones.map((x: string, j: number) => {
		opciones.map((y: string, i: number) => {
			checkedMap[`${j}.${i}`] = false;
		});
	});
</script>

<EnunciadoT2 enunciado={question.enunciado} />
<ol>
	{#each oraciones as q, j}
		<li>
			<div class="flex flex-col mb-10">
				<!-- numero y título de la pregunta-->
				<div class="flex space-x-1 font-semibold mb-2">
					<div class="tabular-nums">{j + 1}.</div>
					<p class="">{q}</p>
				</div>

				<!-- mega div con etiqueta, input field y checkbox-->
				<div class="flex flex-col">
					{#each opciones as o, i}
						<div class="flex justify-between items-center mb-2 space-x-5">
							<label class="text-sm text-right w-1/3" for={`input-${j}.${i}`}>{o}</label>
							<input
								id={`input-${j}.${i}`}
								type="text"
								disabled={checkedMap[`${j}.${i}`]}
								class="input input-primary input-sm w-1/3"
							/>
							<div class="self-end">
								<input
									type="checkbox"
									bind:checked={checkedMap[`${j}.${i}`]}
									class="checkbox checkbox-xs checkbox-primary"
									on:change={(e) => {
										const value = e.target.checked;
										if (value) {
											const inputField = document.getElementById(`input-${j}.${i}`);
											console.log(inputField);
											inputField.value = '';
										}
										console.log(e);
									}}
									id={`check-${j}.${i}`}
								/>
								<label for={`check-${j}.${i}`}>No hay</label>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</li>
	{/each}
</ol>
