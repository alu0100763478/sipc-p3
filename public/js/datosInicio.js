var misDatos = angular.module("datosApp", []);

misDatos.controller('ControladordeUsuarios', ['$scope', function($scope) {
  $scope.usuarios = [{}];


  $scope.registrar = function() {
    $scope.usuarios.push( {email: $scope.usuario.email, nombre: $scope.usuario.nombre, apellido: $scope.usuario.apellido});
  };

  $scope.GetRegistrar = function() {
    return usuarios;
  };

}]);

function passworConfirm(){
  var pass = document.getElementById("pass").value;
  var cpass = document.getElementById("pass_confirm").value;
  if(pass != cpass){
    alert("Las contraseñas no coinciden");
  }
  else{
    var myWindow = window.open("", "", "toolbar=no,status=no,scrollbars=no,location=no,menubar=no,directories=no,width=200,height=100");
    myWindow.document.write("<p>Ahora, ve a la pestaña Usuarios para completar el registro</p>");
  }
}



/*misDatos.controller('controladorDatos', function( $scope, $http){

    $scope.importar = function(){

      $http.get('coches.json').success(function(datos){

          $scope.equipo = datos;

      });
    }

  $scope.importar();

});


*/
