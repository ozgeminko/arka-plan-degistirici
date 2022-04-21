const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = [
  "pink",
  "purple",
  "blue",
  "yellow",
  "green",
  "#eb34b4",
  "#34dceb",
];

button.addEventListener("click", changeBackground);

let order = 0;

function changeBackground() {
  //rastgele bir renk
  //   const randomColor = Math.floor(Math.random() * colors.length);
  //   const selectedColor = colors[randomColor];
  //   body.style.backgroundColor = selectedColor;
  //   console.log(randomColor, selectedColor);

  //sırayla arka plan rengi seç
  console.log(order);
  if (order == 6)  order = 0; 
   
  

  const selectedColor = colors[order];
  order++;
  body.style.backgroundColor = selectedColor;
}
