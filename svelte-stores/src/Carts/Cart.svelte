<script>
import CartItem from "./CartItem.svelte";
import {cartStore} from '../Carts/cart-store'
import { onDestroy } from "svelte";
let carts= [];

const unsubscribe  = cartStore.subscribe((item)=>{
    carts = item;
});
onDestroy(() => unsubscribe());

</script>
{#if carts.length >0}
{#each carts as cartItem}
    <CartItem {...cartItem} />
{/each}
{:else}
<p>No item in cart</p>
{/if}

