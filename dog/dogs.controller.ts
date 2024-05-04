import { CreateDogsSevice } from './services/create.dog.service';
import { dogRepository  } from './repositorys/dogs.repository';
import { DeleteDogsService } from './services/dalete.dog.service';
import { GetAllDogsService } from './services/get-all-dogs.service';
import { GetOneDogsService } from './services/get-one-dogs.servece';
import { Request, Response, Router } from 'express';
import { UpdatedDogService } from './services/ update.dogs.service';
import { v4 as uuidv4 } from 'uuid';

const createDogs = new CreateDogsSevice (dogRepository)
const dogsRouter = Router();
const deletCatsService = new DeleteDogsService (dogRepository)
const getAllDogs = new GetAllDogsService(dogRepository)
const getOne = new GetOneDogsService(dogRepository)
const updateDog = new UpdatedDogService (dogRepository)


const generateId = () => {
  return uuidv4();
};


dogsRouter.get('/', (req: Request, res: Response) => {
  const dogs = getAllDogs.execute();
     res.json(dogs);
  });

dogsRouter.get('/:id', (req, res) => {
  const id =(req.params.id);
  const dogsRepo = getOne.execute(id);
 
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

    const dogRepo = createDogs.execute(newDog);
    res.json(dogRepo);
});

dogsRouter.put('/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedDogData = req.body
  const update = updateDog.execute(id, updatedDogData)
    res.json(update)
});

dogsRouter.delete('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const deleteRepo = deletCatsService.execute(id);
      res.end(deleteRepo);
  });


export default dogsRouter;