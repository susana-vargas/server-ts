import { CatRepository } from "../repositorys/cats.repository"

export class GetAllCatsService {
  private readonly repository: CatRepository;

  constructor(repository: CatRepository) {
    this.repository = repository;
  }

  execute() {
    return this.repository.getAll();
  }
}