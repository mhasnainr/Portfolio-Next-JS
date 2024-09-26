var list = [];
var div = document.getElementById("messages");

function handleSend() {
  div.innerHTML = "";
  var msgText = document.getElementById("msg").value;
  list.push(msgText);

  for (let count = 0; count < list.length; count++) {
    div.innerHTML += `<div class = 'w-min bg-white inline-block p-2 px-6 rounded-lg border border-black ml-2 mt-2'>${list[count]}</div>`;
  }
  document.getElementById("msg").value = "";
}
