const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'rafael',
    database: 'saboroso',
    password: 'zx12nm45as',
    multipleStatements: true
  });

  module.exports = connection;