module.exports = (connex, Sequelize) => {
    const Product = connex.define('product', {
        name: {
            type: Sequelize.STRING
        },
        photo: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.REAL
        },
        desc_courte: {
            type: Sequelize.TEXT
        },
        desc_longue: {
            type: Sequelize.TEXT
            },
        category: {
            type: Sequelize.STRING
        }
        })
        return Product
   }