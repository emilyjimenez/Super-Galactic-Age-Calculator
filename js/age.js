export class Birthdate {
  constructor(userInput) {
    this.bdInput = userInput;
    this.bdDate = new Date(userInput);
    this.ageSeconds;
    this.ageYears;
    //US life expectancy average is 79.3, high and low will be 10 year difference
    this.lifeExpectHigh = 89
    this.lifeExpectLow = 69
    this.lifeRemainingHigh;
    this.lifeRemainingLow;
  }

getAge(){
  let bdSeconds = this.bdDate.getTime();
  let diffSeconds = Math.floor((1511771612366 - bdSeconds)/1000);
  this.ageSeconds = diffSeconds;
  this.ageYears = Math.floor(diffSeconds/(365*24*60*60));
  this.lifeRemainingHigh = this.lifeExpectHigh - this.ageYears;
  this.lifeRemainingLow = this.lifeExpectLow - this.ageYears;
}

calcSeconds() {
  let bdSeconds = this.bdDate.getTime();
  return Math.floor((1511771612366 - bdSeconds)/1000);
}

calcYears() {
  return Math.floor(this.calcSeconds()/(365*24*60*60));
}

calcMercYrs(){
  return Math.floor(this.calcYears()/0.24);
}

mercLifeHigh() {
  return Math.floor((this.lifeExpectHigh/.24) - this.calcMercYrs());
}

mercLifeLow() {
  return Math.floor((this.lifeExpectLow/.24) - this.calcMercYrs());
}

calcVenusYrs(){
  return Math.floor(this.calcYears()/0.62);
}

venusLifeHigh() {
  return Math.floor((this.lifeExpectHigh/.62) - this.calcVenusYrs());
}

venusLifeLow() {
  return Math.floor((this.lifeExpectLow/.62) - this.calcVenusYrs());
}

calcMarsYrs(){
    return Math.floor(this.calcYears()/1.88);
}

marsLifeHigh() {
  return Math.floor((this.lifeExpectHigh/1.88) - this.calcMarsYrs());
}

marsLifeLow() {
  return Math.floor((this.lifeExpectLow/1.88) - this.calcMarsYrs());
}

calcJupYrs(){
    return Math.floor(this.calcYears()/11.86);
}

jupiterLifeHigh() {
  return Math.floor((this.lifeExpectHigh/11.86) - this.calcJupYrs());
}

jupiterLifeLow() {
  return Math.floor((this.lifeExpectLow/11.86) - this.calcJupYrs());
}

}
