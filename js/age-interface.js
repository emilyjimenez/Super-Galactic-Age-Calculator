import { Birthdate } from "./../js/age.js";

$(document).ready(function() {
  $("#input-age").submit(function(event) {
    event.preventDefault();
    let birthDateInput = $("#date").val();
    let newBirthdate = new Birthdate(birthDateInput);
    let fullAge = newBirthdate.getAge();
    let ageInYears = newBirthdate.ageYears;
    let ageInSeconds = newBirthdate.ageSeconds;
    let lifeRemainingHigh = newBirthdate.lifeRemainingHigh;
    let lifeRemainingLow = newBirthdate.lifeRemainingLow;
    $("#input-age").slideUp();
    $(".results").slideDown();
    $("#birthdate").text(ageInYears + " years old, or " + ageInSeconds + " seconds old.");
    $("#life-expect-high").text("If your IQ is high, you have " + lifeRemainingHigh + " years remaining on Earth");
    $("#life-expect-low").text("If your IQ is low, you have " + lifeRemainingLow + " years remaining on Earth");

    $("#mercury").click(function(){
      let mercuryYrs = newBirthdate.calcMercYrs();
      let mercuryLifeHigh = newBirthdate.mercLifeHigh();
      let mercuryLifeLow = newBirthdate.mercLifeLow();
      $("#mercury-answer").append("<li>♊️ " + mercuryYrs + " years old</li> <li> High Life Expectancy: " + mercuryLifeHigh + "</li><li>Low Life Expectancy: " + mercuryLifeLow + "</li>");
    });

    $("#venus").click(function(){
      let venusYrs = newBirthdate.calcVenusYrs();
      let venusLifeHigh = newBirthdate.venusLifeHigh();
      let venusLifeLow = newBirthdate.venusLifeLow();
      $("#venus-answer").append("<li>♉️ " + venusYrs + " years old</li> <li> High Life Expectancy: " + venusLifeHigh + "</li><li>Low Life Expectancy: " + venusLifeLow + "</li>");
   });

    $("#mars").click(function(){
      let marsYrs = newBirthdate.calcMarsYrs();
      let marsLifeHigh = newBirthdate.marsLifeHigh();
      let marsLifeLow = newBirthdate.marsLifeLow();
      $("#mars-answer").append("<li>♈️ " + marsYrs + " years old</li> <li> High Life Expectancy: " + marsLifeHigh + "</li><li>Low Life Expectancy: " + marsLifeLow + "</li>");
    });

    $("#jupiter").click(function(){
      let jupiterYrs = newBirthdate.calcJupYrs();
      let jupiterLifeHigh = newBirthdate.jupiterLifeHigh();
      let jupiterLifeLow = newBirthdate.jupiterLifeLow();
      $("#jupiter-answer").append("<li>♐️ " + jupiterYrs + " years old</li> <li> High Life Expectancy: " + jupiterLifeHigh + "</li><li>Low Life Expectancy: " + jupiterLifeLow + "</li>");
    });

    $("#reload").click(function() {
    location.reload();
    });
  });
});
