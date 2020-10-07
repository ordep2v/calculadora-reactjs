export default function CalculadoraService() {
    const SOMA = '+'
    const SUBTRAIR = '-'
    const MULTIPLICAR = '*'
    const DIVIDIR = '/'
    function calcular(num1,num2,operacao){
        let resultado;
        switch(operacao){
            case SOMA:
                resultado = num1 + num2
                break
            case SUBTRAIR:
                resultado = num1 - num2
                break
            case MULTIPLICAR:
                resultado = num1 * num2
                break
            case DIVIDIR:
                resultado = num1 / num2
                break
            default:
                resultado = 0
        }
        return resultado;
    }
    
    function concatenarNumero(numAtual, numConcat) {
        // caso contenha apenas '0' ou null, reiniciar o valor
        if(numAtual === '0'|| numAtual === null) {
            numAtual = ''
        } 
        // quando o primeiro dígito for '.', concatena o '0' antes do ponto.
        if(numConcat === '.' && numAtual === '') {
            return '0.'
        }
        // caso '.' digitado e já contenha um ., apenas retorna
        if(numConcat === '.' && numAtual.indexOf('.') > -1) {
            return numAtual;
        }
        return numAtual + numConcat
    }
    return [calcular, concatenarNumero, SOMA, SUBTRAIR,DIVIDIR, MULTIPLICAR];
}