/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let carta = {
  palos: ["corazon", "pica", "trebol", "diamante"],
  valores: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
};

let iconoIzquierda = document.querySelector("#iconoIzquierda");
let iconoDerecha = document.querySelector("#iconoDerecha");
let valor = document.querySelector("#valor");

function cartaAleatoria(palo, valor) {
  let resultado = [];
  resultado.push(palo[Math.floor(Math.random() * palo.length)]);
  resultado.push(valor[Math.floor(Math.random() * valor.length)]);
  return resultado;
}
function colorIcono(resultado) {
  if (resultado[0] === "corazon" || resultado[0] === "diamante") {
    iconoIzquierda.style.color = "red";
    iconoDerecha.style.color = "red";
  } else {
    iconoIzquierda.style.color = "black";
    iconoDerecha.style.color = "black";
  }
}
function asignarIcono(resultado) {
  switch (resultado[0]) {
    case "corazon":
      iconoIzquierda.innerHTML = "♥";
      iconoDerecha.innerHTML = "♥";
      break;
    case "pica":
      iconoIzquierda.innerHTML = "♠";
      iconoDerecha.innerHTML = "♠";
      break;
    case "trebol":
      iconoIzquierda.innerHTML = "♣";
      iconoDerecha.innerHTML = "♣";
      break;
    default:
      iconoIzquierda.innerHTML = "♦";
      iconoDerecha.innerHTML = "♦";
  }
}
function asignarNumero(resultado) {
  valor.innerHTML = resultado[1];
}
function generarCartaAleatoria(palo, valor) {
  let nuevaCarta = cartaAleatoria(palo, valor);
  colorIcono(nuevaCarta);
  asignarIcono(nuevaCarta);
  asignarNumero(nuevaCarta);
}
document
  .getElementById("generarCartaBoton")
  .addEventListener("click", function() {
    generarCartaAleatoria(carta.palos, carta.valores);
    setInterval(function() {
      generarCartaAleatoria(carta.palos, carta.valores);
    }, 1000);
  });

window.onload = function() {
  generarCartaAleatoria(carta.palos, carta.valores);
};
