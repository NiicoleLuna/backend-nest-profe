import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../app.module';

describe('AppController', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'suma', a: 10, b: 30 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(40);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'suma', a: 100, b: 100 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(200);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'suma', a: "a", b: 100 })
      .expect(502);
  });

  /* resta */
  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'resta', a: 50, b: 25 })
      .expect(200)
      .then((response) => {
        expect(response.body.resultado).toBe(25);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'resta', a: "a", b: 100 })
      .expect(502);
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'resta', a: undefined, b: 100 })
      .expect(502);
  });

  /* multiplicacion */
  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'multiplicacion', a: 8, b: 3 })
      .expect(200)
      .then((response) => {
        expect(response.body.resultado).toBe(24);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'multiplicacion', a: "a", b: 100 })
      .expect(502);
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'multiplicacion', a: undefined, b: 100 })
      .expect(502);
  });

  /* division */
  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'division', a: 9, b: 3 })
      .expect(200)
      .then((response) => {
        expect(response.body.resultado).toBe(3);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'division', a: "a", b: 100 })
      .expect(502);
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'division', a: undefined, b: 100 })
      .expect(502);
  });

  /* potencia */
  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'potencia', a: 2, b: 3 })
      .expect(200)
      .then((response) => {
        expect(response.body.resultado).toBe(8);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'potencia', a: "a", b: 100 })
      .expect(502);
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'potencia', a: undefined, b: 100 })
      .expect(502);
  });

  /* factorial */
  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'factorial', a: 6 })
      .expect(200)
      .then((response) => {
        expect(response.body.resultado).toBe(720);
      });
  });

});
