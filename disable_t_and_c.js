function disable_t_and_c()
{
    document.getElementById("submit").disabled = true;
}

function activateButton()
{
    var x = document.getElementById("terms_input").checked;
    var a = '1';
    var b = '2';
    var c = '3';

    // document.getElementById('boldStuff').innerHTML = x;


    if(x === true)
    {
        document.getElementById("submit").disabled = false;
        document.getElementById('boldStuff').innerHTML = 'Thank you for signing up to the t&c\'s outlined HERE';

    }
    else if (x === false)
    {

        document.getElementById("submit").disabled = true;
        document.getElementById('boldStuff').innerHTML = 'Please sign up to the t&c\'s outlined HERE';
    }
    else
    {
        document.getElementById('boldStuff').innerHTML = c;
    }

}
