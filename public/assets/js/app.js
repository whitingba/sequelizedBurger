//TODO:
//create a function that when you click on the devoured button the burger will move to the devoured column
$(function () {
    //create a function that when you click on the devoured button the burger will move to the devoured column
    $('.devour').on('click', function (event) {
        event.preventDefault();

        var id = $(this).data('id');
        var devouredState = {
            devoured: 1
        };
        //Send the PUT request
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: devouredState
        }).then(function () {
            console.log('Burger devoured');
            location.reload();
        })
    })





    // function to add a new burger to the burger column
    $('#newBurger').on('submit', function (event) {
        event.preventDefault();

        var newYumBurger = {
            name: $('#newBurger [name=burger_name]').val().trim()
        };


        $.ajax('/api/burgers', {
            type: 'POST',
            data: newYumBurger
        }).then(
            function () {
                console.log('new burger created');
                location.reload();
            }
        );
    });


});