<!-- THIS MODAL CAME FROM FLOWBITE. INCORPORATING BtnComponent WAS A PAIN SO I ENDED UP USING AS IS, WITH CSS CHANGES -->
<template>
<!-- Modal toggle -->
<button data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="w-max self-center block border-4 border-black text-black bg-transparent hover:bg-black hover:text-white hover:border-black font-medium  text-sm px-5 py-2.5 text-center" type="button">
  AJOUTER PRODUIT
</button>
<!-- <BtnComponent btnText="AJOUTER" @perform-action="toggleModal"/> -->
<!-- Main modal -->
<div id="crud-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <!-- VIENE DE MARCOS, instruccion No. 25 -->
                <div  v-show="message" class="bg-red-500 mb-2 text-white p-2 rounded">
                    {{ message }}
                </div>
                <!-- FIN Marcos -->
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Ajouter Nouveau Produit
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- VIENE DE MARCOS, instruccion No. 25, para mandar info de la forma -->
            <div v-if="!submitted">
                <!-- Modal body -->
                <form class="p-4 md:p-5">
                    <div class="grid gap-4 mb-4 grid-cols-2">
                        <div class="col-span-2">
                            <label for="prodName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
                            <input type="text" id="prodName" v-model="product.name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Écrivez le nom du produit" required="">
                        </div>
                        <div class="col-span-2">
                            <label for="descCourte" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description Courte</label>
                            <textarea id="descCourte" v-model="product.desc_courte" rows="2" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Écrivez une description courte du produit"></textarea>
                        </div>
                        <div class="col-span-2 sm:col-span-1">
                            <label for="prodPrice" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prix</label>
                            <input type="float" id="prodPrice" v-model="product.price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="299.99" required="">
                        </div>
                        <div class="col-span-2 sm:col-span-1">
                            <label for="prodCat" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Catégorie</label>
                            <select id="prodCat" v-model="product.category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option selected="">Selection</option>
                                <option value="cat_1">Catégorie 1</option>
                                <option value="cat_2">Catégorie 2</option>
                                <option value="cat_3">Catégorie 3</option>
                                <option value="cat_4">Catégorie 4</option>
                            </select>
                        </div>
                        <div class="col-span-2">
                            <label for="descLongue" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <textarea id="descLongue" v-model="product.desc_longue" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Écrivez une description complète du produit"></textarea>
                        </div>
                        <div class="col-span-2">
                            <label for="prodPhoto" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                            <input type="file" accept="image/*" @change="handleImageUpload" id="prodPhoto" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Choissisez une image" required="">
                        </div>
                    </div>
                    <button type="button" @click="saveProduct" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        SAUVEGARDER
                    </button>
                </form>
            </div>
            <div v-else>
                <!-- FROM MARCOS, BUT MIGHT NOT WORK ADDED TO FLOWBITE -->
                <div>
                    <div class="text-green-600 font-semibold mb-4">Success Message</div>
                    <button @click="newProduct" class="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600">
                        New Product
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'

export default {
  props: ['addInv'],
  data () {
    return {
      isModalVisible: false,
      message: null,
      submitted: false,
      product: {
        name: '',
        photo: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
        price: '',
        desc_courte: '',
        desc_longue: '',
        category: ''
      }
    }
  },
  methods: {
    toggleModal () {
      this.isModalVisible = !this.isModalVisible
    },

    saveProduct () {
      const formData = new FormData()
      formData.append('name', this.product.name)
      formData.append('price', this.product.price)
      formData.append('desc_courte', this.product.desc_courte)
      formData.append('desc_longue', this.product.desc_longue)
      formData.append('category', this.product.category)
      formData.append('photo', this.product.photo)

      // ProductDataService.create(this.product)
      ProductDataService.create(formData)
        .then((response) => {
        //   console.log('inside saveProduct method', response.data)
          this.product.id = response.data.id
          this.addInv(this.product)
          this.message = null
          this.submitted = true
          // this.$router.push({ name: 'home' })
        })
        .catch((e) => {
          //  console.log(e)
          this.message = e.response.data.message
        })
    },
    newProduct () {
      this.submitted = false
      this.product = {}
    },
    handleImageUpload (event) {
      //   const file = event.target.files[0]
      //   this.uploadImage(file)
      this.product.photo = event.target.files[0]
    }
  }
}
</script>
