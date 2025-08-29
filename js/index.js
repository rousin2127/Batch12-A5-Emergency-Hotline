console.log('Connected')

//nav section test

let heartCount=0;
let coinCount=100;
let copyCount=0;

const heartC=document.getElementById('heartCount');
const coinC=document.getElementById('coinCount');
const copyC=document.getElementById('copyCount');

// document.querySelector('.heart').addEventListener('click',function(){
//     heartCount++;
//     // console.log(heartC).innerText
//     heartC.innerText=heartCount;
    
// })

// document.querySelector('.coin').addEventListener('click',function(){
//     if(coinCount > 0){
//         coinCount--;
//         coinC.innerText=coinCount;
//     }
    
//     // console.log(coinC).innerText;
    
// })
 
// document.querySelector('.copy').addEventListener('click', function(){
//     copyCount++;
//     copyC.innerText=copyCount;
// })






// function for Heart icon . when i click in this icon it  will add in nav heart .

const heartIcons = document.querySelectorAll(".fa-heart");

for (let heartIcon of heartIcons) {
    heartIcon.addEventListener("click",function() {
        heartCount++;
        heartC.textContent = heartCount;
    });
}


// function for Copy ........

const copyNUmbers= document.querySelectorAll('#copyNum');
for(let copyNumber of copyNUmbers){
 copyNumber.addEventListener("click", function() {
        const hotline = copyNumber.closest(".action-card").querySelector("span").textContent;
        navigator.clipboard.writeText(hotline);

        alert(`Hotline number ${hotline} copied!`);

        copyCount++;
        copyC.textContent = copyCount;
    });
}


// function for call -------


// function for call -------

const callButtons = document.querySelectorAll("#callBtn");

for (let callBtn of callButtons) {
    callBtn.addEventListener("click", function () {
        const card = callBtn.closest("div.action-card");
        const serviceName = card.querySelector("h1").innerText;
        const serviceNumber = card.querySelector("span").innerText;

            if (coinCount < 20) {
            alert("Not enough coins! You need at least 20 coins to make a call.");
            return; 
        }

        alert(`Calling ${serviceName} ${serviceNumber}...`);

        if (coinCount > 0) {
            coinCount-=20;
            coinC.innerText = coinCount;
        }

        const historyContainer = document.getElementById("historyContainer");
        const timeNow = new Date().toLocaleTimeString();

        const li = document.createElement("ul");
        li.className =
            "bg-gray-50 p-[5px] rounded-[5px] flex items-center justify-between gap-[10px] mb-[5px]";
        li.innerHTML = `
            <li>
                <h3 class="text-[12px] font-semibold">${serviceName}</h3>
                <p class="text-[12px]">${serviceNumber}</p>
            </li>
            <time datetime="" class="text-[10px]">${timeNow}</time>
        `;

        historyContainer.appendChild(li);
    });
}

// Clear Call History Button
const clearBtn = document.querySelector("#historyContainer button");

clearBtn.addEventListener("click", function () {
    const historyContainer = document.querySelector("#historyContainer");
    const historyItems = historyContainer.querySelectorAll("ul");

    // if (historyItems.length > 0) {
        for (let historyItem of historyItems) {
            historyItem.remove();  // Remove each history item
        }
    // }
});
