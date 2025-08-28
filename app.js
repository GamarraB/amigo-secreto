// Array para almacenar los amigos del usuario
let amigosUsuario = [];

// Elementos del DOM
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

//Agrega un nuevo amigo a la lista -----------------------------------------------------

function agregarAmigo() {
  const nombreIngresado = inputAmigo.value.trim();

  // Validar entrada vacía
  if (nombreIngresado === "") {
    mostrarAlerta("Por favor, inserta un nombre.");
    limpiarCaja();
    return;
  }

  // Validar nombre duplicado
  if (amigosUsuario.includes(nombreIngresado)) {
    mostrarAlerta("El nombre ya existe en la lista.");
    limpiarCaja();
    return;
  }

  // Agregar amigo a la lista
  amigosUsuario.push(nombreIngresado);
  limpiarCaja();
  mostrarAmigos();

  console.log("Lista actualizada:", amigosUsuario);
}

// Muestra la lista de amigos en el DOM ---------------------------------------------------

function mostrarAmigos() {
  // Limpiar lista actual
  listaAmigos.innerHTML = "";

  // Generar lista HTML
  const itemsHTML = amigosUsuario.map((amigo) => `<li>${amigo}</li>`).join("");

  listaAmigos.innerHTML = itemsHTML;
}

// Sortea un amigo aleatorio de la lista --------------------------------------------------

function sortearAmigo() {
  // Validar que hay amigos disponibles
  if (amigosUsuario.length === 0) {
    mostrarAlerta("No hay amigos disponibles para sortear.");
    return;
  }

  // Generar índice aleatorio y seleccionar amigo
  const indiceAleatorio = Math.floor(Math.random() * amigosUsuario.length);
  const amigoSorteado = amigosUsuario[indiceAleatorio];

  // Mostrar resultado
  resultado.innerHTML = `<li>🎉 ${amigoSorteado}</li>`;
}

// Limpia el campo de entrada -------------------------------------------------------------

function limpiarCaja() {
  inputAmigo.value = "";
  inputAmigo.focus(); // Mantiene el foco en el campo
}

function mostrarAlerta(mensaje) {
  alert(mensaje);
}
