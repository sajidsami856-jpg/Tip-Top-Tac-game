// let newbtn=document.createElement("button");
// newbtn.innerText ="click me";
// console.log(newbtn);

// let p=document.querySelector("p");
// p.after(newbtn);

// heading.remove();
// let newbtn=document.createElement("button");i will finish havascript inshallah
// newbtn.innerText="click me";
// newbtn.style.backgroundColor="red";
// newbtn.style.color="white";
// document.querySelector("body").prepend(newbtn);
// newbtn=document.body.childElement[0];
// 1. Select all <td> elements on the page
// let btn1 =document.querySelector("#btn1");
// btn1.onclick= (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// };
//****************************************** */
// btn1.addEventListener("click",(evt) =>{
//     // console.log(evt);
//     console.log("button 1 was clicked");
// });
// btn1.addEventListener("click", ()=>{
//     console.log("button clicked ...listerner-2")
// });
// const handler_3=()=>{
//     console.log("button clicked ...listerner-3");
// };
// const handler_4=()=>{
//     console.log("button clicked ...listerner-4");
// }
// btn1.addEventListener("mouseover",handler_3);
// btn1.addEventListener("click", handler_4);
// btn1.removeEventListener("mouseover",handler_3);
// btn1.removeEventListener("click",handler_4);
// ********************************************************
// let mode_button=document.querySelector("#mode_button");
// let body_color=document.querySelector("body");
// let current_mode="light";
// mode_button.addEventListener("click",()=>{
//     if(current_mode==="light"){
//         body_color.classList.add('dark');
//         current_mode="dark";
//         body_color.classList.remove("light");
//         console.log("dark");
        
//     }else{
//         body_color.classList.add("light");
//         current_mode="light";
//         body_color.classList.remove("dark");
//         console.log("light");
//    
// **********************************************************************
