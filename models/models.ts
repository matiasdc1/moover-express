import { db } from '../db/db'
import { DataTypes } from 'sequelize'

const Driver = db.define(
  'driver',
  {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      },
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    // sequelize,
    modelName: 'driver',
    tableName: 'drivers',
  }
)

const Order = db.define(
  'order',
  {
    id: {
      allowNull: false,
      type: DataTypes.STRING,
      primaryKey: true,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dirPick: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dirDel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateStarted: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateExpected: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateFinished: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    // sequelize,
    modelName: 'order',
    tableName: 'orders',
  }
)

Order.belongsTo(Driver, { foreignKey: 'driverId', targetKey: 'id' })

export { Driver, Order }
