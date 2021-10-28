
$(document).ready(function () {

    new WOW().init();
    
    $('.window__form').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            },
        },
        messages: {            
            email: "Error",
            password: "Error",
        }
    });

    document.querySelector('form.window__form').addEventListener('submit', function(e) {
        e.preventDefault();
        let x = document.querySelector('form.window__form').elements;
        console.log("Username: ", x['email'].value);
        console.log("Password: ", x['password'].value);
    });
});

