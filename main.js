const plusBtn = document.querySelector(".plusBtn");
const part = document.querySelector(".part");
const loginAndCart =document.querySelector(".loginAndcart");

console.log(plusBtn);

plusBtn.addEventListener("click", ()=>{
    part.classList.toggle("view");
    loginAndCart.classList.toggle("view");
})
