var locationForm = document.body.children[1].children[1];

document.getElementById("addNewFormat").addEventListener("click",newFormat);
var close = document.getElementsByClassName("btnClose");
close[0].removeEventListener("click",disappear,true)

function newFormat() {
    var divContainer = document.createElement("div");
      divContainer.className = "container-text";
      locationForm.appendChild(divContainer);

    var inputContainer = document.createElement ("input");
      inputContainer.className = "input-container";
      divContainer.appendChild(inputContainer);

    var btnSend = document.createElement ("button");
    var textButton = document.createTextNode ("Save")
      btnSend.className = "btn-send";
      divContainer.appendChild(btnSend);
      btnSend.appendChild(textButton);

    var btnClose = document.createElement ("button");
    var textClose = document.createTextNode ("X")
      btnClose.className = "btn-close";
      divContainer.appendChild(btnClose);
      btnClose.appendChild(textClose);
}

function disappear() {
    var dad = document.getElementById("dad");
    //var byeFormat= document.getElementsByClassName("divContainer");
    dad.classList.remove("container-text");
}
