import App from './App.svelte';
import ContactCard from './ContactCard.svelte';

const app = new App({
	target: document.getElementById("app"),
	
});

/* const card = new ContactCard({
	target: document.getElementById("card"),
	props: {
		name: 'world',
		age: 30
	}
}); */

export default app;