class Snowman {
  constructor(details) {
    this.snowballs = details.snowballs;
    this.coal = details.coal;
    this.buttons = details.buttons;
    this.carrots = details.carrots;
    this.magicHat = false;
}

  canWearMagicHat() {
    if (this.coal < 2 || this.buttons < 5 || this.carrots < 1 || this.snowballs < 2) {
    } else {
    this.magicHat = true
    }
  }
}

module.exports = Snowman;
