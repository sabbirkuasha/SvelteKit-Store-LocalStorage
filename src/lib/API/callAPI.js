export async function productFetch() {
	const rsp = await fetch('https://dummyjson.com/products?limit=10');
	const response = await rsp.json();
	// console.log(response);
	return response;
}
