import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function FormCadProd(props) {
    const initialState = {
        codigoProduto: '',
        nomeProduto: '',
        descricaoProduto: '',
        medidaProduto: '',
        quantidadeProduto: '',
        precoCompraProduto: '',
        precoVendaProduto: ''
    };

    const [formState, setFormState] = useState(initialState);
    const [validado, setValidado] = useState(false);
    const [enviado, setEnviado] = useState(false);

    function manipularSubmissao(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        const form = evento.currentTarget;
        if (form.checkValidity() === false) {
            setValidado(true);
        } else {
            setValidado(false);
            setEnviado(true);
            setTimeout(() => {
                setEnviado(false);
                setFormState(initialState);
            }, 2000); 
        }
    }

    function handleChange(event) {
        const { id, value } = event.target;
        setFormState(prevState => ({
            ...prevState,
            [id]: value
        }));
    }
    console.log(formState);
    return (
        <div className="mt-5">
            <Form noValidate validated={validado} onSubmit={manipularSubmissao}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="2" controlId="codigoProduto">
                        <Form.Label>Código:</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            maxLength="5"
                            placeholder="Código"
                            value={formState.codigoProduto}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, insira o código do produto.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="nomeProduto">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            maxLength="30"
                            placeholder="Nome"
                            value={formState.nomeProduto}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, insira o nome do produto.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="descricaoProduto">
                        <Form.Label>Descrição:</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            maxLength="100"
                            placeholder="Descrição"
                            value={formState.descricaoProduto}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, insira a descrição do produto.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="2" controlId="medidaProduto">
                        <Form.Label>Medida:</Form.Label>
                        <Form.Control
                            as="select"
                            required
                            value={formState.medidaProduto}
                            onChange={handleChange}
                        >
                            <option value="">Selecione...</option>
                            <option value="unidade">Unidade</option>
                            <option value="kg">Kg</option>
                            <option value="litro">Litro</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Por favor, selecione a medida do produto.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="quantidadeProduto">
                        <Form.Label>Quantidade:</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="Quantidade"
                            value={formState.quantidadeProduto}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, insira a quantidade do produto.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="precoCompraProduto">
                        <Form.Label>Preço de Compra:</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="Preço de Compra"
                            value={formState.precoCompraProduto}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, insira o preço de compra do produto.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="precoVendaProduto">
                        <Form.Label>Preço de Venda:</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="Preço de Venda"
                            value={formState.precoVendaProduto}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, insira o preço de venda do produto.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                {enviado && <p>Enviado com sucesso!</p>}
                <Button type="submit">Enviar</Button>
            </Form>
        </div>
    );
}
