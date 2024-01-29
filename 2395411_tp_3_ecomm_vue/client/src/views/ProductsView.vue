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
import ProductDataService from '@/services/ProductDataService'
import SingleProdCard from '@/components/SingleProdCard.vue'
import NewProdModal from '@/components/NewProdModal.vue'
// import BtnComponent from '@/components/BtnComponent.vue'

export default {
  components: {
    SingleProdCard,
    NewProdModal
    // BtnComponent
  },
  mounted () {
    ProductDataService.getAll()
      .then(response => {
        this.inventory = response.data
        console.log('this is a log from App.vue', response.data)
        console.log('this is a log from INV App.vue', this.inventory)
      })
      .catch(error => {
        console.error('Error fetching products:', error)
      })
  },
  methods: {
    addInventory (product) {
      this.inventory.push(product)
      console.log('methods on ProductsView. Initial inventory state:', this.inventory)
    }
  },
  data () {
    console.log('data on ProductsView. Initial inventory state:', this.inventory)
    return {
      inventory: []
    }
  }
}
</script>
