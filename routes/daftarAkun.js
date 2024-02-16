const express = require('express');
const daftarakunRoutes = express.Router()
//const { pool } = require('../config/db')
const daftarAkunController = require('../controllers/daftarAkunController')



//get daftar_akun
daftarakunRoutes.get('/', daftarAkunController.getAllDaftarAkun )

//menambah daftar_akun
daftarakunRoutes.post('/', daftarAkunController.createDaftarAkun )

module.exports = { daftarakunRoutes }