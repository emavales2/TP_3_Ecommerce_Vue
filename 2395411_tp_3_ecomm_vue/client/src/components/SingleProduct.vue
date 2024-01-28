<template>
    <div class="w-full max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img class="p-8 rounded-t-lg" :src="product.photo" :alt="product.name" />
            <!-- ---------------- * * FICHE PRODUIT Text Container * * ---------------- -->
            <div class="px-5 pb-5 text-center">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">{{ product.name }}</h5>
                <p class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">{{ product.desc_courte }}</p>
                <!-- ---------------- * * Link container * * ---------------- -->
                <div class="mb-2">
                    <a href="#" class="hover:text-blue-600 cursor-pointer hover:underline"> See more..</a>
                </div>
                <!-- ---------------- * * Price * * ---------------- -->
                <span class="text-3xl font-bold text-gray-900 dark:text-white">{{ product.price.toFixed(2) }}</span>
                <!-- ---------------- * * Flex container for item placement * * ---------------- -->
                <div class="flex items-center justify-between mt-2">
                    <!-- ---------------- * * Qty control * * ---------------- -->
                    <!-- <input type="number" class="w-[80px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> -->
                    <!-- ---------------- * * "Add to Cart" button" * * ---------------- -->
                    <BtnComponent btnText="MODIFIER"/>
                </div>
            </div>
        </div>
</template>

<script>
import BtnComponent from '@/components/BtnComponent.vue'

export default {
  components: {
    BtnComponent
  },
  props: ['product']
}
</script>
