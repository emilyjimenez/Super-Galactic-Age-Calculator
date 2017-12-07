import { Birthdate } from "./../js/age.js";

$(document).ready(function() {
  $("#input-age").submit(function(event) {
    event.preventDefault();
    let birthDateInput = $("#date").val();
    let newBirthdate = new Birthdate(birthDateInput);
    let selectedIQ = $("input:radio[name=iq]:checked").val();
    if (selectedIQ === "high") {
      newBirthdate.lifeExpect = newBirthdate.isSmart();
    } else if (selectedIQ === "low") {
      newBirthdate.lifeExpect = newBirthdate.isDumb();
    }
    let fullAge = newBirthdate.getAge();
    let ageInYears = newBirthdate.ageYears;
    let ageInSeconds = newBirthdate.ageSeconds;
    let lifeRemaining = newBirthdate.lifeRemaining;

    $("#input-age").slideUp();
    $(".results").slideDown();
    $("#birthdate").text(ageInYears + " years old, or " + ageInSeconds + " seconds old.");
    $("#life-expect").text("If your IQ is " + selectedIQ + ", you have " + lifeRemaining + " years remaining on Earth");

    $("#mercury").click(function(){
      let mercuryYrs = newBirthdate.calcMercYrs();
      let mercuryLife = newBirthdate.mercLife();
      $("#mercury-answer").append("<li>♊️ " + mercuryYrs + " years old</li> <li> Life Expectancy: " + mercuryLife + "</li>");
    });

    $("#venus").click(function(){
      let venusYrs = newBirthdate.calcVenusYrs();
      let venusLife = newBirthdate.venusLife();
      $("#venus-answer").append("<li>♉️ " + venusYrs + " years old</li> <li> Life Expectancy: " + venusLife + "</li>");
   });

    $("#mars").click(function(){
      let marsYrs = newBirthdate.calcMarsYrs();
      let marsLife = newBirthdate.marsLife();
      $("#mars-answer").append("<li>♈️ " + marsYrs + " years old</li> <li>Life Expectancy: " + marsLife + "</li>");
    });

    $("#jupiter").click(function(){
      let jupiterYrs = newBirthdate.calcJupYrs();
      let jupiterLife = newBirthdate.jupiterLife();
      $("#jupiter-answer").append("<li>♐️ " + jupiterYrs + " years old</li> <li>Life Expectancy: " + jupiterLife + "</li>");
    });

    $("#reload").click(function() {
    location.reload();
    });

  });
});
