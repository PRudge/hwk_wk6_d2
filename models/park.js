

const Park = function (name, ticketPrice, collectionOfDinos) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinos = collectionOfDinos;
}

Park.prototype.addDino = function(newDino) {
  this.collectionOfDinos.push(newDino);
};

Park.prototype.removeDinoByName = function(remDino){
  let dino;
  for (i = 0; i < this.collectionOfDinos.length; i++){
    dino = this.collectionOfDinos[i];
    if (dino.name === remDino.name)  {
      this.collectionOfDinos.splice(i, 1);
      break;
    }
  }
};

Park.prototype.mostPopularDino = function() {
  let mostPopDino;
  let mostGuests = 0;
  let dino;
  for (i = 0; i < this.collectionOfDinos.length; i++){
    dino = this.collectionOfDinos[i];
    if (dino.guestsAttractedPerDay > mostGuests){
      mostPopDino = dino;
      mostGuests = dino.guestsAttractedPerDay;
    }
  }
  return mostPopDino;
};

Park.prototype.findDinosBySpecies = function(species){
  let oneSpeciesOfDino = [];
  let dino;

  for (i = 0; i < this.collectionOfDinos.length; i++){
    dino = this.collectionOfDinos[i];

    if (dino.species === species){
      oneSpeciesOfDino.push(dino);
    }
  }
  return oneSpeciesOfDino;
};

Park.prototype.removeDinosBySpecies = function(species){
  const oneSpeciesOfDino = findDinosBySpecies(species);
  let dinoToRemove;
  for (i = 0; i < this.collectionOfDinos.length; i++){
    dino = this.collectionOfDinos[i];
    for (j = 0; j < oneSpeciesOfDino.length; j++){
      dinoToRemove = oneSpeciesOfDino[j];
      if (dinoToRemove.species === dino.species){
        this.collectionOfDinos.splice(i, 1);
      }
    }
  }
};

module.exports = Park;
