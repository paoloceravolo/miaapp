const express = require('express');
const path = require('path');
//const mongoose = require('mongoose');
//const bodyParse = require('body-parser');
const port = 3000;
var app = express();

var routes = require('./routes');
// var dbdata;
// //connessione a Mongo
// mongoose.connect(
// 'mongodb://codemaster:codemaster2428@ds053428.mlab.com:53428/tlw'
// );

// var connection = mongoose.connection;
// connection.on('error', console.error.bind(console, 
// 	'errore di connessione'));
// connection.once('open', function(){
// 	connection.db.collection('CodeMaster', 
// 		function(err, collection){
// 		collection.find().toArray(function(err, data){
// 			dbdata = data;
// 			//console.log(dbdata[2]);
// 		})
// 	})
// });

app.use(express.static(path.join(__dirname, './public')));

// engine di rendering
app.set('views', path.join(__dirname, 'views'));
//app.set('views', './views'));
app.set('view engine', 'ejs');

//routing
//home
app.get('/', routes.index);

//pagine
app.get('/libro/:id_libro', function(req, res){
  var libro = req.params.id_libro;
  	res.send('Questa è la pagina del libro: ' + libro);
});

//not found
app.get('*', function(req, res){
  res.send('<h2>404 Pagina non trovata con </h2>');
});

// messaggio di avvio
app.listen(port, function(){
console.log('Server in ascolto sulla porta ' + port)
})

module.export = app;