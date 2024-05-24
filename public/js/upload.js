var uploadNode = document.getElementById("my-uploader-provider");
var previewsNode = document.getElementById("previews");
// require('dotenv').config();

uploadNode.addEventListener("change", async (event) => {
  event.preventDefault();
  let petId = window.location.href.split("/").at(-1);

  console.log("ID: ", petId);
  console.log("Data: ", event.detail.allEntries);

  let imgCdn = event.detail.allEntries.cdnUrl;
console.log("imgCdn: ", imgCdn)
  renderFiles(
    event.detail.allEntries.filter((file) => file.status === "success"));
  // send the IMG Data to our server
 const response = await fetch(`/pets/${petId}`, {
    method: "POST",
    body: JSON.stringify({imgCdn}),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // If successful, redirect the browser to the profile page
    document.location.replace(`/pets/${petId}`);
  } else {
    alert(response.statusText);
  }
});

function renderFiles(files) {
  const renderedFiles = files.map((file) => {
    const imgNode = document.createElement("img");
    imgNode.setAttribute("src", file.cdnUrl);
    imgNode.setAttribute("alt", file.fileInfo.originalFilename);

    return imgNode;
  });

  previewsNode.replaceChildren(...renderedFiles);
}

/*

var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};

import { uploadFile } from "@uploadcare/upload-client";

const data = new Blob(["This is example file"], { type: "text/plain" });
const file = await uploadFile(data, {
    publicKey: "YOUR_PUBLIC_KEY",
    fileName: "example.txt",
});

console.log(file);
*/
