import { Birthdate } from './../js/age.js';

describe('Birthdate constructor', function() {
  it('it will make a birthdate with userInput, formatted date, age in seconds, and age in years properties', function(){
    let bdInput = "Thu Nov 29 1988 00:00:00";
    let testBD = new Birthdate(bdInput);
    testBD.getAge();
    expect(testBD.bdInput).not.toEqual(undefined);
    expect(testBD.bdDate).not.toEqual(undefined);
    expect(testBD.ageSeconds).not.toEqual(undefined);
    expect(testBD.ageYears).not.toEqual(undefined);
  });
});

describe('Birthdate getAge', function() {
  it('it will get the age of user by converting birthdate into seconds and comparing it to the time now in seconds', function(){
    let bdInput = "Thu Nov 29 1988 00:00:00";
    let testBD = new Birthdate(bdInput);
    testBD.getAge();
    expect(testBD.ageSeconds).toEqual(914978012);
    expect(testBD.ageYears).toEqual(29);
  });
});

describe('Birthdate calcSeconds', function() {
  it('it will calculate age seconds on its own to pass along to other methods', function(){
    let bdInput = "Thu Nov 29 1988 00:00:00";
    let testBD = new Birthdate(bdInput);
    let resultSeconds = testBD.calcSeconds();
    expect(resultSeconds).toEqual(914978012);
    });
  });

describe('Birthdate calcYears', function() {
  it('it will calculate age in years on its own to pass along to other methods relating to planet age', function(){
    let bdInput = "Thu Nov 29 1988 00:00:00";
    let testBD = new Birthdate(bdInput);
    let resultSeconds = testBD.calcSeconds();
    let resultYears = testBD.calcYears();
    expect(resultYears).toEqual(29);
  });
});

describe('Birthdate calcMercYrs', function() {
  it('it will calculate age in mercury ears, .24 years of an earth year', function(){
    let bdInput = "Thu Nov 29 1988 00:00:00";
    let testBD = new Birthdate(bdInput);
    let resultSeconds = testBD.calcSeconds();
    let resultYears = testBD.calcYears();
    let resultMercYears = testBD.calcMercYrs();
    console.log("mercYrs: " + resultMercYears);
    expect(resultMercYears).toEqual(120);
  });
});

describe('Birthdate calcVenusYrs', function() {
  it('it will calculate age in venus years, .62 years of an earth year', function(){
    let bdInput = "Thu Nov 29 1988 00:00:00";
    let testBD = new Birthdate(bdInput);
    let resultSeconds = testBD.calcSeconds();
    let resultYears = testBD.calcYears();
    let resultVenusYears = testBD.calcVenusYrs();
    expect(resultVenusYears).toEqual(46);
  });
});

describe('Birthdate calcMarsYrs', function() {
  it('it will calculate age in mars years, 1.88 years of an earth year', function(){
    let bdInput = "Thu Nov 29 1988 00:00:00";
    let testBD = new Birthdate(bdInput);
    let resultSeconds = testBD.calcSeconds();
    let resultYears = testBD.calcYears();
    let resultMarsYears = testBD.calcMarsYrs();
    expect(resultMarsYears).toEqual(15);
  });
});

describe('Birthdate calcJupiterYrs', function() {
  it('it will calculate age in jupiter years, 11.86 years of an earth year', function(){
    let bdInput = "Thu Nov 29 1988 00:00:00";
    let testBD = new Birthdate(bdInput);
    let resultSeconds = testBD.calcSeconds();
    let resultYears = testBD.calcYears();
    let resultJupiterYears = testBD.calcJupYrs();
    expect(resultJupiterYears).toEqual(2);
  });
});
