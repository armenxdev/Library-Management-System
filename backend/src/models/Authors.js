import { DataTypes, Model } from 'sequelize';
import db from '../client/db.sequelize.js';

class Authors extends Model {}

const {
    BIGINT,
    STRING,
    INTEGER,
    TEXT,
}  = DataTypes;

Authors.init(
    {
        id: {
            type: BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        firstName: {
            type: STRING,
            allowNull: false,
        },

        lastName: {
            type: STRING,
            allowNull: false,
        },

        email: {
            type: STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },

        bio: {
            type: TEXT
        },

        birthYear: {
            type: INTEGER
        }
    },
    {
        sequelize: db,
        modelName: 'authors',
        tableName: 'authors',
        timestamps: true,
    }
)

export default Authors;