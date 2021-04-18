<script>
 import {cartStore} from '../Carts/cart-store'
 export let id;
 export let title;
 export let price;
 export let description;
 export let category;
 export let image;
 function addToCart(){
    cartStore.update((items) =>{
       return [...items, {
            id : id,
            title:title,
            price:price,
            description:description,
            category:category,
            image:image,
        }] 
    
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
      <button class="btn btn-primary" on:click="{addToCart}">Add to Cart</button>
    </div>
  </div>