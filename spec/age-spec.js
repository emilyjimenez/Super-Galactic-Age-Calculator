import { Age, Birthdate } from './../js/age.js';

describe('Age', function(){
  let thisAge;

  it('it will make an age object and take in the age property', function(){
    thisAge = new Age(17);
    expect(thisAge.age).toEqual(17);
  });

  it('it will make the age object and take in the age in seconds property', function() {
    thisAge = new Age(17);
    expect(thisAge.seconds).toEqual(536112000);
  });
});

describe('Birthdate', function() {
  let thisdob;
  let thisdobDate;
});
