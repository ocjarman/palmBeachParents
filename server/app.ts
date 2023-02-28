import express, {Express, Request, Response } from 'express';
import path from 'path';
import morgan from 'morgan';
import cors from 'cors';
import apiRouter from './api';

const app: Express = express();


// static middleware
// app.use(express.static(path.join(__dirname, '..', 'public')));
// app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan('tiny'));

// Set up routes
app.use('/api', apiRouter);

// Pass back everything else / front-end
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/static', express.static(path.join(__dirname, '../static')));
app.get('/', (req: Request, res: Response) => res.sendFile(path.join(__dirname, '../static/index.html')));

export default app;
