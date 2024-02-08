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

  function ContarPalabras() {
    var inputText = document.getElementById('inputText').value;
    var words = inputText.trim().split(/\s+/);
    var numWords = words.length;
    if (inputText === '') {
        numWords = 0;
    }
    document.getElementById('LargoPalabras').innerText = 'Número de palabras: ' + numWords;
}

let numeros = []; 

function agregarNumero() {
    let numero = document.getElementById('NumberInput').value;
    numeros.push(numero);
    let lista = document.getElementById('listaNumeros');
    let elemento = document.createElement('li');
    elemento.textContent = numero;
    lista.appendChild(elemento);
    document.getElementById('NumberInput').value = '';
}

function calcularPromedio() {
  if (numeros.length > 0) {
      var suma = numeros.reduce((acumulado, actual) => acumulado + actual, 0);
      var promedio = suma / numeros.length;
      document.getElementById('calcPromedio').innerText = 'Promedio: ' + promedio.toFixed(2);
  } else {
      document.getElementById('calcPromedio').innerText = 'Por favor, agrega algunos números primero.';
  }
}

function cambiarColor() {
  var color = document.getElementById('inputColor').value; 
  document.getElementById('ColorCuadro').style.backgroundColor = color; 
}
