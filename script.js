let img_array = [
  "/Images/0.jpeg",
  "/Images/1.jpeg",
  "/Images/2.jpeg",
"/Images/3.jpeg"
];
const main = document.getElementById("main");
const button = document.getElementById("changeButton");

doChange = () => {
  const random = Math.floor(Math.random() * img_array.length);
  main.src = img_array[random];
}
button.onclick = doChange;
// button.addEventListener("onclick", doChange);
