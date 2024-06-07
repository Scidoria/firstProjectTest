let img_array = [
  "/storage/emulated/0/My Coding
file/My small project/mylove/0.jpeg",
  "/storage/emulated/0/My Coding
file/My small project/mylove/1.jpeg",
  "/storage/emulated/0/My Coding
file/My small project/mylove/2.jpeg",
"/storage/emulated/0/My Coding
file/My small project/mylove/3.jpeg"
];
const main = document.getElementById("main");
const button = document.getElementById("changeButton");

doChange = () => {
  const random = Math.floor(Math.random() * img_array.length);
  main.src = img_array[random];
}
button.onclick = doChange;
// button.addEventListener("onclick", doChange);