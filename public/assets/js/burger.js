$(function () {

    $(".Devour").on("click", function(event) {
        var id = $(this).data("id");
        //var Devoured = $(this).data("Devoured");

        var newBurgerState = {
            devoured: true

        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(function () {
            console.log("Changed state to", newBurgerState);
            location.reload();
        });

    });


    $(".create-form").on("submit", function(event) {
        event.preventDefault();
            var burgName = $("#ba").val().trim();
            console.log("The burger to insert is :"+burgName);
        var newBurger = {

            burger_name: burgName,
           // devoured: false

        };
        console.log(newBurger);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {

            console.log("New Burger created:");
            location.reload();
        });
    });
});