<script>
 
    import {getContext} from 'svelte'
    
    let parentData = getContext("parentData")
    </script>

<p> Data from Parent in GrandChild2 : {parentData.parentName}</p>