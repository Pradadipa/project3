const express = require('express')
const userRoutes = express.Router()
const fs = require('fs')
const app = express();
app.use(express.json());//untuk membaca file json
const mysql = require('mysql2/promise');


const pool = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "Prada",
    database: process.env.DB_NAME || "contoh_jurnal",
})
// userRoutes.get('/', (req, res) => {
//     res.send("Halo dari aplikasi express")
// });

userRoutes.get('/about', (req,res) => {
    res.sendFile('./static/about.html', { root:
    __dirname})
    console.log(__dirname);
})

userRoutes.get('/users', (req, res) => {
 //task setelah menerima req dari user ke endpoint /user harapannya dari api yang dibikin akan memberikan respons berupa data users, unutk kali ini data usernya ambil dari db/fake_databses.json
 fs.readFile('./databases/fakedatabases.json', 'utf-8', (error, data) => {
    if (error) res.send("terjadi kesalah pada pembacaan file")
    //perlu menggunakan JSON.parse() supaya data berbentuk JSON
    res.send(JSON.parse(data))
 })
})

//get by id
userRoutes.get('/users/:id', (req, res) => {
    console.log(req.params);
    //destructuring an object
    const{ id, name } = req.params;
    fs.readFile('./databases/fakedatabases.json', 'utf-8', (err, data) => {
        if(err) res.send("user tidak ditemukan")
        const users = JSON.parse(data)
        console.log(users);
        //res.send(users)

        //filter data dari database den kita cari user dengan id dengan id yang dilempar melalui req.params
        const user = users.find( user => user.id === Number(id))
        //handle error ketika user tidak ada di databases
        if (!user) res.send("user tidak ditemukan")

        //melempar data user melalui respons
        res.send(user)
    });
    //kita akan mengambil user pada databases dengan userid = userid yang dikirimkan oleh user melalui req.params
    //console.log(id, name, 'id dan name');
})

userRoutes.post('/users', (req, res) => {
    // console.log(req.body, 'ini request body')
    // res.send(req.body)

    //destructure value from an object
    const { name, age } = req.body

    //kita akan menambahkan user baru ke databases yang didapatkan dari req body

    //kalau databasenya json kita perlu baca dulu isi dari databases
    fs.readFile('./databases/fakedatabases.json', (error, data) => {
        //error handling daat tidak bisa membaca user
        if (error) res.send("terjadi kesalahan saat membaca databases")
        
        const user = JSON.parse(data)
        //array of user

        const newUser = {
            name,
            age
        }

        user.push(newUser)

        fs.writeFile('./databases/fakedatabases.json', JSON.stringify(user, null, 2), (error) => {
            if (error) res.send("terjadi kesalahan saat menulis ke database")
            res.send("user berhasil ditambahkan")
        })
    })

})

module.exports = { userRoutes }