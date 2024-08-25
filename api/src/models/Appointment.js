import { DataTypes } from "sequelize";

export default function (sequelize) {
  const Appointment = sequelize.define(
    "Appointment",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      patientId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        },
      },
      doctorId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        },
      },
      appointmentDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("scheduled", "completed", "canceled"),
        defaultValue: "scheduled",
        allowNull: false,
      },
      notes: {
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    }
  );

  return Appointment;
}
