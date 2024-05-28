var uploadNode = document.getElementById("my-uploader-provider");
var previewsNode = document.getElementById("previews");
// require('dotenv').config();

/*
uploadNode.addEventListener("file-upload-success", (e) => {
  console.log("Upload Finished...")
  console.log(e.detail);
  let petId = window.location.href.split("/").at(-1);
  
  console.log("ID: ", petId);
  console.log("Data: ", e.detail.allEntries);
  
  let imgCdn = e.detail.allEntries[0].cdnUrl;
  console.log("imgCdn: ", imgCdn)
});
*/

uploadNode.addEventListener("file-upload-success", async (event) => {
  event.preventDefault();
  
  let petId = window.location.href.split("/").at(-1);

  console.log("ID: ", petId);
  console.log("Data: ", event.detail);

  let imgCdn = event.detail.cdnUrl;
  console.log("imgCdn: ", imgCdn)
   //await renderFiles(
   // event.detail.allEntries.filter((file) => file.status === "success"));
   renderFiles(event.detail);
  // send the IMG Data to our server
  
 const response = await fetch(`/api/pets/${petId}`, {
    method: "PUT",
    body: JSON.stringify({imgCdn}),
    headers: { "Content-Type": "application/json" },
  });
  console.log("Response: ", response);
  if (response.ok) {
    // If successful, redirect the browser to the profile page
    document.location.replace(`/pets/${petId}`);
  } else {
    alert(response.statusText);
  }
  
});

//async function renderFiles(files) {
function renderFiles(file) {
  //  console.log('rendered files:',  files)
 /* const renderedFiles = files.map((file) => {
    const imgNode = document.createElement("img");
    imgNode.setAttribute("src", file.cdnUrl);
    imgNode.setAttribute("alt", file.fileInfo.originalFilename);
    
    return imgNode;
  });
  */

  const imgNode = document.createElement("img");
  imgNode.setAttribute("src", file.cdnUrl);
  imgNode.setAttribute("alt", file.fileInfo.originalFilename);

  //previewsNode.replaceChildren(...renderedFiles);
  previewsNode.replaceChildren(imgNode);
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
