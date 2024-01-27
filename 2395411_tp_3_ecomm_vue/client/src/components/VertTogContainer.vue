<!-- THIS COMPONENT IS AN EMPTY CONTAINER THAT WILL TOGGLE OPEN/CLOSE VERTICALLY -->
<template>
    <aside class="overflow-hidden">
    <!-- <aside class=" fixed overflow-hidden top-0 right-0 h-full rounded-lg"> -->
        <div class="top-0 right-0 h-full relative bg-gray-900 text-white">
            <div class="max-h-full p-3 overflow-auto">
                <form>
                    <article>
                        <label><h4>Produit</h4></label>
                        <input
                            type='text'
                            placeholder="Nom du produit"
                            value={{product.name}}
                        />
                    </article>
                    <article>
                        <label><h4>Description</h4></label>
                        <input
                            type='text'
                            placeholder="Description du produit"
                            value={{product.desc_courte}}
                        />
                    </article>
                    <article>
                        <label><h4>Prix</h4></label>
                        <input type='float' placeholder="Prix du produit en CAD" value={{product.price}}/>
                    </article>
                    <article className="deroulant">
                        <label><h4>Catégorie</h4></label>
                        <select value={{product.category}}>
                            <option value="">Selectionnez une catégorie</option>
                            <option value="Catégorie A">Catégorie A</option>
                            <option value="Catégorie B">Catégorie B</option>
                            <option value="Catégorie C">Catégorie C</option>
                        </select>
                    </article>

                    <BtnComponent btnText="SAVE"/>
                </form>
            </div>
        </div>
    </aside>
</template>

<script>
import BtnComponent from '@/components/BtnComponent.vue'

export default {
  components: {
    BtnComponent
  },
  props: ['toggle']
}
</script>
