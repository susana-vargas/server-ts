class CatRepository {
  cats = [{
    id: 'b432dca9-e364-4184-94a7-8f0016c902be',
    name: 'Fluffy',
    age: 3,
    breed: 'Siamese',
    color: 'White'
  }, {
    id: '71803e14-cc6b-4ac9-b9f1-f9e18ca43c39',
    name: 'Mittens',
    age: 2,
    breed: 'Tabby',
    color: 'Orange'
  }, {
    id: 'df2688ad-c887-4fa4-81fd-a0eba1c7be9a',
    name: 'Socks',
    age: 1,
    breed: 'Calico',
    color: 'Black and White'
  }]

  getAll() {
    return this.cats;
  }

  getOne(id: string) {
    const cat = this.cats.find((cat) => cat.id === id);
    return cat;
  }

  create(cat: any) {
   this.cats.push(cat);
   return 'Se creo un recurso';
  }

  update(id: string, updateCat: any) {
    const catIndex = this.cats.findIndex((cat) => cat.id === id);

    if (catIndex === -1) {
      throw new Error('Gato no encontrado en el repositorio');
    }

    this.cats[catIndex] = updateCat;
    return updateCat;
  }

  delete(id: string) {
    const catIndex = this.cats.findIndex((cat) => cat.id === id);

    if (catIndex === -1) {
      throw new Error('Gato no encontrado en el repositorio');
    }

    this.cats.splice(catIndex, 1);
    return 'Se Elimino el recurso';

  }
}

export const catRepository = new CatRepository();