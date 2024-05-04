import { dogRepository } from "../repositorys/dogs.repository";

export class DeleteDogsService {
  repository: typeof dogRepository

  constructor(repository: typeof dogRepository) {
    this.repository = repository
  }

  delete(id: string) {
    const dog = dogRepository.getOne(id);

    if (!dog) {
      throw new Error('perro no encontrado');
    }

    this.repository.delete(id);
  }
}