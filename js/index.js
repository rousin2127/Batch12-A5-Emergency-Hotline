console.log('Connected')

//nav section test

let heartCount=0;
let coinCount=100;
let copyCount=0;

const heartC=document.getElementById('heartCount');
const coinC=document.getElementById('coinCount');
const copyC=document.getElementById('copyCount');

document.querySelector('.heart').addEventListener('click',function(){
    heartCount++;
    // console.log(heartC).innerText
    heartC.innerText=heartCount;
    
})

document.querySelector('.coin').addEventListener('click',function(){
    if(coinCount > 0){
        coinCount--;
        coinC.innerText=coinCount;
    }
    
    // console.log(coinC).innerText;
    
})
 
document.querySelector('.copy').addEventListener('click', function(){
    copyCount++;
    copyC.innerText=copyCount;
})