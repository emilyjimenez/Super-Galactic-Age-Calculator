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
    expect(testBD.lifeExpect).not.toEqual(undefined);
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

describe('Birthdate calculate planet years methods', function() {
  it('it will calculate age in mercury ears(calcMercYrs), .24 years of an earth year', function(){
    let bdInput = "Thu Nov 29 1988 00:00:00";
    let testBD = new Birthdate(bdInput);
    let resultSeconds = testBD.calcSeconds();
    let resultYears = testBD.calcYears();
    let resultMercYears = testBD.calcMercYrs();
    expect(resultMercYears).toEqual(120);
  });

  it('it will calculate age in venus years(calcVenusYrs), .62 years of an earth year', function(){
    let bdInput = "Thu Nov 29 1988 00:00:00";
    let testBD = new Birthdate(bdInput);
    let resultSeconds = testBD.calcSeconds();
    let resultYears = testBD.calcYears();
    let resultVenusYears = testBD.calcVenusYrs();
    expect(resultVenusYears).toEqual(46);
  });

  it('it will calculate age in mars years(calcMarsYrs), 1.88 years of an earth year', function(){
    let bdInput = "Thu Nov 29 1988 00:00:00";
    let testBD = new Birthdate(bdInput);
    let resultSeconds = testBD.calcSeconds();
    let resultYears = testBD.calcYears();
    let resultMarsYears = testBD.calcMarsYrs();
    expect(resultMarsYears).toEqual(15);
  });

  it('it will calculate age in jupiter years(calcJupYrs), 11.86 years of an earth year', function(){
    let bdInput = "Thu Nov 29 1988 00:00:00";
    let testBD = new Birthdate(bdInput);
    let resultSeconds = testBD.calcSeconds();
    let resultYears = testBD.calcYears();
    let resultJupiterYears = testBD.calcJupYrs();
    expect(resultJupiterYears).toEqual(2);
  });
});

describe('Birthdate calculate planet life expectancy methods', function() {
  it('it will calculate life remaining (using average life expectancy) in mercury years(calcMercYrs)', function(){
    let bdInput = "Thu Nov 29 1988 00:00:00";
    let testBD = new Birthdate(bdInput);
    let resultMercsYears = testBD.calcMercYrs();
    let mercLifeRemaining = testBD.mercLife();
    expect(mercLifeRemaining).toEqual(210);
  });

  it('it will calculate life remaining (using average life expectancy) in venus years(calcVenusYrs)', function(){
    let bdInput = "Thu Nov 29 1988 00:00:00";
    let testBD = new Birthdate(bdInput);
    let resultVenussYears = testBD.calcVenusYrs();
    let venusLifeRemaining = testBD.venusLife();
    expect(venusLifeRemaining).toEqual(81);
  });

  it('it will calculate life remaining (using average life expectancy) in mars years(calcMarsYrs)', function(){
    let bdInput = "Thu Nov 29 1988 00:00:00";
    let testBD = new Birthdate(bdInput);
    let resultMarssYears = testBD.calcMarsYrs();
    let marsLifeRemaining = testBD.marsLife();
    expect(marsLifeRemaining).toEqual(27);
  });

  it('it will calculate life remaining (using average life expectancy) in jupiter years(calcJupYrs)', function(){
    let bdInput = "Thu Nov 29 1988 00:00:00";
    let testBD = new Birthdate(bdInput);
    let resultJupsYears = testBD.calcJupYrs();
    let jupiterLifeRemaining = testBD.jupiterLife();
    expect(jupiterLifeRemaining).toEqual(4);
  });
});

describe('Birthdate calculate IQ', function() {
  it('it will calculate the IQ of a person and change life expectancy useing IsSmart method', function() {
    let bdInput = "Thu Nov 29 1988 00:00:00";
    let testBD = new Birthdate(bdInput);
    let resultSeconds = testBD.calcSeconds();
    let resultYears = testBD.calcYears();
    let lifeExpectSmart = testBD.isSmart();
    expect(lifeExpectSmart).toEqual(89.3);
  });

  it('it will calculate the IQ of a person and change life expectancy useing IsDumb method', function() {
    let bdInput = "Thu Nov 29 1988 00:00:00";
    let testBD = new Birthdate(bdInput);
    let resultSeconds = testBD.calcSeconds();
    let resultYears = testBD.calcYears();
    let lifeExpectDumb = testBD.isDumb();
    expect(lifeExpectDumb).toEqual(69.3);
  });
});
