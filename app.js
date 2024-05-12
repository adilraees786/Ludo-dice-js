function dice(){
    let image=document.getElementById('img')
    let number=Math.floor(Math.random()*6)+1;
    console.log(number);
    image.innerHTML="<img src = 'Dice-"+number+".png' />";

}