import { Request, Response, Router } from 'express';
const { v4: uuidv4 } = require('uuid');

const catsRouter = Router();

const generateId = () => {
  return uuidv4();
};

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

catsRouter.get('/:id', (req, res) => {
  const id =(req.params.id);
  const cat = cats.find((cat) => cat.id === id);

  if (cat) {
    res.json(cat);
  } else {
    res.status(404).end();
  }

});

catsRouter.post('/', (req,res) => {
  const body = req.body;

  if (!body.name || !body.age) {
    return res.status(400).json( { error: 'nombre y edad son necesarios' } );
  }

  const newCat = {
    id: generateId(),
    name: body.name,
    age: body.age,
  };

  cats = cats.concat(newCat);
  res.json(newCat);
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

catsRouter.delete('/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  cats = cats.filter(cat => cat.id !== id);

  res.end('Se Elimino el recurso');
});


export default catsRouter;