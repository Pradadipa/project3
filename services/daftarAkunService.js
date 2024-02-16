const { pool } = require('../config/db')

//mengambil daftar_akun
const getAllDaftarAkun = async () => {
    const connection = await pool.getConnection()
    try{
        const [daftarakun] = await connection.query('SELECT * FROM daftar_akun') 
        return daftarakun
    } catch (error) {
        console.error(error)
        return error
    } finally {
        connection.release
    }
    
   
}

//menambahkan akun baru
const createDaftarAkun =  async (akun) => {
    const connection = await pool.getConnection()
    try {
        const createdakun = await connection.query('INSERT INTO daftar_akun (id, nama_akun, pos_saldo, pos_laporan) VALUE (?, ?, ?, ?)', [akun.id, akun.nama_akun, akun.pos_saldo, akun.pos_laporan]);
        return createdakun
    } catch (error) {
        console.error(error)
        return error
    } finally {
        connection.release
    }
}
module.exports = { getAllDaftarAkun, createDaftarAkun }
