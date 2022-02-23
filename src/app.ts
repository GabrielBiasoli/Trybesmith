import express from 'express';
import * as UserController from './controllers/userController';
import joiError from './controllers/middlewares/joiError';
import domainError from './controllers/middlewares/domainError';
import serverError from './controllers/middlewares/serverError';
import generateToken from './controllers/middlewares/generateToken';
import * as ProductController from './controllers/productController';
import authenticateToken from './controllers/middlewares/authenticateToken';

const app = express();

app.use(express.json());

app.post('/users', UserController.create, generateToken);
app.post('/login', UserController.login, generateToken);
app.post('/products', authenticateToken, ProductController.create);
app.get('/products', authenticateToken, ProductController.getAll);

app.use(joiError);
app.use(domainError);
app.use(serverError);

export default app;
