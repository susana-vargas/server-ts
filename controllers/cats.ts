import { Request, Response, Router } from 'express';

const catsRouter = Router();

catsRouter.get('/', (req: Request, res: Response) => {
  res.send('¡Hola desde el controlador!');
});

export default catsRouter;