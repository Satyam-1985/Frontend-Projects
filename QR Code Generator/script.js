let img_box = document.getElementById("img_box");
let qrimg = document.getElementById("qrimg");
let qrText = document.getElementById("qrtext");

function addfun(){

    if (qrText.value.trim() === "") {
  alert("Please enter text or URL");
  return;
}
 qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrText.value;
   
 img_box.classList.add("show-img");
}
