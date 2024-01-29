const db = require('../models')
const Product = db.products
const OP = db.Sequelize.Op

exports.create = (req, res) => {
    //console.log(req.body)
    Product.create(req.body)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || 'Erreur : Pas possible d\'ajouter la donnée'
        })
    })
}

exports.findAll = (req, res) => {
    Product.findAll()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || 'Erreur : Commande pas exécutée'
        })
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Product.findByPk(id)
    .then(data =>{
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || `Erreur : pas possible de trouver data id ${id}`
        })
    })
}

exports.delete = (req, res) => {
    const id = req.params.id
    Product.destroy({
        where: { id : id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Le produit a été éliminé"
            })
        } else {
            res.send({
                message: "Erreur : pas possible d'éliminer le produit"
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || `Erreur : pas possible de trouver data id ${id}`
        })
    })
}
exports.update = (req, res) => {
    const id = req.params.id
    Product.update(req.body, {
        where: { id: id}
    })
    .then(num => {
        if (num == 1){
            res.send({
                message: 'Produit mis à jour'
            })
        } else {
            res.send({
                message: 'Erreur : produit pas trouvé'
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || `Erreur : pas possible de trouver data id ${id}`
        })
    })
}