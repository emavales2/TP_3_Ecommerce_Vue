<template>
    <div>
        <!-- <HeroHeader/> -->
        <BtnComponent @click="toggleContainer" :btnText="toggBtnText"/>
        <VertTogContainer
        v-if="showContainer"
        :toggle="toggleContainer"
        />
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
import VertTogContainer from '@/components/VertTogContainer.vue'
import BtnComponent from '@/components/BtnComponent.vue'

export default {
  components: {
    SingleProduct,
    VertTogContainer,
    BtnComponent
  },
  props: ['inventory'],
  data () {
    return {
      showContainer: false
    }
  },
  computed: {
    toggBtnText () {
      return this.showContainer ? 'FERMER' : 'AJOUTER'
    }
  },
  methods: {
    toggleContainer () {
      this.showContainer = !this.showContainer
    }
    // addProduct (formData) {
    //   const newProduct = {
    //     photo: formData.photo,
    //     name: formData.name,
    //     desc_courte: formData.desc_courte,
    //     desc_longue: formData.desc_longue,
    //     price: formData.price,
    //     category: formData.category
    //   }
    //   this.inventory.push(newProduct)
    //   console.log('Nouveau produit ajouté!')
    // },
    // deleteProduct (name) {
    //   this.inventory = this.inventory.filter(product => product.name !== name)
    //   console.log('Produit éliminé :', name)
    // }
  }
}
</script>
