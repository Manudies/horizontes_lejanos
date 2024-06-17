import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com';
import {serviceID, templateID, userID} from '../../utils/emailConfig';

import './contactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      emailjs.send(serviceID, templateID, formData, userID)
        .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
        });
  
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    };
  
    return (
      <div className="contact-form">
        <h2 className='text-center'> Contactanos</h2>
        <Form className="contact-form2" onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Nombre: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduce tu nombre"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>
  
          <Form.Group className='contact-form2' controlId="formEmail">
            <Form.Label>Dirección de email: </Form.Label>
            <Form.Control
              type="email"
              placeholder="Introduce tu email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
  
          <Form.Group className='contact-form2' controlId="formMessage">
            <Form.Label>Mensaje: </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Introduce tu mensaje"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </Form.Group>
  
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </Form>
      </div>
    );
  };
  
  export default ContactForm;