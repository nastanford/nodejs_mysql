var mysql = require('mysql')

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'username',
  password : 'secretpassword',
  database : 'databasename'
});

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
});

connection.query('SELECT * FROM customers', function(err, results) {
  if (err) throw err
  console.log(results[0].id)
  console.log(results[0].username)
  console.log(results[0].email)
  console.log(results[0].password)
});

