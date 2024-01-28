<template>
    <div class="p-10 flex flex-col gap-6">
        <NewProdModal/>
        <!-- ---------------- * * Empty container. SETS UP THE GRID * * ---------------- -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6  border-gray-100 my-4" >
            <!-- ---------------- * * FICHE PRODUIT 1 * * ---------------- -->
            <!-- v-for is the loop in vue -->
            <div v-for="(product, i) in inventory" :key="i" :product="product">
                <!-- AQUI VA EL SINGLE PRODUCT: Pass product data as prop to SingleProdCard component -->
                <SingleProdCard :product="product"/>
            </div>
            <!-- ---------------- * * FIN Fiche Produit 1 * * ---------------- -->
        </div>
    </div>
</template>

<script>
import SingleProdCard from '@/components/SingleProdCard.vue'
// import VertTogContainer from '@/components/VertTogContainer.vue'
import NewProdModal from '@/components/NewProdModal.vue'
// import BtnComponent from '@/components/BtnComponent.vue'

export default {
  components: {
    SingleProdCard,
    // VertTogContainer,
    NewProdModal
    // BtnComponent
  },
  props: ['inventory']
//   data () {
//     return {
//       showContainer: false
//     }
//   },
//   computed: {
//     toggBtnText () {
//       return this.showContainer ? 'FERMER' : 'AJOUTER'
//     }
//   },
//   methods: {
//     toggleContainer () {
//       this.showContainer = !this.showContainer
//     }
//     // addProduct (formData) {
//     //   const newProduct = {
//     //     photo: formData.photo,
//     //     name: formData.name,
//     //     desc_courte: formData.desc_courte,
//     //     desc_longue: formData.desc_longue,
//     //     price: formData.price,
//     //     category: formData.category
//     //   }
//     //   this.inventory.push(newProduct)
//     //   console.log('Nouveau produit ajouté!')
//     // },
//     // deleteProduct (name) {
//     //   this.inventory = this.inventory.filter(product => product.name !== name)
//     //   console.log('Produit éliminé :', name)
//     // }
//   }
}
</script>
