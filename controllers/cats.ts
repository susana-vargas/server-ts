import { Request, Response, Router } from 'express';

const { v4: uuidv4 } = require('uuid');

const catsRouter = Router();


let cats = [{
    id: '429d75f6-5c54-4338-87ce-6ae6b7d50c0e',
    name: 'pablito',
    age: 3
}]

const generateId = () => {
    return uuidv4();
  };

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




export default catsRouter;