import React from 'react'
import ReactDOM from 'react-dom'
import CalculadoraService from './calculadora.service'

describe('Teste do CalculadoraService', () => {
    const [calcular, concatenarNumero, SOMA, SUBTRAIR, DIVIDIR, MULTIPLICAR] = CalculadoraService();

    it('deve garantir que 1 + 4 = 5', () => {
        let soma = calcular(1, 4, SOMA)
        expect(soma).toEqual(5)
    })

    it('deve garantir que 5 - 1 = 4', () => {
        let subtrair = calcular(5,1, SUBTRAIR)
        expect(subtrair).toEqual(4)
    })
    it('deve garantir que 4 / 2 = 2', () => {
        let dividir = calcular(4,2, DIVIDIR)
        expect(dividir).toEqual(2)
    })
    it('deve garantir que 5 * 2 = 10', () => {
        let multiplicar = calcular(5,2, MULTIPLICAR)
        expect(multiplicar).toEqual(10)
    })

    it('deve retornar 0 para operação inválida', () => {
        let opInvalida = calcular(1, 4, '%')
        expect(opInvalida).toEqual(0)
    })
});