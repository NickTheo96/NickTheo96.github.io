function disable_t_and_c()
{
    document.getElementById("submit").disabled = true;
}

function activateButton(element)
{
    if(element.checked)
    {
        document.getElementById("submit").disabled = false;
        document.getElementById('boldStuff').innerHTML = 'Pease accept HERE';

    }
    else
    {
        document.getElementById("submit").disabled = true;
        document.getElementById('boldStuff').innerHTML = '';
    }

}
