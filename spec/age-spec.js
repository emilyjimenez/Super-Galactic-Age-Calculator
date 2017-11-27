import { Birthdate } from './../js/age.js';

describe('Birthdate getAge', function() {
  let bdInput;
  let testBD;
  it('it will get the age of user by converting birthdate into seconds and comparing it to the time now in seconds', function(){
    let bdInput = "Thu Nov 29 1988 00:00:00";
    let testBD = new Birthdate(bdInput);
    thisbdDate.getAge();
    expect(testBD.ageSeconds).toEqual(914978012);
    expect(testBD.ageYears).toEqual(29);
  });
});

describe('Birthdate calcSeconds'){
  let bdInput;
  let testBD;
  it('it will calculate age seconds on its own to pass along to other methods', function(){
    let bdInput = "Thu Nov 29 1988 00:00:00";
    let testBD = new Birthdate(thisbdInput);
    testBD.calcSeconds();
    expect(testBD.ageSeconds).toEqual(914978012);
  });
});
