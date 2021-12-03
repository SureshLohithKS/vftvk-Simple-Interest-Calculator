var append = false; 
function onload()
{
    document.getElementById("Rate_View").innerHTML= "0.0%";
    line1 = document.createElement('span');
    line2 = document.createElement('span');
    line3 = document.createElement('span');
    line4 = document.createElement('span');

    var s = document.getElementById("Num_Years");
    for (i = 0; i <= 100; i++)
    {
        o  = document.createElement("option");
        o.innerHTML = i;
        s.appendChild(o);
    }
}

function compute()
{
    var fset =  document.getElementById("field");
    p = document.getElementById("principal").value;
    r = document.getElementById("Rate_Range").value;
    n = document.getElementById("Num_Years").value;
    a = p *(1 +((r / 100) * n));
    var d = new Date();
    m = d.getFullYear() + parseInt(n);

    if(!append)
    {
        fset.appendChild(line1);
        fset.appendChild(document.createElement('br'));
        fset.appendChild(line2);
        fset.appendChild(document.createElement('br'));
        fset.appendChild(line3);
        fset.appendChild(document.createElement('br'));
        fset.appendChild(line4);
        fset.appendChild(document.createElement('br'));
        append = true;
    }
    line1.innerHTML = "If you Deposit " + p + ',';
    line2.innerHTML = "At an Interest Rate of " + r + '.';
    line3.innerHTML = " you will receive an amount of " + Number(a).toFixed(2) + ',';
    line4.innerHTML = "in the Year " +  m + '.';
}

function show_value(x)
{
 document.getElementById("Rate_View").innerHTML= x + '%';
}   
