<script>
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();
    const products = [
        { id: 'P0001', productName: "Audio System" },
        { id: 'P0002', productName: "Video System" },
    ];
    function addToCart(productId){
        const product = getProduct(productId);
        dispatch('add-to-cart',product);
    }

    function deleteFromCart(productId){
        const product = getProduct(productId);
        dispatch('delete-from-cart',product);
    }

    function getProduct(productId){
        return products.find((product) => product.id == productId);
    }
</script>

{#each products as product, index}
    <h3>{product.productName}</h3>
    <p>#{product.id}</p>
    <button on:click="{()=> addToCart(product.id)}">Add to Cart</button>
    <button on:click={()=> deleteFromCart(product.id) }>Delete From Cart</button>
{/each}
