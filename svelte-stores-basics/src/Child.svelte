<script>
import GrandChild1 from "./GrandChild1.svelte";
import GrandChild2 from "./GrandChild2.svelte";
import {getContext} from 'svelte'

let parentData = getContext("parentData")
</script>

<p> Data from Parent in Child : {parentData.parentName}</p>
<GrandChild1/>
<GrandChild2/>