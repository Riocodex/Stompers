<template>
    <h1> Product Detail Page   </h1>
    
</template>


<script>
import { products } from '../temp-data';
    export default {
        name: "ProductDetailPage",
        data(){
            return{
                product: products.find(product => product.id === this.$route.params.productId),
            }
        }
    }
</script>