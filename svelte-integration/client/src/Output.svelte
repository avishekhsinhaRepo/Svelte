

<script>
    import { onMount } from 'svelte';
    import photoStore from './photo.store'
    let _value=''
    onMount(() =>{
       return photoStore.subscribe(value =>{
        _value = value;
    });
    })
    </script>
 <h1>{_value.title} </h1>
 <img src="{_value.thumbnailUrl}" alt=""/>