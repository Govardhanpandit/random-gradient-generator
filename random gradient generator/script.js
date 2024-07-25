let myBotton2 = document.getElementById("myButton2");
let myBotton1 = document.getElementById("myButton1");
var para = document.getElementById("secondPara");
let degree1 = 90;
let image1 = document.getElementById("img1");

let img1 = document.getElementById("img1").addEventListener("click", () => {
  degree1 = 0;

  image1.style.height = "75px";
});

let img2 = document.getElementById("img2").addEventListener("click", () => {
  degree1 = 90;
  document.getElementById("img2").style.height = "75px";
});

let img3 = document.getElementById("img3").addEventListener("click", () => {
  degree1 = 135;
  document.getElementById("img3").style.height = "75px";
});

let img4 = document.getElementById("img4").addEventListener("click", () => {
  degree1 = 45;
  document.getElementById("img4").style.height = "75px";
});

let buttonHandler = () => {
  let fullNo = "0123456789abcdef";

  colors = "#";
  for (i = 0; i < 6; i++) {
    colors = colors + fullNo[Math.floor(Math.random() * 16)];
  }
  return colors;
};

let rgb1 = "rgb(255, 0, 0)";
let rgb2 = "rgb(0, 0, 255)";

let color1 = () => {
  rgb1 = buttonHandler();
  let bodyGradient = document.getElementById("myBody");
  bodyGradient.style.backgroundImage = `linear-gradient(${degree1}deg, ${rgb1}, ${rgb2})`;
  myBotton1.innerText = rgb1;
  para.innerText = `Background-Image: ${bodyGradient.style.backgroundImage}`;
  image1.style.backgroundImage = `linear-gradient(0deg, ${rgb2} 50%, ${rgb1} 50%)`;
};

let color2 = () => {
  rgb2 = buttonHandler();
  let bodyGradient = document.getElementById("myBody");
  bodyGradient.style.backgroundImage = `linear-gradient(${degree1}deg, ${rgb1}, ${rgb2})`;
  myBotton2.innerText = rgb2;
  para.innerText = `Background-Image: ${bodyGradient.style.backgroundImage}`;
  image1.style.backgroundImage = `linear-gradient(0deg, ${rgb2} 50%, ${rgb1} 50%)`;
};

let myFunction = () => {
  navigator.clipboard.writeText(para.innerText);
  alert("Your text is coppied!");
};

myBotton1.addEventListener("click", color1);
myBotton2.addEventListener("click", color2);
para.addEventListener("click", myFunction);
