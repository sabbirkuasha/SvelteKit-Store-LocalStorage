<script>
	// When there is no default export from the script we must use curly braces {} to import

	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { writable } from 'svelte/store';
	import { browser } from '$app/environment';
	import { fade, fly } from 'svelte/transition';

	//API CALL Function

	import { productFetch, products } from '../../../lib/API/callAPI';

	$: $page?.params?.subCat ? productFetch(1, $page?.params?.subCat, '') : '';

	$: console.log($page);

	let scrollTo = $page?.url?.searchParams?.get('scroll');

	function scrollToElement() {
		console.log('called');

		setTimeout(() => {
			let element = document.getElementById(scrollTo);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}, 100);

		// if (browser && scrollTo) {
		// 	console.log(scrollTo);

		// 	let element = document.getElementById('109312');
		// 	console.log(document.getElementById('109312'));
		// 	if (element) {
		// 		element.scrollIntoView({ behavior: 'smooth' });
		// 	}
		// }
	}

	onMount(async () => {
		// await productFetch(1, $page.params.subCat, '');
		// scrollToElement();
	});

	const isDrawerOpen = writable(false);
	function openDrawer() {
		isDrawerOpen.set(true);
	}

	function exp() {
		console.log(document.getElementById('109312'));
	}
</script>

<button on:click={scrollToElement} class="btn btn-primary">Test</button>

<main class="p-5">
	<div class="w-full">
		{#if $products.length != ''}
			{#each $products.data as product, i}
				<div class="card bg-base-200 shadow-xl" id={product.code}>
					<figure><img class="w-36" src={product.featured1_image.main_url} alt="Shoes" /></figure>
					<div class="card-body">
						<h2 class="card-title">{product.name}</h2>
						<h2 class="card-title">ProductID-{product.code}</h2>
						<div class="flex flex-row gap-x-1">
							<h2 class="card-title font-bold">{product.price}</h2>
						</div>

						{#if product.discount != null}
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

					{#if $products.data.length == i + 1}
						{console.log(i)}
						{scrollToElement()}
					{/if}
				{/each}
			</div>
		{/if}
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
