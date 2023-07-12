<script>
	// When there is no default export from the script we must use curly braces {} to import

	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { writable } from 'svelte/store';

	//API CALL Function
	import { productFetch } from '../lib/API/callAPI';

	const products = writable([]);
	$: console.log($products);

	onMount(async () => {
		const fetchedData = await productFetch();
		products.set(fetchedData.products);
	});
</script>

<main class="p-5">
	<div class="grid grid-cols-4 gap-5 gap-y-10">
		{#each $products as product, i}
			<div class="card bg-base-200 shadow-xl">
				<figure><img class="w-36" src={product.images[0]} alt="Shoes" /></figure>
				<div class="card-body">
					<h2 class="card-title">{product.title}</h2>
					<div class="flex flex-row gap-x-1">
						<h2 class="card-title font-bold text-white mr-2">Price</h2>
						<h2 class="card-title font-bold">$</h2>
						<h2 class="card-title font-bold">{product.price}</h2>
					</div>
					<div class="flex flex-row gap-x-1">
						<h2 class="card-title font-bold text-white mr-2">Discount</h2>
						<h2 class="card-title font-bold">{product.discountPercentage}</h2>
						<h2 class="card-title font-bold">%</h2>
					</div>
					<p>{product.description}</p>
					<div class="card-actions justify-end">
						<button class="btn btn-primary">Add to cart</button>
					</div>
				</div>
			</div>
		{/each}
	</div>
</main>
