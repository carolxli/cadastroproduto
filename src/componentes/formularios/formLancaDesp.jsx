import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function FormLancaDesp(props) {
    const initialState = {
        codigoDespesa: '',
        data: new Date(),
        descricaoDespesa: '',
        categoria: '',
        dataVencimento: new Date(),
        valor: '',
        responsavel: ''
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

    return (
        <div className="mt-5">
            <Form noValidate validated={validado} onSubmit={manipularSubmissao}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="2" controlId="codigoDespesa">
                        <Form.Label>Código:</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            maxLength="5"
                            value={formState.codigoDespesa}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, insira o código da despesa.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId="data">
                        <Form.Label>Data da Despesa:</Form.Label>
                        <DatePicker
                            selected={formState.data}
                            onChange={date => setFormState({ ...formState, data: date })}
                            className="form-control"
                            dateFormat="dd/MM/yyyy"
                            popperPlacement="bottom-end"
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, insira a data da despesa.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="descricaoDespesa">
                        <Form.Label>Descrição:</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            maxLength="100"
                            value={formState.descricaoDespesa}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, insira a descrição da despesa.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="2" controlId="categoria">
                        <Form.Label>Categoria:</Form.Label>
                        <Form.Control
                            as="select"
                            required
                            value={formState.categoria}
                            onChange={handleChange}
                        >
                            <option value="">Selecione...</option>
                            <option value="Fixa">Fixa</option>
                            <option value="Variável">Variável</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Por favor, selecione a categoria da empresa.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId="dataVencimento">
                        <Form.Label>Data de Vencimento:</Form.Label>
                        <DatePicker
                            selected={formState.dataVencimento}
                            onChange={date => setFormState({ ...formState, dataVencimento: date })}
                            className="form-control"
                            dateFormat="dd/MM/yyyy"
                            popperPlacement="bottom-end"
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, insira a data de vencimento.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId="valor">
                        <Form.Label>Valor:</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            value={formState.valor}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, insira o valor da despesa.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId="responsavel">
                        <Form.Label>Responsavel:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            maxLength="30"
                            value={formState.responsavel}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, insira o nome do responsavel pela despesa.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                {enviado && <p>Enviado com sucesso!</p>}
                <Button type="submit">Enviar</Button>
            </Form>
        </div>
    );
}
