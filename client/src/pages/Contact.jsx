import React from "react";

const ContactoPage = () => {
  return (
    <div className="flex bg-gray-100 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Contáctanos
        </h2>
        <form className="flex flex-col items-center">
          <div className="form-group w-full mb-4">
            <label htmlFor="name" className="block text-left mb-2">
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="form-group w-full mb-4">
            <label htmlFor="email" className="block text-left mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="form-group w-full mb-4">
            <label htmlFor="message" className="block text-left mb-2">
              Mensaje:
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full p-2 border border-gray-300 rounded-md resize-vertical"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Enviar
          </button>
        </form>
        <p className="mt-6 text-gray-600">
          &copy; {new Date().getFullYear()} Medical Website. Todos los derechos
          reservados.
        </p>
      </div>
    </div>
  );
};

export default ContactoPage;
