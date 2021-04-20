<script>
let hobbies= [];
import hobbiesStore from './hobbies.store.js';
hobbiesStore.subscribe(data=>{
    hobbies = Object.values(data);
});

</script>
<h3>Hobbies List</h3>
<ul>
    {#each hobbies as hobby}
        <li>{hobby}</li>
{/each}
</ul>
