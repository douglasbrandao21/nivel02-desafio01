import { Router } from 'express';
import transactionRouter from './transaction';

const routes = Router();

routes.use('/transactions', transactionRouter);

export default routes;
