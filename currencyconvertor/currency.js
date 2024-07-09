const BASE_URl = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json"

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");


for(let select of dropdowns) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value= currCode;
    if(select.name ==="from" && currCode === "UsD"){
        newOption.selected = "selected";
    } else if(select.name === "to" && currCode === "INR"){
        newOption.selected = "selected" ;
    }
select.append(newOption);

select.addEventListener("change" , (evt) => {
    updateFlag(evt.target);
});
}

const updateFlag =(element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
let img = element.parentElement.querySelector("img");
img.src = newSrc;
};

btn.addEventListener("click" , (evt) => {
evt.preventDefault();
let amount = document.querySelector(".amount input");
let amtVal = amount.value;
if ( amtval === "" || amtVal < 1) {
    amtVal = 1 ;
    amount.value = "1";
}

 const URL
});