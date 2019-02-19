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
    const dino5 = new Dinosaur('Ornithomimus', 'omnivore', 50);
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
    park.removeDinoByName(dinoToGo);
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
    let oneSpeciesOfDino;

    oneSpeciesOfDino = park.findDinosBySpecies(species);

    const actual = oneSpeciesOfDino.species;

    assert.equal(actual, species);
  });

  it('should be able to remove all dinosaurs of a particular species', function (){
    let species = 'Tyrannosaurus';

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


});
