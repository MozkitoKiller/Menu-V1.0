import express from 'express'
import bodyParser from 'body-parser';
import productRouter from './routes/productsRoutes.js';

const app = express()

app.use(bodyParser.json());
app.use('/products', productRouter)

export default app