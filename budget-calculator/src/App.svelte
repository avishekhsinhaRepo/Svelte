<script>
	import NavBar from "./NavBar.svelte";
	import expenseData from "./expenses";
	import ExpensesList from "./ExpensesList.svelte";
	import { setContext } from "svelte";
	import Total from "./Total.svelte";
	import ExpenseForm from "./ExpenseForm.svelte";

	let expenses = [...expenseData];

	function removeExpense(id) {
		expenses = expenses.filter((item) => {
			return item.id !== id;
		});
	}
	setContext("remove", removeExpense);
	function clearExpenses() {
		expenses = [];
	}
	$: total = expenses.reduce((acc, curr) => {
		return (acc += curr.amount);
	}, 0);

	function addExpense({ name, amount }) {
		const newExpense = { id: Math.random() * Date.now(), name, amount };
		expenses = [...expenses, newExpense];
	}
	let setid = null;
	let setAmount = null;
	let setName = "";
	function setModifiedExpense() {}
</script>

<NavBar />

<main class="content">
	<ExpenseForm {addExpense} />
	<Total {total} />
	<ExpensesList {expenses} {removeExpense} />
	<button
		type="button"
		class="btn btn-primary btn-block"
		on:click={clearExpenses}>clear expenses</button>
</main>
