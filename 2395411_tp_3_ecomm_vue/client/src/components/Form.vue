<!-- THIS COMPONENT IS AN EMPTY FORM -->
<template>
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

        <button className="button">SAVE</button>
    </form>
</template>