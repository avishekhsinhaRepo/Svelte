<script>
import Cart from "./Carts/Cart.svelte";

import Products from "./Products/Products.svelte";


</script>

<div class="container">
	<div class="row">
	  <div class="col-sm">
		  <h2>Products</h2>
		  <hr/>
		<Products/>
	  </div>
	  <div class="col-sm">
		<h2>Carts</h2>
		<Cart/>
	  </div>
	</div>
  </div>