var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.snowman = {};
    this.name = name;
    this.wantsToBuildASnowman = true
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    }
  }

  gatherMaterials(material, quantity) {
    this.materials[material] += quantity
  }

  buildASnowman() {
    var details = {
      snowballs: this.materials.snowballs,
      coal: this.materials.coal,
      buttons: this.materials.buttons,
      carrots: this.materials.carrots,
    }
    this.snowman = new Snowman(details);
    return this.snowman;
}

  placeMagicHat() {
    if (this.snowman.magicHat) {
      return 'Woah, this snowman is coming to life!';
    }
    return 'I guess I didn\'t build it correctly.'
  }
}

module.exports = Human;
