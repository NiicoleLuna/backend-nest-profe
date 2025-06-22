import { Test, TestingModule } from '@nestjs/testing';
import { OperacionesService } from './operaciones.service';

describe('OperacionesService', () => {
  let service: OperacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperacionesService],
    }).compile();

    service = module.get<OperacionesService>(OperacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  /* validaciones suma */
  it('operación debería sumar', () => {
    let a: any = 10;
    let b = 30;

    expect(service.operar('suma', a, b)).toBe(40);

    a = -10;
    b = 50;
    expect(service.operar('suma', a, b)).toBe(40);

    a = -10;
    b = -50;
    expect(service.operar('suma', a, b)).not.toBe(-100);

    a = Math.PI;
    b = 30;
    expect(service.operar('suma', a, b)).toBeCloseTo(33.14, 2);

    a = null;
    b = 50;
    expect(service.operar('suma', a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.operar('suma', a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.operar('suma', a, b);
    }).toThrow('No se puede llamar con números indefinidos.');
    });

    /* validaciones restar */
    it('operación debería restar', () => {
    let a: any = 20;
    let b = 10;
    expect(service.operar('resta', a, b)).toEqual(10);

    a = 50;
    b = 20;
    expect(service.operar('resta', a, b)).toBe(30);

    a = null;
    b = 50;
    expect(() => {
      service.operar('resta', a, b);
    }).toThrow('No se puede llamar con números nulos.');

    a = undefined;
    b = 50;
    expect(() => {
      service.operar('resta', a, b);
    }).toThrow('No se puede llamar con números indefinidos.');

    a = 'a';
    b = 50;
    expect(service.operar('resta', a, b)).toBeNaN();
    });

    /* validaciones multiplicar */
    it('operación debería multiplicar', () => {
    let a: any = 2;
    let b = 5;
    expect(service.operar('multiplicacion', a, b)).toEqual(10);

    a = 8;
    b = 4;
    expect(service.operar('multiplicacion', a, b)).toBe(32);

    a = null;
    b = 24;
    expect(() => {
      service.operar('multiplicacion', a, b);
    }).toThrow('No se puede llamar con números nulos.');

    a = undefined;
    b = 18;
    expect(() => {
      service.operar('multiplicacion', a, b);
    }).toThrow('No se puede llamar con números indefinidos.');

    a = 'a';
    b = 56;
    expect(service.operar('multiplicacion', a, b)).toBeNaN();
    });

    /* validaciones dividir */
    it('operación debería dividir', () => {
    let a: any = 100;
    let b = 10;
    expect(service.operar('division', a, b)).toEqual(10);

    a = 9;
    b = 3;
    expect(service.operar('division', a, b)).toBe(3);

    a = null;
    b = 24;
    expect(() => {
      service.operar('division', a, b);
    }).toThrow('No se puede llamar con números nulos.');

    a = undefined;
    b = 18;
    expect(() => {
      service.operar('division', a, b);
    }).toThrow('No se puede llamar con números indefinidos.');

    a = 'a';
    b = 56;
    expect(service.operar('division', a, b)).toBeNaN();
    });

    /* validaciones potencia */
    it('operación debería calcular potencia', () => {
    let a: any = 2;
    let b = 4;
    expect(service.operar('potencia', a, b)).toEqual(16);

    a = 3;
    b = 3;
    expect(service.operar('potencia', a, b)).toBe(27);

    a = null;
    b = 74;
    expect(() => {
      service.operar('potencia', a, b);
    }).toThrow('No se puede llamar con números nulos.');

    a = undefined;
    b = 48;
    expect(() => {
      service.operar('potencia', a, b);
    }).toThrow('No se puede llamar con números indefinidos.');

    a = 'a';
    b = 87;
    expect(service.operar('potencia', a, b)).toBeNaN();
    });

    /* validaciones factorial */
    it('operación debería calcular factorial', () => {
    let a: any = 5;
    expect(service.operar('factorial', a)).toEqual(120);

    a = 6;
    expect(service.operar('factorial', a)).toBe(720);

    a = null;
    expect(() => {
      service.operar('factorial', a);
    }).toThrow('No se puede llamar con números nulos.');

    a = undefined;
    expect(() => {
      service.operar('factorial', a);
    }).toThrow('No se puede llamar con números indefinidos.');

    a = 'a';
    expect(service.operar('factorial', a)).toBeNaN();
    });
});
