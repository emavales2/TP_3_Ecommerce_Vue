<template>
    <div class="max-w-screen-xl mx-auto">
        <!-- ------------------------ * * NAV BLOCK * * ------------------------ -->
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
            <!-- ---------------- * * Empty container. Will affect placement of 3 children (3 item groups) * * ---------------- -->
            <div class="flex flex-wrap items-center justify-between mx-auto p-4">
                <!-- ---------------- * * Empty container. Will affect placement of children * * ---------------- -->
                <div class="flex items-center space-x-3 rtl:space-x-reverse">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Vue Store</span>
                </div>
                <!-- ---------------- * * Will affect placement of 1 child (list) * * ---------------- -->
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                    <!-- ---------------- * * Will affect placement of 2 children (cart + counter) * * ---------------- -->
                    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <!-- <router-link to="" is instead of a href="" for links between pages of this app -->
                        <router-link to="/" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">home</router-link>
                    </li>
                    <li>
                        <router-link to="/products" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">products</router-link>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- ------------------------ * * FIN NAV BLOCK * * ------------------------ -->
        <!-- ------------ * * <router-view/> represents the content of the page (files inside the views folder) * * ------------ -->
        <!-- NOTE : :inventory="inventory" : This is a shorthand for v-bind:inventory="inventory". It binds the value of the inventory property in the current component to the inventory prop of the router-view component. This means that the data from the inventory property in the current component will be passed down to the component rendered by router-view. -->
        <router-view
        :inventory = "inventory"
        />
        <MainFooter/>
        <!-- <SideBar/> -->
    </div>
</template>

<script>
// import ProductDataService from '@/services/ProductDataService'
import MainFooter from './components/MainFooter.vue'
// import product from '@/products.json'

export default {
  components: {
    MainFooter
  },
  data () {
    return {
      // NOTE: Inventory : This is a data property that is assigned the value of product. In your previous code, import product from '@/products.json' was used to import data from a JSON file, and it seems that this imported data is assigned to the inventory property.
    //   inventory: product
      inventory: []
    }
  }
}
</script>
