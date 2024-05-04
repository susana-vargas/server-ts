import { catRepository } from "../repositorys/cats.repository"

export class UpdateCatsService {
  repository: typeof catRepository

  constructor(repository: typeof catRepository) {
    this.repository = repository
  }

  update(id: string, updateCat: any) {
    const cat = catRepository.getOne(id);

    if (!cat) {
      throw new Error('Gato no encontrado');
    }

    const updatedCat = { ...cat, ...updateCat };
    catRepository.update(id, updatedCat);
    
    return updatedCat;
  }
}