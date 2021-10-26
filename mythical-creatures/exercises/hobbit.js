class Hobbit {
  constructor(nameObject, age = 0) {
    this.name = nameObject.name
    this.age = age
    this.adult = false
    this.old = false
    this.hasRing = false
  }

  celebrateBirthday() {
    this.age++
    if (this.age >= 33) {
      this.adult = true
    }
    if (this.age >= 101) {
      this.old = true
    }
  }

  getRing() {
    if (this.name === 'Frodo') {
    this.hasRing = true
    return 'Here is the ring!'
  } else {
    return 'You can\'t have it!'
  }
  }
}


// These two work as well:
//
// class Hobbit {
//   constructor(name = this) {
//     return name
//   }
// }
//
// class Hobbit {
//   constructor(name) {
//     return name
//   }
// }
//
//
// class Hobbit {
//   constructor(name = {}) {
//     return name
//   }
// }

//why does the return have to be in the constructor?







module.exports = Hobbit
