import { Request, Response, Router } from 'express';
import { GetAllDogsService } from '../services/dog.service';
import { dogRepository  } from '../repositorys/dogs.repository';
const { v4: uuidv4 } = require('uuid');

const dogsRouter = Router();
const getAllDogs = new GetAllDogsService(dogRepository)
const createDogs = new GetAllDogsService (dogRepository)
const updateDog = new GetAllDogsService (dogRepository)
const DeletCatsService = new GetAllDogsService (dogRepository)

const generateId = () => {
  return uuidv4();
};

let dogs = [
  {
    id: '11075db3-d431-4c49-9fb7-0a58873f23ea',
    name: 'pablito',
    age: 2
  },
  {
    id: '622b88ce-d26c-4487-9000-a9289f6fde23',
    name: 'peter',
    age: 4
  },
];


dogsRouter.get('/', (req: Request, res: Response) => {
    const dogs = getAllDogs.getAll();
    res.json(dogs);
  });

dogsRouter.get('/:id', (req, res) => {
  const id =(req.params.id);
  const dogsRepo = getAllDogs.repository.getOne(id);
  console.log(dogsRepo);
  

  if (dogsRepo) {
    res.json(dogsRepo);
  } else {
    res.status(404).end();
  }

});

dogsRouter.post('/', (req,res) => {
  const body = req.body;
 
  if (!body.name || !body.age) {
    return res.status(400).json( { error: 'nombre y edad son necesarios' } );
  }

  const newDog = {
    id: generateId(),
    name: body.name,
    age: body.age,
  };

 const dogRepo = createDogs.repository.createOne(newDog);

  res.json(dogRepo);
});

dogsRouter.put('/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedDogData = req.body

  const update = updateDog.repository.update(id, updatedDogData)
  res.json(updateDog)
});

dogsRouter.delete('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const deleteRepo = DeletCatsService.repository.delete(id);
    // dogs = dogs.filter(dog => dog.id !== id);
  
    res.end(deleteRepo);
  });


export default dogsRouter;