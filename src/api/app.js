import express from 'express';
import BodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import AuthRoutes from './v1/routes/Auth'

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended:true }));
app.use('/api/v1/auth/',AuthRoutes);

module.exports = app;