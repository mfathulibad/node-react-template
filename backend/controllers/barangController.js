const barangRepository = require("../repository/barangRepository");

const insertBarang = (req, res) => {
  const { NamaBarang, Satuan, HargaSatuan, Stok } = req.body;

  barangRepository.insertBarang(NamaBarang, Satuan, HargaSatuan, Stok, (err, result) => {
    if (!err) {
      res.send("Insert success");
    } else {
      res.status(500).send(err.message);
    }
  });
};

const updateBarang = (req, res) => {
  const KodeBarang = req.params.KodeBarang;
  const { NamaBarang, Satuan, HargaSatuan, Stok } = req.body;
  barangRepository.updateBarang(
    NamaBarang,
    Satuan,
    HargaSatuan,
    Stok,
    KodeBarang,
    (err, result) => {
      if (!err) {
        res.send("Update success");
      } else {
        res.status(500).send(err.message);
      }
    }
  );
};

module.exports = {
    insertBarang,
    updateBarang
}