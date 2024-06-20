// routes/emailRouter.js
import { Router } from 'express';
import { sendConfirmationEmail } from '../controllers/email/email.js';

const emailRouter = Router();

emailRouter.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    await sendConfirmationEmail(to, subject, text);
    res.status(200).json({ message: 'Correo enviado exitosamente' });
  } catch (error) {
    console.error('Error enviando el correo:', error);
    res.status(500).json({ message: 'Error enviando el correo' });
  }
});

export default emailRouter;
