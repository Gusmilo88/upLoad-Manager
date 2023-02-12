const express = require('express');
const router = express.Router();

const {addOneImage, storeOneImage, detailOneImage} = require("../controllers/productsController")

const {upLoadOneImage} = require("../middlewares/upLoad")


/* /products */ 
router
    .get('/add-one-image', addOneImage)
    .post('/add-one-image', upLoadOneImage.single("image"), storeOneImage)
    .get('/detail-one-image', detailOneImage)

module.exports = router;
