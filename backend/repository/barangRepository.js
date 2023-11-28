const client = require("../config/connection");

const insertBarang = (NamaBarang, Satuan, HargaSatuan, Stok, callback) => {
  const query =
    "INSERT INTO barang(NamaBarang, Satuan, HargaSatuan, Stok) VALUES($1, $2, $3, $4)";
  const values = [NamaBarang, Satuan, HargaSatuan, Stok];
  client.query(query, values, callback);
};

const updateBarang = (NamaBarang, Satuan, HargaSatuan, Stok, KodeBarang, callback) => {
  const query =
    "UPDATE barang SET namabarang = $1, satuan = $2, hargasatuan = $3, stok = $4 WHERE kodebarang = $5";
  const values = [NamaBarang, Satuan, HargaSatuan, Stok, KodeBarang];
  client.query(query, values, callback);
};

module.exports = {
    insertBarang,
    updateBarang
}
