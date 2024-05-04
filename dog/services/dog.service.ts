import { dogRepository } from "../repositorys/dogs.repository"

export class GetAllDogsService {
  repository: typeof dogRepository

  constructor(repository: typeof dogRepository){
    this.repository = repository
  }
  
getAll(){
    return this.repository.getAll();
}


}
