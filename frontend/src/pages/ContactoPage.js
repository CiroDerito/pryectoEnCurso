import React from 'react';
import '../styles/components/ContactoPage.css';

const ContactoPage = () => {
    return (
        <footer>
            <div className="footer-container">
                <h2>Contáctanos</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensaje:</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
                <p>&copy; {new Date().getFullYear()} Medical Website. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default ContactoPage;

