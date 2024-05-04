import { Request, Response, Router } from 'express';
const { v4: uuidv4 } = require('uuid');

import { catRepository } from './repositorys/cats.repository';
import { CreateCatsService } from './services/create-cats-service';
import { DeleteCatsService } from './services/delete-cats.service';
import { GetAllCatsService } from './services/get-all-cats.service';
import { GetOneCatsService } from './services/get-one-cats.service';
import { UpdateCatsService } from './services/update-cats.service';

const catsRouter = Router();
const createCats = new CreateCatsService(catRepository);
const deleteCatsService = new DeleteCatsService(catRepository)
const getAllCats = new GetAllCatsService(catRepository);
const getOneCats = new GetOneCatsService(catRepository);
const updatedCatRepo = new UpdateCatsService(catRepository);

const generateId = () => {
  return uuidv4();
};

catsRouter.get('/', (req: Request, res: Response) => {
  const cats = getAllCats.repository.getAll();
  res.json(cats);
});

catsRouter.get('/:id', (req, res) => {
  const id =(req.params.id);
  const catsRepo = getOneCats.repository.getOne(id);
  console.log(catsRepo);

  if (catsRepo) {
    res.json(catsRepo);
  } else {
    res.status(404).end();
  }

});

catsRouter.post('/', (req,res) => {
  const body = req.body;

  if (!body.name || !body.age || !body.breed || !body.color) {
    return res.status(400).json( { error: 'faltan recursos' } );
  }

  const newCat = {
    id: generateId(),
    name: body.name,
    age: body.age,
    breed: body.breed,
    color: body.color,
  };

  const catRepo = createCats.repository.create(newCat);
  console.log(catRepo, 'repo');

  res.json(catRepo);
});

catsRouter.put('/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedCatData = req.body;

  const updateCat = updatedCatRepo.repository.update(id, updatedCatData);

  res.json(updateCat);
});

catsRouter.delete('/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const deleteRepo = deleteCatsService.repository.delete(id);

  res.end(deleteRepo);
});

export default catsRouter;