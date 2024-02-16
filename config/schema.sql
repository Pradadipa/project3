-- config untuk membuat databases

CREATE DATABASES IF NOT EXISTS `contoh_jurnal`;

USE contoh_jurnal;

CREATE TABLE daftar_akun (
    id CHAR(7) PRIMARY KEY,
    nama_akun VARCHAR(255) NOT NULL,
    pos_saldo VARCHAR(255),
    pos_laporan VARCHAR(255)
);



--memasukan data ke databases
insert into daftar_akun value ('1-0000', 'AKTIVA', 0, 0);