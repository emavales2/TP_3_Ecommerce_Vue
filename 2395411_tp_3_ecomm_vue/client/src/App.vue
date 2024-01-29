<template>
    <div class="max-w-screen-xl mx-auto bg-orange-200">
        <!-- ------------------------ * * NAV BLOCK * * ------------------------ -->
        <nav class="text-black">
            <!-- ---------------- * * Empty container. Will affect placement of 3 children (3 item groups) * * ---------------- -->
            <div class="flex flex-wrap justify-center items-center mx-auto p-8">
                <!-- ---------------- * * Will affect placement of 1 child (list) * * ---------------- -->
                <div class="items-center justify-center hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                    <!-- ---------------- * * Will affect placement of 2 children (cart + counter) * * ---------------- -->
                    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <!-- <router-link to="" is instead of a href="" for links between pages of this app -->
                        <router-link to="/" class="border-r-2 border-black py-2 px-16 text-black" aria-current="page">home</router-link>
                    </li>
                    <li>
                        <router-link to="/products" class="py-2 px-12 text-black ">products</router-link>
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
