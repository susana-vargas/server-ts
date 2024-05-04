import {DogRepository } from "../repositorys/dogs.repository"

export class GetAllDogsService {
  private readonly repository: DogRepository

   constructor(repository: DogRepository){
    this.repository = repository
  }
  
   execute(){
    return this.repository.getAll();
}


}
