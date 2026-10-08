// const baseUrl="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";
// let dropDowns = document.querySelectorAll(".dropdown select");
// // let inputVal =document.querySelector("input");
// let btn = document.querySelector("#special-btn");
// let amount =document.querySelector(".amount input");
// let fromCurr =document.querySelector("#fromCurr");
// let msg =document.querySelector(".msg p");
// let toCurr =document.querySelector("#toCurr");

// const setValue=(val ,amtVal,finalVal)=>{
//     msg.innerText=`${amtVal} ${fromCurr.value} = ${finalVal} ${toCurr.value}`;
// }

// const calValue =(val,amtVal)=>{
//     let finalValue = amtVal*val;
//     setValue(val,amtVal,finalValue);
//     // console.log(finalValue);
// }

// const currConverter = async ()=>{
//     let amtVal=amount.value;
//     if(amtVal==="" || amtVal<1){
//         amtVal=1;
//         amount.value="1";
//     }
//     let URL = `${baseUrl}${fromCurr.value.toLowerCase()}.json`;
//     let response = await fetch(URL);
//     let Data=await response.json();
//     let mainData= Data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
//     calValue(mainData,amtVal);
// }

// btn.addEventListener("click",(evt)=>{
//     evt.preventDefault();
//     currConverter();
// })

// for(let select of dropDowns){
//     for(let currCode in countryList){
//         let newOption=document.createElement("option");
//         newOption.value= currCode;
//         newOption.innerText=currCode;
//         select.append(newOption);
//         if(currCode==="USD" && select.name==="From"){
//             newOption.selected="selected";
//         }
//         else if(currCode === "BDT" && select.name==="To"){
//             newOption.selected ="selected";
//         }
//     }
//     select.addEventListener("change",(evt)=>{
//        flagChange(evt.target);
//     })
// }

// const flagChange =(element)=>{
//     let countryCode =countryList[element.value];
//     let newImgUrl = `https://flagsapi.com/${countryCode}/flat/64.png`;
//     let img =element.parentElement.querySelector("img");
//     img.src = newImgUrl;
// }





// <--practice--->
const baseUrl="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";
let selects =document.querySelectorAll(".dropdown select");
let amount =document.querySelector(".amount input");
let btn = document.querySelector("#special-btn");
let fromCurr =document.querySelector("#fromCurr");
let toCurr = document.querySelector("#toCurr");
let msg =document.querySelector(".msg p");
const calculateCurr=(rate)=>{
    let Exans = rate*amount.value;
    // console.log(Exans);
    msg.innerText=`${amount.value} ${fromCurr.value} = ${Exans} ${toCurr.value}`;
}

const flagChange =(element)=>{
    console.log(element.value);
    let newSrc =`https://flagsapi.com/${countryList[element.value]}/flat/64.png`;
    let img =element.parentElement.querySelector("img");
    img.src = newSrc;
}
const actionTime=async ()=>{
    if(amount.value ==="" || amount.value <1){
        amount.value =1;
    }
    let Url=`${baseUrl}${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(Url);
    let data = await response.json();
    let exchangeRate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    // console.log(exchangeRate);
    calculateCurr(exchangeRate);
    
}

for(let select of selects ){
    for(let currCode in countryList){
        let newOption =document.createElement("option");
        newOption.innerText = currCode;
        newOption.value=currCode;
        select.append(newOption);
        if(select.name==="From" && currCode=== "USD"){
            newOption.selected ="selected";
        }else if(select.name==="To" && newOption.value ==="BDT"){
            newOption.selected="selected";
        }
    }select.addEventListener("change",(evt)=>{
        flagChange(evt.target);
    })
}

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    actionTime();
});


