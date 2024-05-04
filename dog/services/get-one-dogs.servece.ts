import { DogRepository } from "../repositorys/dogs.repository";

export class GetOneDogsService {
  private readonly repository: DogRepository;

  constructor(repository: DogRepository) {
    this.repository = repository;
  }
  
  execute(id: string){
    return this.repository.getOne(id);
  }

}