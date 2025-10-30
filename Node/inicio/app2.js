const fs = require('node:fs');

console.log("Iniciando lectura...");

try {
    const estado = fs.statSync('./carta.txt');
    console.log("¿Es archivo?:", estado.isFile());
    console.log("¿Es directorio?:", estado.isDirectory());
    console.log("Tamaño (bytes):", estado.size);
} catch (error) {
    console.error("Error al leer carta.txt:", error.message);
}
