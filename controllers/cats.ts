import { Request, Response, Router } from 'express';

const catsRouter = Router();

let cats = [
  {
    id: '11075db3-d431-4c49-9fb7-0a58873f23ea',
    name: 'patito',
    age: 2
  },
  {
    id: '622b88ce-d26c-4487-9000-a9289f6fde23',
    name: 'juanito',
    age: 4
  },
];

catsRouter.get('/', (req: Request, res: Response) => {
  res.send(cats);
});

catsRouter.delete('/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  cats = cats.filter(cat => cat.id !== id);

  res.end('Se Elimino el recurso');
});

catsRouter.put('/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const catIndex = cats.findIndex((cat) => cat.id === id);
  if (catIndex === -1) {
    res.status(404).send('recurso no encontrado');
    return;
  }
  const updatedCat = { ...cats[catIndex], ...req.body };
  cats[catIndex] = updatedCat;
  res.json(updatedCat);
});

export default catsRouter;