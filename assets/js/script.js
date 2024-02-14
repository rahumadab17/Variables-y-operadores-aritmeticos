//-----------------------OPERACIONES MATEMÁTICAS---------------------------------

//Se le pide al usuario ingresar el primer número entero
var num1 = parseFloat(prompt("Ingrese un número mayor que 0:"));

//Se le pide al usuario ingresar el segundo número entero
var num2 = parseFloat(prompt("Ingrese otro número mayor que 0:"));

if (num2===num1){
    var num2 = (parseFloat(prompt("El segundo número debe ser distinto al primero. Volver a ingresar:")));
        //Mostrar resultados al usuario
//Suma 
var suma = (num1+num2)
document.write("<p><b>OPERACIONES MATEMÁTICAS</b></p>")
document.write(`<p>La suma de los números es: ${suma}</p>`);

//Resta
var resta = (num1-num2)
document.write(`<p>La resta de los números es: ${resta}</p>`);

//División
var division = ((num1/num2).toFixed(2))
document.write(`<p>La división de los números es: ${division}</p>`);

//Multiplicación
var multiplicacion = (num1*num2)
document.write(`<p>La multiplicación de los números es: ${multiplicacion}</p>`);

//Módulo 
var modulo = (num1%num2)
document.write(`<p>El módulo de los números es: ${modulo}</p>`);

} else if (num2!==num1){
    //Mostrar resultados al usuario
//Suma 
var suma = (num1+num2)
document.write(`<p>La suma de los números es: ${suma}</p>`);

//Resta
var resta = (num1-num2)
document.write(`<p>La resta de los números es: ${resta}</p>`);

//División
var division = ((num1/num2).toFixed(2))
document.write(`<p>La división de los números es: ${division}</p>`);

//Multiplicación
var multiplicacion = (num1*num2)
document.write(`<p>La multiplicación de los números es: ${multiplicacion}</p>`);

//Módulo 
var modulo = (num1%num2)
document.write(`<p>El módulo de los números es: ${modulo}</p>`);

}  


//-----------------------CALCULOS TEMPERATURAS--------------------------

//Solicitar al usuario ingresar una T° en Celsius para convertir a °K y °F
var TCelsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "))

//Cálculo conversiones
var TKelvin = TCelsius + 273.15;
var TFahrenheit = (TCelsius*9/5) + 32;

//Mostrar el resultado al usuario
document.write("<p><b>CÁLCULOS TEMPERATURAS</b></p>")
document.write(`<p>La temperatura ${TCelsius}°C, equivale a: ${TKelvin.toFixed(2)}°K`)
document.write(`<p>La temperatura ${TCelsius}°C, equivale a: ${TFahrenheit.toFixed(2)}°F`)


//--------------------------CANTIDAD DE DIAS---------------------------------

//Solicitar al usuario una cantidad de dias
var dias = parseInt(prompt("Ingrese una cantidad de dias: "));

//Conversión de dias a formato años, semanas, dias
const anio = 365;
var anios = Math.floor(dias / anio);
var meses = Math.floor((dias % anio) / 30);
var semanas = Math.floor((dias % anio) / 7);
var diasRestantes = dias - (anios * 365) - (semanas*7);

//Mostrando resultado en el documento
document.write("<p><b>CÁLCULO - CANTIDAD DE DIAS</b></p>")
document.write(`<p>${dias} días equivalen a: ${anios} año(s), ${meses} mes(es), ${semanas} semana(s) y ${diasRestantes} día(s)</p>`)


//--------------------------SUMA Y PROMEDIO DE 5 NÚMEROS--------------------------
//Solicitar al usuario ingresar 5 números
var num1 = parseFloat(prompt("Ingrese un primer número mayor que 0:"));
var num2 = parseFloat(prompt("Ingrese un segundo número mayor que 0:"));
var num3 = parseFloat(prompt("Ingrese un tercer número mayor que 0:"));
var num4 = parseFloat(prompt("Ingrese un cuarto número mayor que 0:"));
var num5 = parseFloat(prompt("Ingrese un quinto número mayor que 0:"));

var suma = (num1+num2+num3+num4+num5);
var promedio =(suma/5);

document.write("<p><b>SUMA Y PROMEDIO DE 5 NÚMEROS</b></p>")
document.write(`<p>La suma de todos los números es: ${suma}</p>`);
document.write(`<p>El promedio de todos los números es: ${promedio.toFixed(2)}</p>`);
