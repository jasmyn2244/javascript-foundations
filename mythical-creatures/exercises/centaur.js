class Centaur {
  constructor(centaurObject) {
    this.name = centaurObject.name;
    this.breed = centaurObject.type;
    this.cranky = false;
    this.standing = true;
    this.crankyCount = 0;
    this.layingDown = false;
  }

  shootBow() {
    this.crankyCount++;
    if (this.crankyCount > 2 || this.layingDown) {
      this.cranky = true;
      return 'NO!'
    } else {
      return 'Twang!!!';
    }
  }

  run() {
    this.crankyCount++;
    if (this.crankyCount > 2 || this.layingDown) {
      this.cranky = true;
      return 'NO!'
    } else {
      return 'Clop clop clop clop!!!';
    }
  }

  sleep() {
    if (this.standing) {
    return 'NO!'
  } else {
    this.cranky = false;
    this.crankyCount = 0;
    return 'ZZZZ'
  }
  }

  layDown() {
    this.layingDown = true;
    this.standing = false;
  }

  standUp() {
    this.layingDown = false;
    this.standing = true;
  }

  drinkPotion() {
    if (this.standing) {
      this.cranky = false;
      this.crankyCount = 0;
    } else {
      return 'Not while I\'m laying down!'
    }
  }
}



module.exports = Centaur
