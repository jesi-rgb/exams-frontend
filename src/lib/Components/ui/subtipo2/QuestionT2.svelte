<script lang="ts">
	import Enunciado from '../subtipo1/Enunciado.svelte';
	import EnunciadoT2 from './EnunciadoT2.svelte';
	import { respuestas } from '../../../../stores';
	import { onMount } from 'svelte';

	export let data;
	const question = data.question;
	const opciones = question.opciones;
	const oraciones = question.oraciones;
	const qNumber = data.number;

	if ($respuestas[qNumber] === undefined) {
		$respuestas[qNumber] = {};
	}

	let checkedMap: Object<string, boolean> = {};
	oraciones.map((x: string, j: number) => {
		opciones.map((y: string, i: number) => {
			checkedMap[`${j}.${i}`] = false;
			if ($respuestas[qNumber][`${j}.${i}`] === undefined) {
				$respuestas[qNumber][`${j}.${i}`] = '';
			}
		});
	});

	onMount(() => {
		if ($respuestas[qNumber] !== undefined) {
			Object.keys($respuestas[qNumber]).map((k) => {
				console.log(k);
				const inputField = document.getElementById(`input-${k}`);

				if (inputField && $respuestas[qNumber][k])
					inputField.value = $respuestas[qNumber][k] !== '0' ? $respuestas[qNumber][k] : '';
				else console.log(inputField);

				$respuestas[qNumber][k] === '0' ? (checkedMap[k] = true) : (checkedMap[k] = false);
			});
		}
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
						<div class="flex justify-between items-center mb-2">
							<label class="text-sm w-1/3" for={`input-${j}.${i}`}>{o}</label>
							<input
								id={`input-${j}.${i}`}
								type="text"
								value={$respuestas[qNumber][`${j}.${i}`] === undefined
									? ''
									: $respuestas[qNumber][`${j}.${i}`] === '0'
									? ''
									: $respuestas[qNumber][`${j}.${i}`]}
								disabled={checkedMap[`${j}.${i}`]}
								class="input input-primary input-sm w-1/3"
								on:change={(e) => {
									console.log(e);
									const inputField = e.target;
									$respuestas[qNumber][`${j}.${i}`] = inputField.value.trim();
								}}
							/>
							<div class="flex flex-col xl:flex-row items-center space-x-2">
								<input
									type="checkbox"
									bind:checked={checkedMap[`${j}.${i}`]}
									class="checkbox checkbox-xs md:checkbox-sm checkbox-primary"
									on:change={(e) => {
										// we make sure that,
										// if the user clicks on the checkbox,
										// we erase the input field
										const value = e.target.checked;
										if (value) {
											const inputField = document.getElementById(`input-${j}.${i}`);
											$respuestas[qNumber][`${j}.${i}`] = '0';
											inputField.value = '';
										}
									}}
									id={`check-${j}.${i}`}
								/>
								<label class="text-sm md:text-base" for={`check-${j}.${i}`}>No hay</label>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</li>
	{/each}
</ol>
