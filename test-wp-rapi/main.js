var botonEntradas = document.getElementById("bentradas");
var containerEntradas = document.getElementById("entradas");

if(botonEntradas){
	botonEntradas.addEventListener("click",function(){
	
	/*https://www.youtube.com/watch?v=rGObWtjxGBc&t=1134s
	minuto -> 16:51*/

	var ourRequest=new XMLHttpRequest();
	ourRequest.open('GET','http://museodigital.org/wp-json/wp/v2/posts');
	ourRequest.onload = function (){
		if(ourRequest.status>=200 && ourRequest.status<400){
			var data = JSON.parse(ourRequest.responseText);
			entradas(data);
		}else {
			console.log("Se conecto al server pero hay un error");
		}
	};

	ourRequest.onerror= function() {
		console.log("Error de conexion");
	};

	ourRequest.send();

});
}

function entradas(data){
	console.log(data);
	var string="";
	for(i=0; i< data.length; i++){

		string += '<h2>' + data[i].title.rendered + '</h2>';
		string +=  data[i].content.rendered;
		


	}
	containerEntradas.innerHTML = string;
}
