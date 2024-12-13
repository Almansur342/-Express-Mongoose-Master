import express, { Application } from 'express';
import cors from 'cors';
import globalErrorhandler from './app/middlewares/globalErrorhandler';
import router from './app/routes';
import notFound from './app/middlewares/notFound';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// aplication routes
app.use('/api/v1', router);

app.use(globalErrorhandler);

app.use(notFound);

export default app;
