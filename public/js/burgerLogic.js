$(document).ready(function() {
  $("#submitBurger").on("click", function(event) {
    event.preventDefault();
    // Creating order object with devoured defaulted to false
    var order = {
      burger: $("#burgerInput")
        .val()
        .trim(),
      devoured: 0
    };
    console.log(order);
    // Reset input
    $("#burgerInput").val("");
    // Ajax POST request
    var currentURL = window.location.origin;
    $.ajax({
      method: "POST",
      url: currentURL + "/api/new",
      data: order
    }).done(function(data) {
      console.log("sucesssful post");
      // Gets back what we are going to create in the database in json format?
      console.log(data);
    });
  });
});
