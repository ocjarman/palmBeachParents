import express, {Express, Request, Response } from 'express';
import path from 'path';
import morgan from 'morgan';
const app: Express = express();

// Set up middleware
app.use(morgan('tiny'));
app.use(express.json());

// Set up routes
app.use('/api', require('./api'));

// Pass back everything else / front-end
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/static', express.static(path.join(__dirname, '../static')));
app.get('/', (req: Request, res: Response) => res.sendFile(path.join(__dirname, '../static/index.html')));

export default app;
