const express = require('express')
const productRoutes = express.Router()


productRoutes.get("/", (req, res) => {
    res.send("dari halaman product")
})


module.exports = { productRoutes }