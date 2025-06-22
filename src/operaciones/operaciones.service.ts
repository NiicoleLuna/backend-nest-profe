import { Injectable } from '@nestjs/common';

@Injectable()
export class OperacionesService {
  operar(operacion: string = '', a: number, b?: number) {
    if (operacion === 'suma') {
      return this.#suma(a, b!);
    } else if (operacion === 'resta') {
      return this.#resta(a, b!);
    } else if (operacion === 'multiplicacion') {
      return this.#multiplicacion(a, b!);
    } else if (operacion === 'division') {
      return this.#division(a, b!);
    } else if (operacion === 'potencia') {
      return this.#potencia(a, b!);
    } else if (operacion === 'factorial') {
      return this.#factorial(a);
    }
  }

  #suma(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con números indefinidos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a + b;
  }

  #resta(a: number, b: number) {
    if (a === undefined || b === undefined ) {
      throw new Error('No se puede llamar con números indefinidos.');
    }

    if (a === null ||  b === null) {
      throw new Error('No se puede llamar con números nulos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a - b;
  }

  #multiplicacion(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con números indefinidos.');
    }

    if (a === null ||  b === null) {
      throw new Error('No se puede llamar con números nulos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a * b;
  }

  #division(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con números indefinidos.');
    }

    if (a === null ||  b === null) {
      throw new Error('No se puede llamar con números nulos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a / b;
  }

  #potencia(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con números indefinidos.');
    }

    if (a === null ||  b === null) {
      throw new Error('No se puede llamar con números nulos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a ** b;
    //return Math.pow(a,b);
  }

  #factorial(a: number) {
    if (a === undefined) {
      throw new Error('No se puede llamar con números indefinidos.');
    }

    if (a === null) {
      throw new Error('No se puede llamar con números nulos.');
    }

    if (typeof a !== 'number') {
      return NaN;
    }

    let fact = 1;
    for (let i = 1; i <= a; i++) { //comprobar el i 
        fact = fact * i;
    }
    return fact;
  }
}
