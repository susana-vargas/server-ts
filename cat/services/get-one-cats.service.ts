import { catRepository } from "../repositorys/cats.repository"

export class GetOneCatsService {
  repository: typeof catRepository

  constructor(repository: typeof catRepository) {
    this.repository = repository
  }

  getOne(id: string) {
    return this.repository.getOne(id);
  }
}