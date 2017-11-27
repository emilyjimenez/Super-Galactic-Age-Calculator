export class Age {
  constructor(input) {
    this.age = input;
    this.seconds = input*365*24*60*60;
    this.birthDate = new Date(input);
  }
}

export class Birthdate {
  constructor(bdayInput) {
    this.dob = bdayInput;
    this.dobDate = new Date(bdayInput);
    this.ageSeconds;
    this.age;
  }
}

// Date.UTC()
// Date.now()
// Date.parse()
// Date.prototype.getDate()
// Date.prototype.getDay()
// Date.prototype.getFullYear()
// Date.prototype.getHours()
// Date.prototype.getMilliseconds()
// Date.prototype.getMinutes()
// Date.prototype.getMonth()
// Date.prototype.getSeconds()
// Date.prototype.getTime()
// Date.prototype.getTimezoneOffset()
// Date.prototype.getUTCDate()
// Date.prototype.getUTCDay()
// Date.prototype.getUTCFullYear()
// Date.prototype.getUTCHours()
// Date.prototype.getUTCMilliseconds()
// Date.prototype.getUTCMinutes()
// Date.prototype.getUTCMonth()
// Date.prototype.getUTCSeconds()
// Date.prototype.getYear()
