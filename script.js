let img_array = [
  "https://raw.githubusercontent.com/Scidoria/firstProjectTest/main/Images/0.jpeg",
  "https://raw.githubusercontent.com/Scidoria/firstProjectTest/main/Images/1.jpeg",
  "https://raw.githubusercontent.com/Scidoria/firstProjectTest/main/Images/2.jpeg",
"https://raw.githubusercontent.com/Scidoria/firstProjectTest/main/Images/3.jpeg"
];
const main = document.getElementById("main");
const button = document.getElementById("changeButton");

doChange = () => {
  const random = Math.floor(Math.random() * img_array.length);
  main.src = img_array[random];
}
button.onclick = doChange;
// button.addEventListener("onclick", doChange);
