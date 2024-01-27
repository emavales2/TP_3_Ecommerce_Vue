<template>
    <div>
        <!-- <HeroHeader/> -->
        <!-- ---------------- * * Empty container. SETS UP THE GRID * * ---------------- -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-4  border-gray-100 my-4" >
        <!-- ---------------- * * FICHE PRODUIT 1 * * ---------------- -->
        <!-- v-for is the loop in vue -->
        <div v-for="(product, i) in inventory" :key="i" :product="product">
            <!-- AQUI VA EL SINGLE PRODUCT: Pass product data as prop to SingleProduct component -->
            <SingleProduct :product="product"/>
        </div>
        <!-- ---------------- * * FIN Fiche Produit 1 * * ---------------- -->
        </div>
    </div>
</template>

<script>
import SingleProduct from '@/components/SingleProduct.vue'

export default {
  components: {
    SingleProduct
  },
  props: ['inventory']
}
</script>
