const client = require("../config/connection");

const getAllDosen = (callback) => {
  client.query(
    'SELECT d.*, u.password FROM dosen d JOIN "user" u ON d.id_user = u.id_user',
    callback
  );
};

module.exports = {
    getAllDosen
}
