import express, { Express, Request, Response } from 'express';

import catsRouter from './cat/cats';
import dogsRouter from './dog/controllers/dogs';


const app: Express = express();
const PORT: number = 3000;

// app.get('/', (req: Request, res: Response) => {
//   res.send('¡Hola, mundo!');
// });
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  res.send('¡Hola, mundo!');
});

app.use('/cats', catsRouter);
app.use('/dogs', dogsRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
