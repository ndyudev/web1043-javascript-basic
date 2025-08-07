let message = document.querySelector("#message");

function uploadFile(files) {
  for (let i = 0; i < files.length; i++) {
    const element = files[i];
    message.innerHTML += element.name + `<br>`;
  }
}
