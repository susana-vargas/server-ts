import { CatRepository } from "../repositorys/cats.repository";

export class GetOneCatsService {
  private readonly repository: CatRepository;

  constructor(repository: CatRepository) {
    this.repository = repository;
  }

  execute(id: string) {
    return this.repository.getOne(id);
  }
}