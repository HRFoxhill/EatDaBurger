$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    var devouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".add-order").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newOrder = {
      burger_name: $("#burgerOrder-box").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newOrder
    }).then(
      function() {
        console.log("created new order");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#delete-devoured").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("MMMMMM MMMM BURGER DEVOURED", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});


