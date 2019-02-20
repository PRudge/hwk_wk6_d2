

const Park = function (name, ticketPrice, collectionOfDinos) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinos = collectionOfDinos;
}

Park.prototype.addDino = function(newDino) {
  this.collectionOfDinos.push(newDino);
};

Park.prototype.removeDino = function(remDino){
  let dino;
  for (i = 0; i < this.collectionOfDinos.length; i++){
    dino = this.collectionOfDinos[i];
    if (dino.species === remDino.species)  {
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
  let dino;
  let oneSpeciesOfDino = [];

  for (i = 0; i < this.collectionOfDinos.length; i++){
    dino = this.collectionOfDinos[i];
    if (dino.species === species){
      oneSpeciesOfDino.push(dino);
    }
  }
  return oneSpeciesOfDino;
};

Park.prototype.removeDinosBySpecies = function(species){
  const dinosOfOneSpecies = this.findDinosBySpecies(species);

  let dino;
  let dinoToGo;

  for (i = 0; i < this.collectionOfDinos.length; i++){
    dino = this.collectionOfDinos[i];
    for (j = 0; j < dinosOfOneSpecies.length; j++){
      dinoToGo = dinosOfOneSpecies[j];
      if (dino.species === dinoToGo.species){
        this.removeDino(dino);
        j = dinosOfOneSpecies.length;
        i = 0;
      }
    }
  }
};

Park.prototype.totalVisitorsPerDay = function(){
  numVisitors = 0;
  let dino;
  for (i = 0; i < this.collectionOfDinos.length; i++){
    dino = this.collectionOfDinos[i];
    numVisitors += dino.guestsAttractedPerDay;
  }
return numVisitors;
};

Park.prototype.totalVisitorsPerYear = function(){
  return this.totalVisitorsPerDay() * 365;
};

Park.prototype.totalTicketRevForYear = function(){
  return this.totalVisitorsPerYear() * this.ticketPrice;
};

Park.prototype.dietTypeCount = function(){
  let carnCount = 0;
  let herbCount = 0;
  let omniCount = 0;
  let dino;
  let dietType = {};

  for (i = 0; i < this.collectionOfDinos.length; i++){
    dino = this.collectionOfDinos[i];

    switch (dino.diet) {
      case 'herbivore': herbCount += 1;
           break;
      case 'omnivore': omniCount += 1;
           break;
      case 'carnivore': carnCount += 1;
           break;
    }
  }

  return dietType = {
  carnivore: carnCount,
  herbivore: herbCount,
  omnivore: omniCount}

};

module.exports = Park;
