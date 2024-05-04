import { CatRepository } from "../repositorys/cats.repository";
export class CreateCatsService {
  private readonly repository: CatRepository;

  constructor(repository: CatRepository) {
    this.repository = repository;
  }

  execute(cat: any) {
    return this.repository.create(cat);
  }
}