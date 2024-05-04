import { dogRepository, DogRepository } from "../repositorys/dogs.repository";

export class UpdatedDogService{
    private readonly repository: DogRepository;

    constructor(repository: DogRepository){
      this.repository = repository;
    }
    
    execute(id: string, updateDog: any){
      const dog = this.repository.getOne(id);

      if(!dog){
        throw new Error('perro no encontrado');
      };

      const updatedDog = {...dog, ...updateDog}
      dogRepository.update(id, updateDog)
      return updatedDog;
    }
}