import { writable } from 'svelte/store';

export const products = writable([]);

export async function productFetch(pageNum, cat, selectedSort) {
	const category = await fetch('https://app.deshal.net/api/productList?page=' + pageNum, {
		method: 'POST',
		body: JSON.stringify({
			category_slug: cat?.toString(),
			sort_option: selectedSort
		}),
		headers: {
			'content-type': 'application/json'
		}
	});
	const categoryData = await category.json();
	console.log(categoryData);

	// return categoryData;
	products.set(categoryData);
}
