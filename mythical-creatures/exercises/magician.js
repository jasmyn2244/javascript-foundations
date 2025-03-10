
class Magician {
  constructor(magicianObject,) {
    this.name = `The Great ${magicianObject.name}`
    this.assistant = magicianObject.assistant
    this.favoriteAccessory = magicianObject.clothing || 'top hat'
    this.confidencePercentage = 10
  }

  performIncantation(incantation){
    return incantation.toUpperCase() + "!"
  }

  performTrick(){
    this.confidencePercentage += 10
    if (this.favoriteAccessory === 'top hat') {
      return 'PULL RABBIT FROM TOP HAT'
    } else {
      return 'PULL DOVE FROM SLEEVE'
    }
  }

  performShowStopper() {
    if (this.confidencePercentage < 100 || this.assistant === false) {
      return 'Oh no, this trick is not ready!'
    } else {
       return 'WOW! The magician totally just sawed that person in half!'
    }
  }
}




module.exports = Magician
