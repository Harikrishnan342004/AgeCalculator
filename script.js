function clearScreen(value )
{
    document.getElementById("screenpart").value=""; 
    document.getElementById("output").value="";    // Clear a value in Display
}


function display(value)
{
    document.getElementById("screenpart").value  += value;    // Show the value in Display .....
}


function calculate()
{
    let x = 2022;
    let y =  document.getElementById("screenpart").value;
    var z = eval(x-y);
    document.getElementById("output").value = z;
}
