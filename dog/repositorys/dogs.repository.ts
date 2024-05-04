import { UpdatedDogService } from "../services/ update.dogs.service";

class DogRepository {
    dogs = [{
      id: '17368934-4ff5-4efb-94b1-7a19576bc793',
      name: 'apolo',
      age: 3
    }, {
      id: '1899ecff-5265-4a58-9b9d-6caa97064fda',
      name: 'milo',
      age: 2
    }, {
      id: '5c8866e4-287b-497d-93a6-68caf3fdf832',
      name: 'adonis',
      age: 1
    }]
  
    getAll() {
      return this.dogs
    }

    getOne(id: string){ 
     const dog = this.dogs.find((dog) => dog.id === id)
     return dog
    }

    createOne(dog: any) {
        this.dogs.push(dog);
        return dog;
    }

    update(id: string, update: any){
        const dogIndx = this.dogs.findIndex((dog) => dog.id === id)

        if(dogIndx === -1){
            throw new Error ('perro no encontrado')
        }
         
        this.dogs[dogIndx] = update;
        return update

    }

    delete(id: string) {
        const dogIndx= this.dogs.findIndex((dog) => dog.id === id);
    
        if (dogIndx === -1) {
          throw new Error('perro no encontrado en el repositorio');
        }
    
        this.dogs.splice(dogIndx, 1);
        return 'Se elimino el recurso';
      }
    
}
  export const dogRepository = new DogRepository();
