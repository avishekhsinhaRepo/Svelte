<script>
    import Expense from "./Expense.svelte";
    import SectionTitle from "./Title.svelte";
    export let expenses = [];
</script>

<style>
    h2 {
        text-transform: capitalize;
    }
</style>

<SectionTitle title="Expenses List" />
<section>
    <ul>
        {#each expenses as expense}
            <Expense {...expense} />
        {:else}
            <h2>no expenses added to list</h2>
        {/each}
    </ul>
</section>
