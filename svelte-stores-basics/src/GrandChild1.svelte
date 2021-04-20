<script>
 
    import {getContext} from 'svelte'
    
    let parentData = getContext("parentData")
    </script>

<p> Data from Parent in GrandChild1 : {parentData.parentName}</p>