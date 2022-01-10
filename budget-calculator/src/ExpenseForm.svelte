<script>
    import Title from "./Title.svelte";
    export let name = "";
    export let amount = null;
    export let addExpense;
    $: isEmpty = name == "" || amount == null;
    function handleSubmit() {
        addExpense({ name, amount });
        name = "";
        amount = null;
    }
</script>

<h1>Expense Form</h1>
<section class="form">
    <Title title="Expense form" />
    <form class="expense-form" on:submit|preventDefault={handleSubmit}>
        <div class="form-control">
            <label for="name">name</label>
            <input type="text" id="name" bind:value={name} />
        </div>

        <div class="form-control">
            <label for="amount">Amount</label>
            <input type="number" id="amount" bind:value={amount} />
        </div>
        <p class="form-empty">Please fill the form fields</p>
        <button type="submit" class="btn btn-block" class:disabled={isEmpty}>add
            expense</button>
        <button type="button" class="close-btn"><i class="fas fa-times" />close
        </button>
    </form>
</section>
