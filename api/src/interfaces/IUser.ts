
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../configs/database';

interface UserAttributes {
    id: number;
    name: string;
    email: string;
    age: number;
  }
  
  
  interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}
  
  
  class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public name!: string;
    public email!: string;
    public age!: number;
  }