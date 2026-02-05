import { DataTypes, Model } from 'sequelize';
import db from '../client/db.sequelize.js';
import Authors from './Authors.js';
import Members from './Members.js';
import Borrowings from './Borrowings.js';

class Books extends Model {}

const { BIGINT, STRING, INTEGER, DECIMAL } = DataTypes;

Books.init(
    {
        id: {
            type: BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },

        title: {
            type: STRING,
            allowNull: false,
        },

        isbn: {
            type: STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [13, 13],
                isNumeric: true
            },
        },

        publishedYear: {
            type: INTEGER,
            validate: {
                min: 1000,
                max: new Date().getFullYear(),
            },
        },

        genre: {
            type: STRING,
        },

        price: {
            type: DECIMAL(10, 2),
        },

        coverImage: {
            type: STRING,
            defaultValue: 'default-cover.jpg',
        },
    },
    {
        sequelize: db,
        modelName: 'books',
        tableName: 'books',
        timestamps: true,
    }
);


export default Books;
