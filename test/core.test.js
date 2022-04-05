import { expect, test } from "@jest/globals";
import createCore from "../src/core.js";

describe('Core quando importado', ()=>{
    test('deve ter i método #start e #stop', ()=>{
        const core = createCore();
        expect(core).toHaveProperty('start');
        expect(core).toHaveProperty('stop');
    });
});

describe('Core quando inicializado', ()=>{
    test('não deve retornar erros', ()=>{
        const core = createCore();
        expect(()=>{
            core.start();
        }).not.toThrow();
    });
});


