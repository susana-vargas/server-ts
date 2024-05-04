import {DogRepository } from "../repositorys/dogs.repository";

export class DeleteDogsService {
  private readonly repository: DogRepository;

  constructor(repository: DogRepository) {
    this.repository = repository;
  }

  execute(id: string) {
    const dog =this.repository.getOne(id);

    if (!dog) {
      throw new Error('perro no encontrado');
    };

    this.repository.delete(id);
  }
}