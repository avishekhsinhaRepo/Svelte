<script>
    import { onDestroy } from "svelte";
    import schoolStore from "./school.store.js";
    onDestroy(() => {
        unsubscribe();
    });
     function removeStudent(id){
        schoolStore.update(students => {
             return students.filter((student) => student.id != id);
         })
     }
</script>
{#if $schoolStore.length}
    <h3>Admission</h3>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">UserName</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {#each $schoolStore as student}
                <tr>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>@{student.username}</td>
                    <td><button on:click="{() => removeStudent(student.id)}">Remove</button></td>
                </tr>
            {/each}
        </tbody>
    </table>
{/if}
