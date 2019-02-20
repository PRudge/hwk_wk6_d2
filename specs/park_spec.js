const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;


  beforeEach(function () {
    const dino1 = new Dinosaur('Tyrannosaurus', 'carnivore', 50);
    const dino2 = new Dinosaur('Spinosaurus', 'carnivore', 20);
    const dino3 = new Dinosaur('Diplodocus', 'herbivore', 50);
    const dino4 = new Dinosaur('Triceratops', 'herbivore', 150);
    const dino5 = new Dinosaur('Ornithomimus', 'herbivore', 50);
    const dino6 = new Dinosaur('Titanosaurus', 'omnivore', 15);
    const dinos = [dino1, dino2, dino3, dino4, dino5, dino6];

    park = new Park('Prehistoric Forest', 25, dinos);

  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Prehistoric Forest');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 25);
  });


  it('should have a collection of dinosaurs', function () {
    const actual = park.collectionOfDinos.length;
    assert.strictEqual(actual, 6);
  });


  it('should be able to add a dinosaur to its collection', function () {
    const newDino = new Dinosaur('Alamosaurus', 'herbivore', 25);
    park.addDino(newDino);
    // const actual = park.collectionOfDinos.length;
    // assert.strictEqual(actual, 7);
    const index = park.collectionOfDinos.length - 1;
    const actDino = park.collectionOfDinos[index];
    const actual = actDino;
    assert.strictEqual(actual,newDino);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    const dinoToGo = new Dinosaur('Diplodocus', 'herbivore', 50);
    park.removeDino(dinoToGo);
    const actual = park.collectionOfDinos.length;
    assert.strictEqual(actual, 5);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function (){
    const expected = 150;
    const mostPopDino = park.mostPopularDino();
    const actual = mostPopDino.guestsAttractedPerDay;
    assert.equal(actual, expected);
  });

  it('should be able to find all dinosaurs of a particular species', function (){
    const species = 'Tyrannosaurus';
    let newDino = new Dinosaur('Tyrannosaurus', 'omnivore', 70);
    park.addDino(newDino);
    newDino = new Dinosaur('Tyrannosaurus', 'omnivore', 13);
    park.addDino(newDino);

    let oneSpeciesOfDino;

    oneSpeciesOfDino = park.findDinosBySpecies(species);

    const actual = oneSpeciesOfDino.length;

    assert.equal(actual, 3);
  });

  it('should be able to remove all dinosaurs of a particular species', function (){
    let species = 'Tyrannosaurus';
    let newDino = new Dinosaur('Tyrannosaurus', 'omnivore', 70);
    park.addDino(newDino);
    newDino = new Dinosaur('Tyrannosaurus', 'omnivore', 13);
    park.addDino(newDino);

    park.removeDinosBySpecies(species);
    const actual = park.collectionOfDinos.length;
    assert.strictEqual(actual, 5);

  });

  it('should be able to calculate the total number of visitors per day', function (){
    actual = park.totalVisitorsPerDay();
    assert.equal(actual, 335);
  });

  it('should be able to calculate the total number of visitors per year', function (){
    actual = park.totalVisitorsPerYear();
    assert.equal(actual, 335*365);
  });

  it('should be able to calculate the total ticket revenue per year', function (){
      actual = park.totalTicketRevForYear();
      assert.equal(actual, 335*365*25);
  });

  it('should be able to create an object for diet requirements', function (){
      const dietType = park.dietTypeCount();
      let actual = dietType.carnivore;
      assert.equal(actual, 2);
      actual = dietType.omnivore;
      assert.equal(actual, 1);
      actual = dietType.herbivore;
      assert.equal(actual, 3);
  });


});
