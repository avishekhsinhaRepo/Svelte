<script>
    import {cartStore} from '../Carts/cart-store.js'
    export let id;
    export let title;
    export let price;
    export let description;
    export let category;
    export let image;

    function removeItemFromCart(){
        cartStore.update((items) => {
            console.log(items);
            return items.filter((item) => item.id != id);
        });
    }
   </script>
   
   <div class="card mb-2" style="width: 18rem;">
       <img src="{image}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">{title}</h5>
         <h6 class="card-subtitle mb-2 text-muted">#{id} {category}</h6>
         <p class="card-text">{description}</p>
         <p>${price}</p>
         <button class="btn btn-primary" on:click="{removeItemFromCart}">Remove Item</button>
       </div>
     </div>