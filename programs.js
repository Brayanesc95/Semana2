function calcularPotencia() {
    var base = document.getElementById('base').value;
    var exponente = document.getElementById('exponente').value;
    var resultado = Math.pow(base, exponente);
    document.getElementById('resultado1').textContent = 'El resultado de: ' + base + ' elevado a ' + exponente + ' es: ' + resultado;
}

function calcularCentigrados() {
    var base = document.getElementById('Celcius').value;
    var resultado =  (base * (5/9))+32;
    document.getElementById('resultado2').textContent = 'La cantidad de grados Farenheit es: ' + resultado.toFixed(2);
}

let nombres = []; 

function agregarNombre() {
    let nombre = document.getElementById('nombreInput').value;
    nombres.push(nombre);
    let lista = document.getElementById('listaNombres');
    let elemento = document.createElement('li');
    elemento.textContent = nombre;
    lista.appendChild(elemento);
    document.getElementById('nombreInput').value = '';
}

function filtrarNombres() {
    let longitud = document.getElementById('longitudInput').value;
    let nombresFiltrados = nombres.filter(nombre => nombre.length == longitud);
    let listaFiltrada = document.getElementById('listaFiltrada');
    listaFiltrada.innerHTML = ''; 
    /*Se agregan los nombres diltrados del array a la lista para html*/
    nombresFiltrados.forEach(nombre => {
      let elemento = document.createElement('li');
      elemento.textContent = nombre;
      listaFiltrada.appendChild(elemento);
    });
  }

  function calcularEdad() {
    
    let fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
    let hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let m = hoy.getMonth() - fechaNacimiento.getMonth();
  /**Validacion de casos en los están en el mismo mes de nacimiento */
    if (m < 0 || (m == 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad = edad - 1;
    }
  
    document.getElementById('edadCalculada').textContent = 'La edad es: ' + edad + ' años';
  }