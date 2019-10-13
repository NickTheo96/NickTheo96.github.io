function disable_t_and_c()
{
    document.getElementById("submit").disabled = true;
}

function activateButton(element)
{
    if(element.checked)
    {
        document.getElementById("submit").disabled = false;
        document.getElementById("nick_test").InnerHTML = "aaaaaaaaaa"; <!-- code never executes -->

    }
    else
    {
        document.getElementById("submit").disabled = true;
        document.getElementById("nick_test").InnerHTML = "bbbbbbbbbbb"; <!-- code never executes -->
    }

}
