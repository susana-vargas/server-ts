import { dogRepository} from "../repositorys/dogs.repository";

export class CreateDogsSevice{
    repository: typeof dogRepository

    constructor(repository: typeof dogRepository){
        this.repository = repository
    }

    create(dog: any){
        return this.repository.createOne(dog)
    }
}