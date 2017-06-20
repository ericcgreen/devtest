$(document).ready(function() {
// Start when document will be ready.
  $("#submit-btn").click(function() {
    var validRegExp = /^[^@]+@[^@]+.[a-z]{2,}$/i;
    var email = $("#inputEmail").val(); // Store E-mail input value in the variable email.
    var zipcode = $("#inputZipcode").val(); // Store Password input value in the variable password.
    /* Check if email has regular expressions to display message */
    if (email.search(validRegExp) == -1) {
      $("#message").html("i find your lack of faith disturbing.");
      $("input").val("");
    } else {
      $("#message").html("together we can rule the galaxy!!!");
      $("input").val("");
    }
  });
});
