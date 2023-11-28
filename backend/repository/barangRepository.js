const client = require("../config/connection");

const insertBarang = (NamaBarang, Satuan, HargaSatuan, Stok, callback) => {
  const query =
    "INSERT INTO barang(NamaBarang, Satuan, HargaSatuan, Stok) VALUES($1, $2, $3, $4)";
  const values = [NamaBarang, Satuan, HargaSatuan, Stok];
  client.query(query, values, callback);
};

module.exports = {
    insertBarang
}
