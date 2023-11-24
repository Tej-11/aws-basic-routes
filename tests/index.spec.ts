import test, { describe } from "node:test";
import { app } from "..";
import supertest from "supertest";

const requestWithSupertest = supertest(app);

describe('Testing weather the end point http://localhost:3000/first-route', async() => {

    test('Method GET ./first-route:  Return status code 200', async () => {
      const res = await requestWithSupertest.get('/first-route');
      expect(res.statusCode).toEqual(200);
    });
    
  });

describe('Testing weather the end point http://localhost:3000/second-route', async() => {

  test('Method GET ./second-route:  Return status code 200', async () => {
    const res = await requestWithSupertest.get('/second-route');
    expect(res.statusCode).toEqual(200);
      
  });
  
});



