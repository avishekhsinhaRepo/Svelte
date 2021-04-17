import App from './App.svelte';

const app = new App({
	target: document.getElementById("app"),
	props: {
		name: 'world',
		age: 30
	}
});

export default app;