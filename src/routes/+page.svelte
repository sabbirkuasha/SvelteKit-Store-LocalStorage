<script>
	// When there is no default export from the script we must use curly braces {} to import
	import { userName } from '../lib/stores';
</script>

<main>
	<!-- $ sign means its auto subscribing with the store -->
	<h1 class="border text-3xl uppercase text-center">{$userName}</h1>

	<div class="py-5">
		<input class="input input-primary" type="text" bind:value={$userName} />
	</div>
</main>
