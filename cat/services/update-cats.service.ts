import { CatRepository, catRepository } from "../repositorys/cats.repository";

export class UpdateCatsService {
  private readonly repository: CatRepository;

  constructor(repository: CatRepository) {
    this.repository = repository;
  }

  execute(id: string, updateCat: any) {
    const cat = this.repository.getOne(id);

    if (!cat) {
      throw new Error('Gato no encontrado');
    };

    const updatedCat = { ...cat, ...updateCat };
    catRepository.update(id, updatedCat);
    
    return updatedCat;
  }
}