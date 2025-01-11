let baseUrl= "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";
// get input element
let inputAmt=document.querySelector('.inputamt input');
console.log(inputAmt.value);
let msg= document.querySelector('#msg');
// get select dropdown
let dropdowns = document.querySelectorAll('.selectContainer select');
let fromcurr=document.querySelector('#from select');
let tocurr=document.querySelector('#to select');


dropdowns.forEach(options => {
    for(let currCode in countrycode){
        let newopt=document.createElement("option");
        newopt.innerText=currCode;
        newopt.value=currCode;

        if(options.name === "From" && currCode === "USD")
            newopt.selected=true;
        else if(options.name==="To" && currCode==="NPR")
            newopt.selected=true;
        options.appendChild(newopt);


    }

        options.addEventListener('change',(event)=>{
            updateFlag(event.target);

        })
});


window.addEventListener("load",()=>{
realtask()});



const updateFlag=(element)=>{
    let currencyCode=element.value;
    let countryCode=countrycode[currencyCode];
    console.log(currencyCode,countryCode);
    let newsrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let image=element.parentElement.querySelector('img');
    image.src=newsrc;
}



let button=document.querySelector('.exchangeBtn');
button.addEventListener("click",()=>{
    realtask();

})




async function realtask(){
    // fetching data from server
    let url ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json";
    let response = await fetch(url);
    let data= await response.json();        // getting data in readable format in obj form
    let rates = data.eur;                   // accessing the obj of euro

    // getting rate of fromcurrancy and to currency in euro format
    let fromRate = rates[fromcurr.value.toLowerCase()];
    let toRate = rates[tocurr.value.toLowerCase()];
    console.log("1 euro="+fromRate,toRate);

    if(inputAmt.value<1){// gives exchange value only for positive number
        inputAmt.value="1";
    }
    
    // calculation 
    let finalamt = (parseInt(inputAmt.value)* toRate) / fromRate;
    console.log("final amout : "+finalamt);
    
    // change in message box
    msg.innerText=`${inputAmt.value}  ${fromcurr.value} = ${finalamt.toFixed(2)}  ${tocurr.value}`;
    msg.style.border="2px solid black";


}


