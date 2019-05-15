function displayPaymentInfo() {
    var phoneNumber = document.getElementById("phoneNumber").value;
    var bchAmount = document.getElementById("bchAmount").value;
    var errorField = document.getElementById("error");
    var QRCodeImage = document.getElementById("QRCode");
    var scanMessage = document.getElementById("scanMessage");
    phoneNumber = phoneNumber.trimLeft("+");
    
    //Check that both fields are populated.
    if (!(bchAmount && phoneNumber)){
        errorField.innerHTML = "Please fill in both fields.";
        setTimeout(function(){document.getElementById("error").innerHTML="";}, 5000);
    }
    
    else if (isNaN(phoneNumber)){
        errorField.innerHTML = "Please only enter numbers into telephone number field.";
        setTimeout(function(){document.getElementById("error").innerHTML="";}, 5000);
    }
    
    else if (isNaN(bchAmount)){
        errorField.innerHTML = "Please only enter number into BCH amount field.";
        setTimeout(function(){document.getElementById("error").innerHTML="";}, 5000);
    }
    
    else {
        var errorFree = true; //to remove need to code rest of the function indented under this else {}
    }
    
    if (!errorFree){ 
        return; //the following code will only run if no errors above were detected
    }
    
    var url = "https://pay.cointext.io/p/" + phoneNumber + "/" + (bchAmount*100000000).toString();
    console.log(url);
    
    QRCodeImage.src = url;
    QRCodeImage.style.display = "block";
    scanMessage.style.display = "block";
}
