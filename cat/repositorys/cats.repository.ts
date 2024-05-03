export class CatRepository {
  cats = [{
    name: 'Fluffy',
    age: 3,
    breed: 'Siamese',
    color: 'White'
  }, {
    name: 'Mittens',
    age: 2,
    breed: 'Tabby',
    color: 'Orange'
  }, {
    name: 'Socks',
    age: 1,
    breed: 'Calico',
    color: 'Black and White'
  }]

  getAll() {
    return this.cats
  }
}