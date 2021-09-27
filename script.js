function myfunction()
{
    var amount =(document.getElementById("amount").value);
    if(parseInt(amount)<0 || amount.length === 0)
    {
        alert("please enter a valid amount");
        document.getElementById("amount").focus();
    }
    else
    {
        var interest = Number(document.getElementById("interest").value);
        var resYear  = new Date().getFullYear();
        var years = (Number(document.getElementById("years").value)) + resYear;
        
        var ci = ((parseInt(amount) * interest * years)/100);
        document.getElementById("output").innerHTML  = `If you deposite ${amount},<br>at the interest rate of ${interest}%,<br>You will receive an amount of ${ci},<br>in the year ${years}`
    }
   

    
}