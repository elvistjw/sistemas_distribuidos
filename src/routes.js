import { Router } from 'express';

import UserControlller from './app/controllers/UserController';
import SessionControlller from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/middleware-auth';

const routes = new Router();

routes.post('/users', UserControlller.store);
routes.post('/sessions', SessionControlller.store);

// Tudo que vier depois estará usando o middleware de authMiddleware
routes.use(authMiddleware);

routes.put('/users', UserControlller.update);

export default routes;
