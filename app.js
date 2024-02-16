require('dotenv').config()
//import express
const express = require('express');

//membuat membaca db booangan make fs
const fs = require('fs')
//buat instance express
const app = express();
const PORT = process.env.PORT;

app.use(express.json());//untuk membaca file json
app.use(express.static('static'));//untuk membaca static file
//fungsi untuk parse data yang dikirim melalui req body dalam bentuk x-ww...
app.use(express.urlencoded({ extended: true}))

//import module dari folder routes
const { userRoutes } = require('./routes/userRoutes')
const { productRoutes } = require('./routes/productsRoutes');
const { pool } = require('./config/db')
const { daftarakunRoutes } = require('./routes/daftarAkun')
const cors = require('cors')
app.use(cors())
//kalau mau memakai database beneran kita install dlu dirvernya
//contohnya mysql, mongodb, postgresql
// npm i mysql atau npm i pg atau npm i mongodb


//memecah menjadi rute keci
//get user by id
app.use("/", userRoutes)
//get user
app.use("/", userRoutes)


//untuk memakai product routes
app.use("/products", productRoutes)

//rute untu get data daftar_akun
app.use("/", daftarakunRoutes)


app.listen(PORT,() => {
    console.log(`Aplikasi sudah berjalan pada http://localhost:${PORT}`);
})


