import Carrusel from '../carrusel/Carrusel';
import CarruselImg from '../carruselImagenes/CarruselImg';
import './bienvenida.css';
import ContactForm from '../contactForm/contactForm';
import {useNavigate} from 'react-router-dom';



const Main = () => {
  const navigate = useNavigate();
  const showAll = () => {
    navigate('/trips');
    
  }
  return (
    <main className="main-content">
      <section className="section-bienvenida">
        <div className='texto-superpuesto'>
          <h1>Bienvenido a Horizontes Lejanos</h1>
        </div>
        <div>
          <CarruselImg />
        </div>
        <div className='intro'>
          <h2>Explora el mundo con nosotros y descubre aventuras inolvidables en cada rincón del planeta.</h2>
          <p>
            En Horizontes Lejanos, te ofrecemos la oportunidad de planificar el viaje de tus sueños, desde las vibrantes ciudades hasta los paisajes más impresionantes y culturas fascinantes.
            Sumérgete en una experiencia única donde cada destino te espera con su propio encanto y misterio.</p>
          <p>
            Ya sea que busques la tranquilidad de playas paradisíacas, la emoción de aventuras extremas o la riqueza histórica de antiguas civilizaciones, aquí encontrarás el viaje perfecto para ti.
            Nuestro equipo está comprometido en hacer realidad tus deseos de exploración y descubrimiento.</p>
          <p>
            Cada viaje es un viaje de aventura.</p>
          <p>
            Prepárate para vivir momentos inolvidables y crear recuerdos que perdurarán para siempre.</p>
          <p>
            ¿Estás listo para comenzar tu próxima aventura con Horizontes Lejanos?</p>
        </div>
        <div className='descubre'>
          <button onClick={showAll} className='button'>Descubre nuestros destinos</button>
        </div>

        <div className="mundo">
          <img src="mundo.png" alt="imagen de mundo" />
        </div>

        <div className="recomendaciones">
          <h2>¿Por qué contratar tu viaje con nosotros?</h2>
          <p>Elegir Horizontes Lejanos para contratar tu viaje puede ser una excelente decisión por varias razones:</p>
          <div className='contenedor-tarjetas'>
            <div class="tarjeta">
              <h2>Experiencia y Conocimiento</h2>
              <p>Horizontes Lejanos podría contar con años de experiencia en la industria del turismo, lo que les permite ofrecer asesoramiento experto y recomendaciones personalizadas basadas en tus intereses y necesidades de viaje.</p>
            </div>
            <div class="tarjeta">
              <h2>Destinos Exóticos y Exclusivos</h2>
              <p>Esta agencia puede especializarse en destinos lejanos y exóticos, brindándote la oportunidad de explorar lugares únicos y menos convencionales que quizás no encontrarías fácilmente por tu cuenta.</p>
            </div>
            <div class="tarjeta">
              <h2>Paquetes Personalizados</h2>
              <p>Ofrecen la posibilidad de personalizar los paquetes de viaje, asegurando que cada detalle se ajuste a tus preferencias, desde el tipo de alojamiento hasta las actividades y excursiones.</p>
            </div>
            <div class="tarjeta">
              <h2>Soporte Integral</h2>
              <p>Proveen un servicio integral que incluye asistencia antes, durante y después del viaje, asegurando que cualquier inconveniente sea resuelto de manera eficiente y rápida.</p>
            </div>
            <div class="tarjeta">
              <h2>Seguridad y Tranquilidad</h2>
              <p>Viajar con una agencia reconocida te brinda la tranquilidad de saber que cuentas con el respaldo de profesionales, lo que puede ser especialmente importante en destinos remotos donde podrías enfrentar barreras idiomáticas o culturales.</p>
            </div>
            <div class="tarjeta">
              <h2>Sostenibilidad y Responsabilidad</h2>
              <p>Algunas agencias, como Horizontes Lejanos, pueden estar comprometidas con el turismo sostenible, promoviendo prácticas responsables que beneficien a las comunidades locales y minimicen el impacto ambiental.</p>
            </div>
            <div class="tarjeta">
              <h2>Testimonios y Reputación</h2>
              <p>Revisar testimonios y opiniones de otros viajeros puede darte una idea de la calidad del servicio que ofrecen. Una buena reputación en la industria es indicativa de la satisfacción de sus clientes.</p>
            </div>
            <div class="tarjeta">
              <h2>Facilidad de Pago</h2>
              <p>Pueden ofrecer diversas opciones de pago y financiamiento, lo que facilita la planificación y realización de tu viaje sin preocuparte por el desembolso inmediato de grandes sumas de dinero.</p>
            </div>
          </div>
          <p>Al elegir una agencia como Horizontes Lejanos, te aseguras de tener una experiencia de viaje bien planificada, segura y adaptada a tus expectativas, lo que puede transformar un simple viaje en una experiencia inolvidable.</p>
        </div>
        <div>
          <Carrusel />
        </div>
        <div>
          <ContactForm />
        </div>

      </section >
    </main >
  );
}

export default Main;