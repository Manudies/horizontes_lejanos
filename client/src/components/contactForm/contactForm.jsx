import Form from 'react-bootstrap/Form';

function ContactForm() {
    return (
        <Form className="contact-form">
            <h2>
                Contáctanos
            </h2>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label className='label'>Nombre y Apellidos: </Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="mail">
                <Form.Label className='label'>Tu correo electrónico: </Form.Label>
                <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
                <Form.Label className='label'>Número de Teléfono: </Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="enquiry">
                <Form.Label className='label'>Tu consulta: </Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <div className="mb-3">
                <Form.Check
                    id={`Privacy`}
                    label={`He leído y Aceptado la Politica de Privacidad.`}
                />
            </div>
            <div className="mb-3">
                <Form.Check
                    id={`TermsCons`}
                    label={`He leído y Aceptado los Términos y Condiciones.`}
                />
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </Form>
    );
}

export default ContactForm;