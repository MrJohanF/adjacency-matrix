import { leerMatrizDesdeArchivo, calcularGrados, imprimirGrados } from './grafoUtils.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
    const nombreArchivo = join(__dirname, '..', 'data', 'matriz_adyacencia.txt');
    
    try {
        const matriz = await leerMatrizDesdeArchivo(nombreArchivo);
        const { gradosEntrada, gradosSalida } = calcularGrados(matriz);

        // Calcular grados para grafo dirigido
        imprimirGrados(gradosEntrada, gradosSalida, true);

        console.log('\n');

        // Calcular grados para grafo no dirigido
        imprimirGrados(gradosEntrada, gradosSalida, false);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();