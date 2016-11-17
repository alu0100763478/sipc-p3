var express = require('express');

var app = express();

app.set('port', (process.env.PORT || 5000));

//Ruteo de estáticos
app.use(express.static('public'));


//Iniciar aplicacion
app.get('/',function(request, response){
  response.send(__dirname + 'index');
});

app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});
