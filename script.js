const modal = document.getElementById("modal")
const crossBtn = document.getElementById("cross")
const login = document.getElementById("login")
const signup = document.getElementById("signup")
const loginBtn = document.getElementById("login_btn")
const signupBtn = document.getElementById("signup_btn")
const openModal = document.getElementById("open_model")

signupBtn.addEventListener("click",()=>{
    signup.classList.remove("toggle_form")
    login.classList.add("toggle_form")
})
loginBtn.addEventListener("click",()=>{
    login.classList.remove("toggle_form")
    signup.classList.add("toggle_form")
})
crossBtn.addEventListener("click",()=>{
   modal.classList.remove("toggle_model")
})
openModal.addEventListener("click",()=>{
    modal.classList.add("toggle_model")
 })

