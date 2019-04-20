// AJAX CALL SETTINGS
console.log("HELLO HAMSTER CAPITAL");
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

var csrftoken = getCookie('csrftoken');


function csrfSafeMethod(method) {
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    beforeSend: function (xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});

function ajaxCall(url, data, callback) {
    var request = $.ajax({
        type: "POST",
        url: url,
        dataType: "json",
        data: data
    });
    request.done(function (result) {
        if (typeof callback !== 'undefined') {
            callback(result);
        }
    });
}
function validateEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    console.log(email);
    return regex.test(email);
}



$("#LoginUser").click(function () {
    console.log("I clicked");

    var email = $("#email").val();
    var password = $("#password").val();

    var loginData = {
        'email': email,
        'password': password,
    };

    // console.log(newStartupUser);

        if (validateEmail(email)) {
            console.log('valid email');
            console.log(loginData);
            // All good - post to database

            ajaxCall('/logMein', loginData, function (data) {
                var success = data.success;

                if(success === true){
                    alert("Success. Please check your email to login.");
                } else {
                    alert("Oops, something is wrong. Please make sure everything is filled in. If this issue presists please contact us.");
                }

            })

        }

    else {
            console.log("invalid email");
            $("#startupEmail").addClass('is-danger');
            alert('Invalid Email Address');
        }

});



$("#CreateUserStartup").click(function () {
    console.log("I clicked");
    $("#CreateUserStartup").addClass('is-loading')

    var email = $("#startupEmail").val();
    var password1 = $("#password1").val();
    var password2 = $("#password2").val();
    var userType = $("#userType").val();


    var newStartupUser = {
        'email': email,
        'password': password1,
        'password2': password2,
        'userType': userType

    };

    // console.log(newStartupUser);

    if (password1 !== password2) {
        console.log('no match');
        $("#pwNoMatch").show();


        // $("#pwNoMatch").removeClass("is-hidden");
    } else {

        console.log('passwords match');
        $("#pwNoMatch").hide();

        if (validateEmail(email)) {
            console.log('valid email');
            console.log(newStartupUser);

            // All good - post to database

            ajaxCall('/register/startup/create', newStartupUser, function (data) {
                var success = data.success;
                var existing = data.existing;
                console.log(data);
                if(success === false){

                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Woops, email already exists. Please login instead or sign up with a different email address',
                      });
                    // alert("Woops, email already exists. Please login instead or sign up with a different email address");
                };
                if(success === true){


                    $('#loginScreen').hide();

                     $('#successScreen').show();
            
                    // Swal.fire({
                    //     type: 'success',
                    //     title: 'Success',
                    //     text: 'You have successfully signed up for Hamster Capital. Please check your email to verify your account.',
                    //   });
                    
                } 

            })

        } else {
            console.log("invalid email");
            $("#startupEmail").addClass('is-danger');
            alert('Email address is invalid. Please enter a valid email address.');

        }
    }

});