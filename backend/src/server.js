import express from 'express';
import 'dotenv/config';
import sequelize from './client/db.sequelize.js';
import './models/index.js'

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;


try {
    await sequelize.authenticate();
    console.log('✅ Database connected');

    await sequelize.sync({ alter: true });
    console.log('✅ Tables synced');
} catch (err) {
    console.error('❌ Database error:', err);
    process.exit(1);
}
app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
});
