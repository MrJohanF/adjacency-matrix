# Documentación del Programa de Cálculo de Grados de Grafo

## Descripción General
Este programa calcula los grados de los nodos en un grafo, tanto para grafos dirigidos como no dirigidos, basándose en una matriz de adyacencia proporcionada por el usuario a través de la consola.

## Estructura del Proyecto
El proyecto consta de dos archivos principales:
1. `src/index.js`: Punto de entrada del programa y manejo de la entrada del usuario.
2. `src/grafoUtils.js`: Funciones de utilidad para trabajar con grafos.

## Dependencias
- Node.js (versión 14 o superior recomendada)
- Módulos internos de Node.js: `readline`

## Funcionamiento Detallado

### src/index.js

#### Importaciones
```javascript
import { createInterface } from 'readline';
import { calcularGrados, imprimirGrados } from './grafoUtils.js';
```
- `createInterface`: Utilizado para crear una interfaz de lectura de la consola.
- `calcularGrados` y `imprimirGrados`: Funciones importadas de `grafoUtils.js`.

#### Funciones Principales

1. `pregunta(prompt)`
   - Propósito: Envuelve la función `rl.question` en una Promesa para facilitar su uso con async/await.
   - Parámetros:
     - `prompt`: String que se muestra al usuario como prompt.
   - Retorna: Una Promesa que se resuelve con la respuesta del usuario.

2. `obtenerMatrizDesdeConsola()`
   - Propósito: Solicita al usuario que ingrese la matriz de adyacencia.
   - Funcionamiento:
     1. Pide al usuario el número de nodos.
     2. Solicita cada fila de la matriz de adyacencia.
     3. Valida que cada fila tenga el número correcto de elementos.
   - Retorna: La matriz de adyacencia como un array bidimensional.

3. `main()`
   - Propósito: Función principal que orquesta el flujo del programa.
   - Funcionamiento:
     1. Obtiene la matriz de adyacencia del usuario.
     2. Calcula los grados usando `calcularGrados`.
     3. Imprime los resultados para grafos dirigidos y no dirigidos.
     4. Maneja errores y cierra la interfaz de readline.

### src/grafoUtils.js

#### Funciones Exportadas

1. `calcularGrados(matriz)`
   - Propósito: Calcula los grados de entrada y salida para cada nodo.
   - Parámetros:
     - `matriz`: Array bidimensional representando la matriz de adyacencia.
   - Retorna: Objeto con `gradosEntrada` y `gradosSalida`.

2. `imprimirGrados(gradosEntrada, gradosSalida, esGrafoDirigido)`
   - Propósito: Imprime los grados de los nodos.
   - Parámetros:
     - `gradosEntrada`: Array con los grados de entrada.
     - `gradosSalida`: Array con los grados de salida.
     - `esGrafoDirigido`: Booleano que indica si el grafo es dirigido.

## Uso del Programa

1. Ejecute el programa con `node src/index.js`.
2. Ingrese el número de nodos cuando se le solicite.
3. Ingrese cada fila de la matriz de adyacencia, usando espacios para separar los valores (0 para no conexión, 1 para conexión).
4. El programa calculará y mostrará los grados para interpretaciones dirigidas y no dirigidas del grafo.

## Ejemplo de Entrada/Salida

Entrada:
```
Ingrese el número de nodos en el grafo: 3
Ingrese la matriz de adyacencia fila por fila.
Use 0 para no conexión y 1 para conexión, separados por espacios.
Fila 1: 0 1 0
Fila 2: 1 0 1
Fila 3: 0 1 0
```

Salida:
```
Resultados:

Grafo Dirigido:
Nodo 0: Grado de entrada = 1, Grado de salida = 1
Nodo 1: Grado de entrada = 2, Grado de salida = 2
Nodo 2: Grado de entrada = 1, Grado de salida = 1

Grafo No Dirigido:
Nodo 0: Grado = 2
Nodo 1: Grado = 4
Nodo 2: Grado = 2
```

## Notas Adicionales
- El programa asume que la entrada del usuario es correcta y que la matriz de adyacencia es válida.
- Para grafos no dirigidos, el programa suma los grados de entrada y salida para obtener el grado total de cada nodo.