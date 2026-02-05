import { DataTypes, Model } from 'sequelize';
import db from '../client/db.sequelize.js';
import Borrowings from "./Borrowings.js";
import Books from "./Books.js";


class Members extends Model {}

const { BIGINT, STRING, DATE, NOW } = DataTypes;

Members.init(
    {
        id: {
            type: BIGINT,
            primaryKey: true,
            allowNull: false,
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

        phoneNumber: {
            type: STRING,
        },

        membershipType: {
            type: STRING,
            defaultValue: 'standard',
        },

        joinedDate: {
            type: DATE,
            defaultValue: NOW,
        },
    },
    {
        sequelize: db,
        modelName: 'members',
        tableName: 'members',
        timestamps: true,
    }
);


export default Members;
