const daftarAkunService = require('../services/daftarAkunService')

const getAllDaftarAkun = async (req, res) =>  {
   const daftarAkun = await daftarAkunService.getAllDaftarAkun()
   res.status(200).json({
    message: "Sukses mengambil data",
    data: daftarAkun
   })
}

const createDaftarAkun = async (req, res) => {
    const createDaftarAkun = await daftarAkunService.createDaftarAkun(req.body)
    res.status(201).json({
        message: "Sukses menambahkan akun",
        data: createDaftarAkun
    })
}


module.exports = { getAllDaftarAkun, createDaftarAkun }