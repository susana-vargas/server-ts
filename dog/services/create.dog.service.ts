import { DogRepository } from "../repositorys/dogs.repository";

export class CreateDogsSevice{
  private readonly  repository: DogRepository;

  constructor(repository: DogRepository){
    this.repository = repository;
  }

  execute(dog: any){
    return this.repository.createOne(dog);
  }
}