import React, {useState} from "react";
import { Jumbotron, Container, Row, Col, Button, Form } from "react-bootstrap";
import "./calculadora.css";
import CalculadoraService from './calculadora.service'


function Calculadora() {
  const [calcular, concatenarNumero, SOMA, SUBTRAIR, DIVIDIR, MULTIPLICAR, ] = CalculadoraService()
  
  const [txtNumeros, setTxtNumeros] = useState('0')
  const [num1, setNum1] = useState('0')
  const [num2, setNum2] = useState(null)
  const [operacao, setOperacao] = useState(null)  
  
  function addNumero(num) {
    let resultado;
    if(operacao === null) {
      resultado = concatenarNumero(num1, num)
      setNum1(resultado)

    }else {
      resultado = concatenarNumero(num2, num)
      setNum2(resultado)
    }
    setTxtNumeros(resultado)
  }

  function addOperacao(op) {
    //apenas define a operação caso ela não exista
    if(operacao === null) {
      setOperacao(op)
      return;
    }
    //caso a operação estiver definida e o núm2 selecionado, realiza o cálculo da operação
    if(num2 !== null) {
      const resultado = calcular(parseFloat(num1),parseFloat(num2), operacao)
      setOperacao(op);
      setNum1(resultado.toString())
      setNum2(null)
      setTxtNumeros(resultado.toString())
    }
  }

  function acaoCalcular() {
    if(num2 === null) {
      return;
    }
    const resultado = calcular(parseFloat(num1), parseFloat(num2), operacao)
    setTxtNumeros(resultado)
  }

  function limpar() {
    setTxtNumeros('0')
    setNum1('0')
    setNum2(null)
    setOperacao(null)
  }



  return (
    <Jumbotron
      style={{
        background: "transparent !important",
        backgroundColor: "#008bfe",
        padding: "5px",
        margin: "5px",
        width: "400px",
      }}
    >
      <Container>
        <Row>
          <Col xs="3">
            <Button variant='danger' onClick={limpar}>C</Button>
            </Col>
          <Col xs="9">
            <Form.Control type='text' name='txtNumeros' className='text-right' readOnly='readonly'
            value={txtNumeros}
            data-testid='txtNumeros'/>
          </Col>
        </Row>
        <Row>
          <Col>
      <Button variant='light'
      onClick={() => addNumero('7')}>7</Button>
          </Col>
          <Col>
          <Button variant='light'
          onClick={() => addNumero('8')}>8</Button>
          </Col>
          <Col>
          <Button variant='light'
          onClick={() => addNumero('9')}>9</Button>
          </Col>
          <Col>
          <Button variant='warning' onClick={() => addOperacao(DIVIDIR)}>/</Button>
          </Col>
        </Row>
        <Row>
        <Col>
      <Button variant='light' onClick={() => addNumero('4')}>4</Button>
          </Col>
          <Col>
          <Button variant='light' onClick={() => addNumero('5')}>5</Button>
          </Col>
          <Col>
          <Button variant='light' onClick={() => addNumero('6')}>6</Button>
          </Col>
          <Col>
          <Button variant='warning' onClick={() => addOperacao(MULTIPLICAR)}>*</Button>
          </Col>
        </Row>
        <Row>
        <Col>
      <Button variant='light' onClick={() => addNumero('1')}>1</Button>
          </Col>
          <Col>
          <Button variant='light' onClick={() => addNumero('2')}>2</Button>
          </Col>
          <Col>
          <Button variant='light' onClick={() => addNumero('3')}>3</Button>
          </Col>
          <Col>
          <Button variant='warning' onClick={() => addOperacao(SUBTRAIR)}>-</Button>
          </Col>
        </Row>
        <Row>
        <Col>
      <Button variant='light' onClick={() => addNumero('0')}>0</Button>
          </Col>
          <Col>
          <Button variant='light' onClick={() => addNumero('.')}>.</Button>
          </Col>
          <Col>
          <Button variant='success' onClick={acaoCalcular}>=</Button>
          </Col>
          <Col>
          <Button variant='warning' onClick={() => addOperacao(SOMA)}>+</Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Calculadora;
