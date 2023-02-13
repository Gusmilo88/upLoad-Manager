const {readJSON, writeJSON} = require("../data")

module.exports = {
    addOneImage : (req, res) => {
        return res.render("addOneImage")
    },

    storeOneImage : (req, res) => {
        const products = readJSON("productsOneImage.json");

        const newProduct = {
            id : products.length ? products[products.length - 1].id + 1 : 1,
            name : req.body.name,
            image : req.file ? req.file.filename : null,
            description : "lorem impsum dolor amet sit"
        }

        products.push(newProduct)

        writeJSON("productsOneImage.json", products)

        return res.redirect("/")
    },

    detailOneImage : (req, res) => {
        const products = readJSON("productsOneImage.json");

        const product = products.find(product => product.id === +req.params.id)

        return res.render("detailOneImage", {
            ...product
        })
    },

    addMultipleImages : (req, res) => {
        return res.render("addMultipleImages")
    },

    storeMultipleImages : (req, res) => {
        return res.send(req.body)

    },

    detailMultipleImages : (req, res) => {
        return res.render("detailMultipleImages")

    },
}