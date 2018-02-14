$(document).ready(function() {
  $("#submitBurger").on("click", function() {
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
      location.reload();
    });
  }); //end submit on click

  // changes devoured field on burger table to true and changes side on document
  $(".devour").on('click', function(event){
    var id = $(this).data("burgerid");
    console.log(id);
    $.ajax({
      method: 'PUT',
      url: '/api/' + id
    }).done(function(){
      location.reload();
    });
  });
  // delete burger but only if the devoured field is true on the table
  $(".delete").on('click', function(event){
    var id = $(this).data("burgerid");
    console.log(id);
    $.ajax({
      method: 'DELETE',
      url: '/api/' + id
    }).done(function(){
      location.reload();
    });
  });
});
