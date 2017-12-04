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
      btnSend.className = "btn-send";
      divContainer.appendChild(btnSend);

    var btnClose = document.createElement ("button");
      btnClose.className = "btn-close";
      divContainer.appendChild(btnClose);

}
/*
function saveText() {


}


<div>
                <input class="save" type="text" name="" value="Guardar">
                <a href="#"><i class="fa fa-times" aria-hidden="true"></i></a>
              </div>*/
