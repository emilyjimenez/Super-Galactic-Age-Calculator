import { Age } from "./../js/age.js";

$(document).ready(function() {
  $("#input-age").submit(function(event) {
    event.preventDefault();
     var age = $("input#date").val();
     var fullAge = age + ":00-8:00";
     $("#birthdate").text(fullAge);
   });
});
