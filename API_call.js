const API_URL = 'https://n1623jk298.execute-api.eu-west-1.amazonaws.com/prod/email'; <!-- URL of AWS Post API -->
$("#submitButton").on('click', function(){
    if (jQuery('#contact').valid()) { <!-- only submits if contact form is valid-->
        jQuery.ajax({
            type: "POST",
            url: API_URL,
            contentType: "application/json",
            data: JSON.stringify({
                "name": $('#name_input').val(),
                "phone": $('#phone_input').val(),
                "email": $('#email_input').val(),
                "desc": $('#description_input').val(),
                "URL": window.location.href
            })
        });
        $("#submitButton").css('background-color', 'F96');
        $("#submitButton").html("Thank you! We'll be in touch shortly");
        $("#submitButton").attr("disabled", true);

        return false;
    }

});