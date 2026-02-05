import { DataTypes, Model } from 'sequelize';
import db from '../client/db.sequelize.js';

class Borrowings extends Model {}

const { BIGINT, DATE, STRING, NOW } = DataTypes;

Borrowings.init(
    {
        id: {
            type: BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },

        borrowDate: {
            type: DATE,
            allowNull: false,
            defaultValue: NOW,
        },

        returnDate: {
            type: DATE,
            allowNull: true,
        },

        status: {
            type: STRING,
            defaultValue: 'borrowed',
            validate: {
                isIn: [['borrowed', 'returned']],
            },
        },
    },
    {
        sequelize: db,
        modelName: 'borrowings',
        tableName: 'borrowings',
        timestamps: true,
    }
);

export default Borrowings;
