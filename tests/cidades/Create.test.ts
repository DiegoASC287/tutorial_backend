import {describe, expect, test, it} from '@jest/globals';
import {testServer} from '../jest.setup'
describe('Cidades - Create', () => {
    it("Cria Resigtro",  async () => {
        const res = await testServer
        .post('/cidades').send({
            nome: 'João Pessoa'
        })
    })

    it("Tenta criar um registro com o nome muito curto", async () => {
        const res1 = await testServer.post('/cidades').send(
            {
                nome: "J",
                estado: 'Paraíba'
            }
        )
        expect(res1.statusCode).toEqual(400)
        expect(res1.body).toHaveProperty("errors.body.nome")
    })
})