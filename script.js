var append = false; 
function onload()
{
    document.title = "Web App - Simple Interest Calculator";
    document.getElementById("Rate_View").innerHTML= "1.0%";
    line1 = document.createElement('span');
    line2 = document.createElement('span');
    line3 = document.createElement('span');
    line4 = document.createElement('span');

    var s = document.getElementById("Num_Years");
    for (i = 1; i <= 100; i++)
    {
        o  = document.createElement("option");
        o.innerHTML = i;
        s.appendChild(o);
    }
}

function compute()
{
    var fset =  document.getElementById("field");
    var p = document.getElementById("principal").value;
    // validataion
    if(p <= 0 || p == undefined || p == null || p.length == 0)
    {
        
        alert("Enter Positive Number");
        return;
    }
    var r = document.getElementById("Rate_Range").value;
    var n = document.getElementById("Num_Years").value;
    intrest = p* (r / 100) * n;
    var d = new Date();
    var m = d.getFullYear() + parseInt(n);

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
    line1.innerHTML = "If you Deposit <mark>" + p + '</mark>,';
    line2.innerHTML = "At an Interest Rate of <mark>" + r + '%.</mark>';
    line3.innerHTML = " you will receive an amount of <mark>" + Number(intrest).toFixed(2) + '</mark>,';
    line4.innerHTML = "in the Year <mark>" +  m + '</mark>.';
}

function show_value(x)
{
 document.getElementById("Rate_View").innerHTML= x + '%';
}
