import React from "react";

const HomePage = () => {
  return (
    <div>
      <section
        className="hero bg-cover bg-center h-[400px] flex justify-center items-center text-white text-center"
        style={{ backgroundImage: "url('/hero-image.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-4xl font-bold">Sistema de Gestión Médica</h1>
          <p className="mt-4">
            Nuestro desarrollo web en páginas de medicina mejora la eficiencia,
            seguridad y personalización de su gestión médica.
          </p>
          <p className="mt-2">
            Ofrecemos una plataforma integral y fácil de usar que optimiza
            citas, historiales clínicos y pagos, permitiéndole enfocarse en
            brindar un servicio de salud de calidad.
          </p>
        </div>
      </section>

      <section className="features flex flex-wrap justify-around p-6">
        <div className="feature flex-1 min-w-[200px] m-4 text-center">
          <img
            src="/confirmacionhora.png"
            alt="Confirmación de Horas"
            className="mx-auto w-24 mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Módulo de Confirmación de Horas
          </h2>
          <p className="text-gray-600">
            Plataforma a través de la cual el sistema de forma automática
            confirma las horas de sus pacientes.
          </p>
        </div>
        <div className="feature flex-1 min-w-[200px] m-4 text-center">
          <img
            src="/fichaclinica.png"
            alt="Ficha Clínica Multidisciplinaria"
            className="mx-auto w-24 mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Módulo Ficha Clínica Multidisciplinaria
          </h2>
          <p className="text-gray-600">
            Para el registro de la data clínica de sus pacientes.
          </p>
        </div>
        <div className="feature flex-1 min-w-[200px] m-4 text-center">
          <img src="/pagos.png" alt="Pagos" className="mx-auto w-24 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Módulo de Pagos
          </h2>
          <p className="text-gray-600">
            Gestión completa de los pagos recibidos en sus puntos de atención.
          </p>
        </div>
        <div className="feature flex-1 min-w-[200px] m-4 text-center">
          <img
            src="/administracion.png"
            alt="Administración"
            className="mx-auto w-24 mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Módulo de Administración
          </h2>
          <p className="text-gray-600">Configuración completa del sistema.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
