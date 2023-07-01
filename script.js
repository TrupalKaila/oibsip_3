function onlyNumberKey(evt) 
{
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode

    if((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46)
    {
        return true;
    }
    else
    {
        return false;
    }
};

function convToFKC()
{
    var celsius = document.getElementById("txtCelsius").value; 
    var fahrenheit = document.getElementById("txtFahrenheit").value;
    var kelvin = document.getElementById("txtKelvin").value;

    if(celsius != "")    
    {
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = parseFloat(celsius) + parseFloat(273.15);
    }
    else if(fahrenheit != "")    
    {
        celsius =  5/9 * (fahrenheit - 32);
        kelvin = 273.5 + ((fahrenheit - 32) * (5/9));;
    }
    else if(kelvin != "")    
    {
        celsius = kelvin - 273.15;
        fahrenheit = (kelvin - 273.15) * 9/5 + 32;
    }

    document.getElementById("txtCelsius").value = (celsius * 100)/100;
    document.getElementById("txtFahrenheit").value = (fahrenheit * 100)/100;
    document.getElementById("txtKelvin").value =  (kelvin * 100)/100;
};

function clearAllField()
{
    document.getElementById("txtCelsius").value = "";
    document.getElementById("txtFahrenheit").value = "";
    document.getElementById("txtKelvin").value =  "";
}