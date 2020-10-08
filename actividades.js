// // Actividad 1
// Crear un arreglo
// // Actividad 2
// A;adir un elemento al final o otro al inicio del arreglo
// // Actividad 3
// Concantenar dos arreglos
// // Actividad 4
// retornar los elementos de un arreglo
// // Actividad 5
// A;adir un caracter especial para separar los elementos del arreglo, ordenar y listar alfabeticamente.

// 1:
let animales = ['perro', 'gato', 'loro'];
let pais = ['Perú', 'argentina', 'ecuador'];
console.log(animales);
// 2:
animales.push('conejo');
console.log(animales);

// 3:
console.log(animales.concat(pais));

// 4:
for (let i = 0; i < animales.length; i++) {
	console.log(i, animales[i]);
}
// 5:
console.log(animales.join('*'));