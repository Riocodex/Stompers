<template>
  <div>
    <div class="product-container" v-for="product in products" :key="product.id">
      <img class="product-image" :src="product.imageName" />

      <div class="details-wrap">
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }}</p>
      </div>
      <button class="remove-button">Remove from Cart</button>
    </div>
   
  
  </div>
</template>

<script>
export default {
  name: "ShoppingCartList",
  props: ['products'],  // 'products' is passed as a prop, not 'cartItems'
}
</script>
