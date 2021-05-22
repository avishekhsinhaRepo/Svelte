<script>
    import schoolStore from './school.store.js';
    export let studentList;
    function admitStudent(student){
        schoolStore.update(students => {
            return  [...students, { ...student }];
        });
    }
</script>

<div class="row">
    <h3>New Student List</h3>
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
            {#each studentList as student}
                <tr>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>@{student.username}</td>
                    <td><button class="bt btn-primary" on:click="{()=>admitStudent(student)}">Add</button></td>
                </tr>
            {/each}
        </tbody>
    </table>
 </div>
