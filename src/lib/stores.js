import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// this will only store the data in svelte store
// export const userName = writable('sabbir');

// This will store the data both local storage and svelte store
// This line means we are geting the item name userName from localStorage but if the item is not there the system will pick sabbir, in this case
//string
export const userName = writable(
	(browser && localStorage.getItem('userName')) || 'No Data Available'
);
userName.subscribe((val) => browser && (localStorage.userName = val));
