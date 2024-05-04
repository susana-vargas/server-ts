import { dogRepository } from "../repositorys/dogs.repository";

export class UpdatedDogService{
    repository: typeof dogRepository

    constructor(repository: typeof dogRepository){
        this.repository = repository
    }
    
    update(id: string, updateDog: any){
        const dog = dogRepository.getOne(id)

        if(!dog){
            throw new Error('perro no encontrado');
        }
        const updatedDog = {...dog, ...updateDog}
        dogRepository.update(id, updateDog)
        return updatedDog
    }
}