import { catRepository } from "../repositorys/cats.repository"

export class DeleteCatsService {
  repository: typeof catRepository

  constructor(repository: typeof catRepository) {
    this.repository = repository
  }

  delete(id: string) {
    const cat = catRepository.getOne(id);

    if (!cat) {
      throw new Error('Gato no encontrado');
    }

    this.repository.delete(id);
  }
}