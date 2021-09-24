function myfunction()
{
    var amount = Number(document.getElementById("amount").value);
    var interest = Number(document.getElementById("interest").value);
    var resYear  = new Date().getFullYear();
    var years = (Number(document.getElementById("years").value)) + resYear;
    
    var ci = ((amount * interest * years)/100);
    document.getElementById("output").innerHTML  = `If you deposite ${amount},<br>at the interest rate of ${interest}%,<br>You will receive an amount of ${ci},<br>in the year ${years}`

    
}