import { Router } from 'express';

import UserControlller from './app/controllers/UserController';
import SessionControlller from './app/controllers/SessionController';
import UserProfileContoller from './app/controllers/UserProfileContoller';
import ProductController from './app/controllers/ProductController';
import ProviderController from './app/controllers/ProviderController';

import authMiddleware from './app/middlewares/middleware-auth';

const routes = new Router();

routes.post('/users', UserControlller.store);
routes.post('/sessions', SessionControlller.store);

// Tudo que vier depois estará usando o middleware de authMiddleware
routes.use(authMiddleware);

routes.put('/users', UserControlller.update);
routes.put('/userProfile', UserProfileContoller.update);
routes.post('/userProfile', UserProfileContoller.store);
routes.post('/product', ProductController.store);
routes.put('/product', ProductController.update);
routes.post('/provider', ProviderController.store);
routes.put('/provider', ProviderController.update);

export default routes;
