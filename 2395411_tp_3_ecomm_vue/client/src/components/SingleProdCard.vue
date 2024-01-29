<template>
    <div class="w-full max-w-sm  bg-black border border-gray-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="p-8 rounded-t-lg" :src="product.photo" :alt="product.name" />
        <!-- ---------------- * * FICHE PRODUIT Text Container * * ---------------- -->
        <div class="px-5 pb-5 text-center text-white">
            <h5 class="text-xl font-semibold tracking-tight mb-2">{{ product.name }}</h5>
            <p class="text-xl font-semibold tracking-tight mb-2">{{ product.desc_courte }}</p>
            <!-- ---------------- * * Link container * * ---------------- -->
            <div class="mb-2">
                <router-link :to="{ name: 'product', params: { id: product.id } }" class="hover:text-orange-400 cursor-pointer"> See more..</router-link>
            </div>
            <!-- ---------------- * * Price * * ---------------- -->
            <span class="text-3xl font-bold">{{ product.price.toFixed(2) }}</span>
            <div class="flex flex-row gap 4 pt-8 pb-2 px-6 justify-between">
                    <EditProdModal/>
                    <button class="w-max self-center block border-4 border-white text-white bg-transparent hover:bg-orange-300 hover:text-black hover:border-black font-medium  text-sm px-5 py-2.5 text-center" type="button">EFFACER</button>
            </div>
        </div>
    </div>
</template>

<script>
import EditProdModal from '@/components/EditProdModal.vue'

export default {
  components: {
    EditProdModal
  },
  methods: {
    toggleModal () {
      this.isModalVisible = !this.isModalVisible
    }
  },
  props: ['product']
}
</script>
