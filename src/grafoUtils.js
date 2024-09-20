import fs from 'fs/promises';

export async function leerMatrizDesdeArchivo(nombreArchivo) {
    const contenido = await fs.readFile(nombreArchivo, 'utf-8');
    return contenido.trim().split('\n').map(fila => fila.split(' ').map(Number));
}

export function calcularGrados(matriz) {
    const n = matriz.length;
    const gradosEntrada = new Array(n).fill(0);
    const gradosSalida = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (matriz[i][j] === 1) {
                gradosSalida[i]++;
                gradosEntrada[j]++;
            }
        }
    }

    return { gradosEntrada, gradosSalida };
}

export function imprimirGrados(gradosEntrada, gradosSalida, esGrafoDirigido) {
    console.log(esGrafoDirigido ? "Grafo Dirigido:" : "Grafo No Dirigido:");
    for (let i = 0; i < gradosEntrada.length; i++) {
        if (esGrafoDirigido) {
            console.log(`Nodo ${i}: Grado de entrada = ${gradosEntrada[i]}, Grado de salida = ${gradosSalida[i]}`);
        } else {
            const grado = gradosEntrada[i] + gradosSalida[i];
            console.log(`Nodo ${i}: Grado = ${grado}`);
        }
    }
}