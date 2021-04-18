<script>
import ProductItem from "./ProductItem.svelte";
import {productStore} from './product-stores.js';
</script>
{#each $productStore as product}
<ProductItem {...product}/>
{/each}

    
    
