function billingFunction(){
  if (document.getElementById("same").checked){
    var shipName = document.getElementById("shippingName").value;
    var shipZip = document.getElementById("shippingZip").value;
    document.getElementById("billingName").value = shipName;
    document.getElementById("billingZip").value = shipZip;
  }
  else{

    document. getElementById('billingName').removeAttribute("required");
    document. getElementById('billingZip').removeAttribute("required");
    document. getElementById('billingName').value = "";
    document. getElementById('billingZip').value = "";
  }
}
