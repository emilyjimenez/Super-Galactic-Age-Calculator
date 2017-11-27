export class Birthdate {
  constructor(userInput) {
    this.bdInput = userInput;
    this.bdDate = new Date(userInput);
    this.ageSeconds;
    this.ageYears;
  }

getAge(){
  let bdSeconds = this.bdDate.getTime();
  let diffSeconds = Math.floor((1511771612366 - bdSeconds)/1000);
  this.ageSeconds = diffSeconds;
  this.ageYears = Math.floor(diffSeconds/(365*24*60*60));
}

calcSeconds() {
  let bdSeconds = this.bdDate.getTime();
  return Math.floor((1511771612366 - bdSeconds)/1000);
}

calcYears() {
  return Math.floor(this.calcSeconds()/(365*24*60*60));
}

calcMercYrs(){
  return this.calcYears()/0.24;
}

calcVenusYrs(){
  return this.calcYears()/0.62;
}

calcMarsYrs(){
    return this.calcYears()/1.88;
}

calcJupYrs(){
    return this.calcYears()/11.86;
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
