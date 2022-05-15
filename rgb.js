const color = document.querySelector("#color");
const btn = document.querySelector("#btn");
function getRandomNumber(){
  return Math.floor(Math.random()*256);
}
btn.addEventListener("click",function(){
  let rgbColor;
  for(let i = 0; i < 3; i++){
    rgbColor = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
  }
  document.body.style.backgroundColor = rgbColor;
  color.textContent = "Background Color: " + rgbColor;
});