import React from 'react';
import '../styles/components/NovedadesPage.css';

const NovedadesPage = () => {
  return (
    <div className="novedades-page">
      <h2>Novedades</h2>
      <div class="news-item">
        <h3>Inauguración de Nuevas Instalaciones</h3>
        <p>Estamos emocionados de anunciar la inauguración de nuestras nuevas instalaciones, diseñadas para proporcionar un entorno más cómodo y eficiente para nuestros pacientes.</p>
        <span>Publicado el 10 de junio de 2024</span>
      </div>
      <div class="news-item">
        <h3>Nuevo Equipo de Resonancia Magnética</h3>
        <p>Hemos adquirido un equipo de resonancia magnética de última generación para mejorar la precisión de nuestros diagnósticos y ofrecer una atención médica de alta calidad.</p>
        <span>Publicado el 25 de mayo de 2024</span>
      </div>
      <div class="news-item">
        <h3>Campaña de Vacunación Gratuita</h3>
        <p>Nos complace informar que estamos llevando a cabo una campaña de vacunación gratuita para la comunidad, enfocada en la prevención de enfermedades estacionales.</p>
        <span>Publicado el 15 de abril de 2024</span>
      </div>
      <div class="news-item">
        <h3>Nuevo Especialista en Dermatología</h3>
        <p>Le damos la bienvenida a la Dra. Susana Ramírez, nuestra nueva especialista en dermatología, que se une a nuestro equipo para ampliar los servicios que ofrecemos.</p>
        <span>Publicado el 30 de marzo de 2024</span>
      </div>
      <p>Últimas novedades...</p>
    </div>
  );
};

export default NovedadesPage;
