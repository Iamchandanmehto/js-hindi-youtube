// generate a randome color

const randomeColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; 1 < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
return color;
};
const startChangingColor = function(){
 setInterval(changebgColor, 1000)


   function changebgColor(){
    document.body.style.backgroundColor = randomeColor;
   }
};
const stopChangingColor = function(){
    clearInterval(intervalId)
}
document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)