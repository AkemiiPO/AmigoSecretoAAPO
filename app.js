// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function LimpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();
    if (nombre === "") {
        alert("No puedes agregar un espacio en blanco. Inténtelo nuevamente.");
    } else {
        listaAmigos.push(nombre);
        console.log(listaAmigos);
        LimpiarCaja();
        mostrarListaAmigos();
    }
}

function mostrarListaAmigos() {
    let listaAmigosHTML = document.getElementById("listaAmigos"); 
    listaAmigosHTML.innerHTML = "";

    for (let amigo of listaAmigos) {
        let listaVisual = document.createElement("li");
        listaVisual.textContent = amigo;
        listaAmigosHTML.appendChild(listaVisual);
    }
}

function sortearAmigo(){
    let listaAmigosHTML = document.getElementById("listaAmigos"); 
    let aleatorio = Math.floor(Math.random() * listaAmigos.length);
    let resultadoHTML = document.getElementById("resultado");
    listaAmigosHTML.innerHTML = "";
    resultadoHTML.textContent ="El amigo secreto es :"+ listaAmigos[aleatorio];
    listaAmigos=[];
}

function nuevoSorteo(){
    let resultadoHTML = document.getElementById("resultado");
    resultadoHTML.textContent ="";
}
