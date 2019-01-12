$(function () {

    $(".Devour").on("click", function (event) {
        var id = $(this).data("id");
        var Devoured = $(this).data("Devoured");

        var newBurgerState = {
            Devoured: "1"

        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: Devoured
        }).then(function () {
            console.log("Changed state to", Devoured);
            location.reload();
        });

    });


    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {

            burger_name: $("#ba").val().trim()

        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {

            console.log("New Burger created:");
            location.reload();
        });
    });
});