import { catRepository } from "../repositorys/cats.repository"

export class GetAllCatsService {
  repository: typeof catRepository

  constructor(repository: typeof catRepository) {
    this.repository = repository
  }

  getAll() {
    return this.repository.getAll();
  }
}