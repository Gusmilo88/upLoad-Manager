const express = require('express');
const router = express.Router();

const {addOneImage, storeOneImage, detailOneImage, addMultipleImages, storeMultipleImages, detailMultipleImages, addMainImage, storeMainImage, detailMainImage} = require("../controllers/productsController")

const {upLoadProductImages} = require("../middlewares/upLoad")


/* /products */ 
router
    .get('/add-one-image', addOneImage)
    .post('/add-one-image', upLoadProductImages.single("image"), storeOneImage)
    .get('/detail-one-image/:id', detailOneImage)

    .get('/add-multiple-images', addMultipleImages)
    .post('/add-multiple-images', upLoadProductImages.array("images"), storeMultipleImages)
    .get('/detail-multiple-images/:id', detailMultipleImages)

    .get('/add-main-image', addMainImage)
    .post('/add-main-image', storeMainImage)
    .get('/detail-main-image/:id', detailMainImage)

module.exports = router;
