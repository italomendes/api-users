import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import routes from '@shared/http/routes';
import middleware from './errors/middleware';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(middleware);

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
