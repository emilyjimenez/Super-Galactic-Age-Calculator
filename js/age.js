export class Birthdate {
  constructor(userInput) {
    this.bdInput = userInput;
    this.bdDate = new Date(userInput);
    this.ageSeconds = 0;
    this.ageYears = 0;
    //US life expectancy average is 79.3, high and low will be 10 year difference
    this.lifeExpect = 79.3;
    this.lifeRemaining;
  }

  getAge(){
    let bdSeconds = this.bdDate.getTime();
    let diffSeconds = Math.floor((1511771612366 - bdSeconds)/1000);
    this.ageSeconds = diffSeconds;
    this.ageYears = Math.floor(diffSeconds/(365*24*60*60));
    this.lifeRemaining = this.lifeExpect - this.ageYears;
  }

  isSmart() {
    return this.lifeExpect+10;
  }

  isDumb() {
    return this.lifeExpect-10;
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

  mercLife() {
    return Math.floor((this.lifeExpect/0.24) - this.calcMercYrs());
  }

  calcVenusYrs(){
    return Math.floor(this.calcYears()/0.62);
  }

  venusLife() {
    return Math.floor((this.lifeExpect/0.62) - this.calcVenusYrs());
  }

  calcMarsYrs(){
      return Math.floor(this.calcYears()/1.88);
  }

  marsLife() {
    return Math.floor((this.lifeExpect/1.88) - this.calcMarsYrs());
  }


  calcJupYrs(){
      return Math.floor(this.calcYears()/11.86);
  }

  jupiterLife() {
    return Math.floor((this.lifeExpect/11.86) - this.calcJupYrs());
  }

}
