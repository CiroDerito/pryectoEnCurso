import React from 'react';
import '../styles/components/HomePage.css'; // Asegúrate de crear y enlazar este archivo CSS con los estilos necesarios

const HomePage = () => {
    return (
        <div>
            <section
                className="hero"
                style={{
                    background: "url('/hero-image.jpg') ",
                    backgroundSize: "cover",
                    height: "400px", 
                    width: "100%",
                }}
            >
                <div className="hero-text">
                    <h1>Sistema de Gestión Médica</h1>
                    <p>Nuestro desarrollo web en páginas de medicina mejora la eficiencia, seguridad y personalización de su gestión médica.</p>
                    <p>Ofrecemos una plataforma integral y fácil de usar que optimiza citas, historiales clínicos y pagos, permitiéndole enfocarse en brindar un servicio de salud de calidad.</p>
                </div>
            </section>

            <section className="features">
                <div className="feature">
                    <img src="/confirmacionhora.png" alt="Confirmación de Horas" />
                    <h2>Modulo de Confirmación de Horas</h2>
                    <p>Plataforma a través de la cual el sistema de forma automática confirma las horas de sus pacientes.</p>
                </div>
                <div className="feature">
                    <img src="/fichaclinica.png" alt="Ficha Clínica Multidisciplinaria" />
                    <h2>Modulo Ficha Clínica Multidisciplinaria</h2>
                    <p>Para el registro de la data clínica de sus pacientes.</p>
                </div>
                <div className="feature">
                    <img src="/pagos.png" alt="Pagos" />
                    <h2>Modulo de Pagos</h2>
                    <p>Gestión completa de los pagos recibidos en sus puntos de atención.</p>
                </div>
                <div className="feature">
                    <img src="/administracion.png" alt="Administración" />
                    <h2>Modulo de Administración</h2>
                    <p>Configuración completa del sistema.</p>
                </div>
            </section>
        </div>
    );
};

export default HomePage;

