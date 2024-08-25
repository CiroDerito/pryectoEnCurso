import React from "react";

const NovedadesPage = () => {
  return (
    <div className="p-6 text-left">
      <h2 className="text-2xl font-semibold text-green-600 mb-6">Novedades</h2>
      <div className="news-item bg-white border border-gray-300 rounded-lg p-6 mb-6 shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Inauguración de Nuevas Instalaciones
        </h3>
        <p className="text-gray-600 mb-2">
          Estamos emocionados de anunciar la inauguración de nuestras nuevas
          instalaciones, diseñadas para proporcionar un entorno más cómodo y
          eficiente para nuestros pacientes.
        </p>
        <span className="text-gray-500 text-sm">
          Publicado el 10 de junio de 2024
        </span>
      </div>
      <div className="news-item bg-white border border-gray-300 rounded-lg p-6 mb-6 shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Nuevo Equipo de Resonancia Magnética
        </h3>
        <p className="text-gray-600 mb-2">
          Hemos adquirido un equipo de resonancia magnética de última generación
          para mejorar la precisión de nuestros diagnósticos y ofrecer una
          atención médica de alta calidad.
        </p>
        <span className="text-gray-500 text-sm">
          Publicado el 25 de mayo de 2024
        </span>
      </div>
      <div className="news-item bg-white border border-gray-300 rounded-lg p-6 mb-6 shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Campaña de Vacunación Gratuita
        </h3>
        <p className="text-gray-600 mb-2">
          Nos complace informar que estamos llevando a cabo una campaña de
          vacunación gratuita para la comunidad, enfocada en la prevención de
          enfermedades estacionales.
        </p>
        <span className="text-gray-500 text-sm">
          Publicado el 15 de abril de 2024
        </span>
      </div>
      <div className="news-item bg-white border border-gray-300 rounded-lg p-6 mb-6 shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Nuevo Especialista en Dermatología
        </h3>
        <p className="text-gray-600 mb-2">
          Le damos la bienvenida a la Dra. Susana Ramírez, nuestra nueva
          especialista en dermatología, que se une a nuestro equipo para ampliar
          los servicios que ofrecemos.
        </p>
        <span className="text-gray-500 text-sm">
          Publicado el 30 de marzo de 2024
        </span>
      </div>
      <p className="text-gray-600 mt-6">Últimas novedades...</p>
    </div>
  );
};

export default NovedadesPage;
