<script>
	// When there is no default export from the script we must use curly braces {} to import

	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { writable } from 'svelte/store';

	//API CALL Function
	import { productFetch, products } from '../lib/API/callAPI';

	$: console.log($products);

	onMount(async () => {
		await productFetch(1, 'saree', '');
	});

	const isDrawerOpen = writable(false);
	function openDrawer() {
		isDrawerOpen.set(true);
	}
</script>

<main class="p-5">
	<div class="grid grid-cols-4 gap-5 gap-y-10">
		So quite
		<!-- {#if $products.length != ''}
			{#each $products.data as product, i}
				<div class="card bg-base-200 shadow-xl">
					<figure><img class="w-36" src={product.featured1_image.main_url} alt="Shoes" /></figure>
					<div class="card-body">
						<h2 class="card-title">{product.name}</h2>
						<div class="flex flex-row gap-x-1">
							<h2 class="card-title font-bold">{product.price}</h2>
						</div>

						{#if product.discount != null}
							<div class="flex flex-row gap-x-1">
								<h2 class="card-title font-bold text-white mr-2">Discount</h2>
								<h2 class="card-title font-bold">{product.discountPercentage}</h2>
								<h2 class="card-title font-bold">%</h2>
							</div>
						{/if}

						<div class="card-actions justify-end">
							<button on:click={openDrawer} class="btn btn-primary">Add to cart</button>
						</div>
					</div>
				</div>
			{/each}
		{/if} -->
	</div>

	<div class="drawer drawer-end">
		<input
			id="my-drawer-4"
			type="checkbox"
			class="drawer-toggle"
			hidden
			bind:checked={$isDrawerOpen}
		/>
		<div class="drawer-side">
			<label for="my-drawer-4" class="drawer-overlay" />
			<ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">
				<!-- Sidebar content here -->
				Cart
			</ul>
		</div>
	</div>
</main>
