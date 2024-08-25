import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center"
        >
          <img
            src="/logo.png"
            alt="logo"
            className="w-16 h-16 object-cover rounded-full"
          />
          <h1 className="ml-2 text-sm md:text-lg font-semibold">MEDICAL CARE</h1>
        </NavLink>

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <button id="menu-btn" className="text-gray-800 focus:outline-none">
            <i className="fa fa-bars fa-lg"></i>
          </button>
        </div>

        {/* Links (Hidden by default on mobile, flex on larger screens) */}
        <div
          id="menu"
          className="hidden md:flex space-x-6 text-sm md:text-base"
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "text-gray-800 hover:text-blue-500"
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/novedades"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "text-gray-800 hover:text-blue-500"
            }
          >
            Novedades
          </NavLink>
          <NavLink
            to="/turnos"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "text-gray-800 hover:text-blue-500"
            }
          >
            Turnos
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "text-gray-800 hover:text-blue-500"
            }
          >
            Contactanos
          </NavLink>
        </div>

        {/* User Profile and Notifications (Hidden on small screens, visible on md+) */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-gray-600 hover:text-gray-800">
            <i className="fa fa-bell"></i>
          </button>
          <img
            src="/nosotros1.jpg"
            alt="user"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Mobile Menu (visible only on small screens) */}
      <div className="md:hidden" id="mobile-menu">
        <div className="flex flex-col space-y-4 mt-4 p-4 text-gray-800 bg-gray-50">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "text-gray-800 hover:text-blue-500"
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/novedades"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "text-gray-800 hover:text-blue-500"
            }
          >
            Novedades
          </NavLink>
          <NavLink
            to="/turnos"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "text-gray-800 hover:text-blue-500"
            }
          >
            Turnos
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "text-gray-800 hover:text-blue-500"
            }
          >
            Contactanos
          </NavLink>

          {/* Mobile User Profile */}
          <div className="flex items-center space-x-4 mt-4">
            <button className="text-gray-600 hover:text-gray-800">
              <i className="fa fa-bell"></i>
            </button>
            <img
              src="/nosotros1.jpg"
              alt="user"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
