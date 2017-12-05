var locationForm = document.body.children[1].children[1];

document. getElementById("addNewFormat").addEventListener("click", newFormat);

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
    var textClose = document.createTextNode ("X");
      btnClose.className = "btn-close";
      btnClose.setAttribute('onclick','disappear()');
      divContainer.appendChild(btnClose);
      btnClose.appendChild(textClose);
}

function disappear() {
    var dad = document.getElementById("dad");
     dad.removeChild(dad.childNodes[2]);
}
