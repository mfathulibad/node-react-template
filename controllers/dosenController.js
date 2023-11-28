const dosenRepository = require("../repository/dosenRepository");

const getAllDosen = (req, res) => {
  dosenRepository.getAllDosen((err, result) => {
    if (!err) {
      res.send(result.rows);
    } else {
      res.status(500).send(err.message);
    }
  });
};


module.exports = {
    getAllDosen
}