<script>
import {setContext} from 'svelte'
import Child from "./Child.svelte";
setContext("parentData",{parentName:'Alex'})
</script>
<Child/>