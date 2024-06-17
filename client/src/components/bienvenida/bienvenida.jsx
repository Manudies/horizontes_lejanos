
import React from 'react';
import Carrusel from '../carrusel/Carrusel';

import './bienvenida.css';

const Main = () => {
  return (
    <main className="main-content">
      <section>
           <div className="presentacion">
              <h1>Bienvenido a Horizontes lejanos</h1>
              <p>Explora el mundo con nosotros y descubre aventuras inolvidables en cada rincón del planeta.
              <br></br>

              En Horizontes Lejanos, te ofrecemos la oportunidad de planificar el viaje de tus sueños, desde las vibrantes ciudades hasta los paisajes más impresionantes y culturas fascinantes.
              <br></br>
              Sumérgete en una experiencia única donde cada destino te espera con su propio encanto y misterio.
              <br></br>
              Ya sea que busques la tranquilidad de playas paradisíacas, la emoción de aventuras extremas o la riqueza histórica de antiguas civilizaciones, aquí encontrarás el viaje perfecto para ti.
              Nuestro equipo está comprometido en hacer realidad tus deseos de exploración y descubrimiento. 
              <br></br>
              Cada viaje es un viaje de aventura.
              Prepárate para vivir momentos inolvidables y crear recuerdos que perdurarán para siempre.
              <br></br>

              ¿Estás listo para comenzar tu próxima aventura con Horizontes Lejanos?</p>
            </div>
            <div className="imagen">
              <img src="avion.jpeg" alt="imagen" />
            </div>
            {/* <div className='buscador'>
              <input type="text" placeholder="¿Donde quieres viajar?" />
            </div> */}

            <div className="recomendaciones">
              <h2>por que elegirnos?</h2>
              <p>Elegir Horizontes Lejanos para contratar tu viaje puede ser una excelente decisión por varias razones:</p>
                <ul>
                  <li>1. Experiencia y Conocimiento: Horizontes Lejanos podría contar con años de experiencia en la industria del turismo, lo que les permite ofrecer asesoramiento experto y recomendaciones personalizadas basadas en tus intereses y necesidades de viaje.</li>
                  <li>2. Destinos Exóticos y Exclusivos: Esta agencia puede especializarse en destinos lejanos y exóticos, brindándote la oportunidad de explorar lugares únicos y menos convencionales que quizás no encontrarías fácilmente por tu cuenta.</li>
                  <li>3. Paquetes Personalizados: Ofrecen la posibilidad de personalizar los paquetes de viaje, asegurando que cada detalle se ajuste a tus preferencias, desde el tipo de alojamiento hasta las actividades y excursiones.</li>
                  <li>4. Soporte Integral: Proveen un servicio integral que incluye asistencia antes, durante y después del viaje, asegurando que cualquier inconveniente sea resuelto de manera eficiente y rápida.</li>
                  <li>5. Seguridad y Tranquilidad: Viajar con una agencia reconocida te brinda la tranquilidad de saber que cuentas con el respaldo de profesionales, lo que puede ser especialmente importante en destinos remotos donde podrías enfrentar barreras idiomáticas o culturales.</li>
                  <li>6.Ofertas y Promociones: Pueden tener acceso a ofertas exclusivas y promociones especiales gracias a sus alianzas con proveedores de servicios turísticos, lo que te puede permitir obtener mejores precios y beneficios adicionales.</li>
                  <li>7. Sostenibilidad y Responsabilidad: Algunas agencias, como Horizontes Lejanos, pueden estar comprometidas con el turismo sostenible, promoviendo prácticas responsables que beneficien a las comunidades locales y minimicen el impacto ambiental.</li>
                  <li>8. Testimonios y Reputación: Revisar testimonios y opiniones de otros viajeros puede darte una idea de la calidad del servicio que ofrecen. Una buena reputación en la industria es indicativa de la satisfacción de sus clientes.</li>
                  <li>9. Facilidad de Pago: Pueden ofrecer diversas opciones de pago y financiamiento, lo que facilita la planificación y realización de tu viaje sin preocuparte por el desembolso inmediato de grandes sumas de dinero.</li>
                </ul>
              <p>Al elegir una agencia como Horizontes Lejanos, te aseguras de tener una experiencia de viaje bien planificada, segura y adaptada a tus expectativas, lo que puede transformar un simple viaje en una experiencia inolvidable.</p>

            </div>
            <div>
              <Carrusel/>

            </div>
      </section>
    </main>
  );
}

export default Main;
