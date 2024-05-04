import { CatRepository, catRepository } from "../repositorys/cats.repository";

export class DeleteCatsService {
  private readonly repository: CatRepository;

  constructor(repository: CatRepository) {
    this.repository = repository;
  }

  execute(id: string) {
    const cat = catRepository.getOne(id);

    if (!cat) {
      throw new Error('Gato no encontrado');
    };

    this.repository.delete(id);
  }
}