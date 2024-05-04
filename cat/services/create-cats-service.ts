import { catRepository } from "../repositorys/cats.repository"

export class CreateCatsService {
  repository: typeof catRepository

  constructor(repository: typeof catRepository) {
    this.repository = repository
  }

  create(cat: any) {
    return this.repository.create(cat);
  }
}