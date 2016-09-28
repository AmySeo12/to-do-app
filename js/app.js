window.addEventListener("load", function(){
	var texto= document.getElementById("texto");
	var button = document.getElementById("button");
	var contenedor = document.getElementById("contenedor");

	button.addEventListener("click", function(e){
		e.preventDefault();

		var tareas = document.createElement("div");
		tareas.classList.add("row", "mensajes");
		contenedor.insertBefore(tareas, contenedor.lastElementChild);

		var text = document.createElement("span");
		text.innerHTML = texto.value;
		text.classList.add("col-xs-9","saltos");
		tareas.appendChild(text);

		var check = document.createElement("input");
		check.classList.add("checks","col-xs-1");
		check.setAttribute("type","checkbox");
		tareas.insertBefore(check, tareas.lastElementChild);

		var eliminar = document.createElement("span");
		eliminar.classList.add("glyphicon", "glyphicon-trash", "col-xs-1");
		tareas.appendChild(eliminar);

		texto.value="";

		var checks = document.querySelectorAll(".checks");
		var icono = document.querySelectorAll(".glyphicon");

		for(var i= 0; i < checks.length; i++){
			checks[i].addEventListener("click", function(){
				if (this.checked)
					this.nextSibling.classList.add("tachado");
				else
					this.nextSibling.classList.remove("tachado");
			});
		}

		for(var i = 0; i < icono.length; i++){
			icono[i].addEventListener("click", function(){
				this.parentNode.remove();
			});
		}

		button.disabled= true;
		button.classList.remove("color");
	});

	texto.addEventListener("keyup", function(){
    	if (this.value.trim().length == 0){
    		button.disabled= true;
    		button.classList.remove("color");
    	}

    	else{
    		button.disabled= false;
    		button.classList.add("color");
    	}
	});
		
});