import { Birthdate } from "./../js/age.js";

$(document).ready(function() {
  $("#input-age").submit(function(event) {
    event.preventDefault();
     let birthDateInput = $("#date").val();
     let newBirthdate = new Birthdate(birthDateInput);
     let fullAge = newBirthdate.getAge();
     let ageInYears = newBirthdate.ageYears;
     $(".results").show();
     $("#birthdate").text(ageInYears + " years old");
   });
});
