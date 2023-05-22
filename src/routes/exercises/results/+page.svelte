<script>
	import { respuestas } from '../../../stores';
	export let data;

	console.log(data.questions);
</script>

<div>Resultados</div>

<div>{JSON.stringify($respuestas)}</div>
