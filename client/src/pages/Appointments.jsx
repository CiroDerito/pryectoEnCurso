import React, { useState } from "react";

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: "Juan Pérez",
      date: "2024-08-30",
      time: "10:00 AM",
      doctor: "Dr. Martínez",
    },
    {
      id: 2,
      patientName: "María López",
      date: "2024-09-01",
      time: "2:00 PM",
      doctor: "Dra. Ramírez",
    },
    {
      id: 3,
      patientName: "Carlos Gómez",
      date: "2024-09-05",
      time: "9:30 AM",
      doctor: "Dr. Torres",
    },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-green-600 mb-6">
        Citas Médicas
      </h2>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-4 text-gray-800">Paciente</th>
            <th className="p-4 text-gray-800">Fecha</th>
            <th className="p-4 text-gray-800">Hora</th>
            <th className="p-4 text-gray-800">Doctor</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id} className="border-t border-gray-200">
              <td className="p-4">{appointment.patientName}</td>
              <td className="p-4">{appointment.date}</td>
              <td className="p-4">{appointment.time}</td>
              <td className="p-4">{appointment.doctor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsPage;
