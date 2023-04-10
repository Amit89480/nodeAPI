const express = require('express')
const router = express.Router();

const {getallProducts,getallProductsTesting}=require("../controllers/products")

router.route("/").get(getallProducts)
router.route("/testing").get(getallProductsTesting)

module.exports=router