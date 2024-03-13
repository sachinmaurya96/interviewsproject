const modal = document.getElementById("modal")
const crossBtn = document.getElementById("cross")
const login = document.getElementById("login")
const signup = document.getElementById("signup")
const loginBtn = document.getElementById("login_btn")
const signupBtn = document.getElementById("signup_btn")
const openModal = document.getElementById("open_model")
const sidebarToggle = document.getElementById("sidebar_toggle")
const sidebar = document.getElementById("sidebarmenu")
const closeSidebar = document.getElementById("close_sidebar")

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
sidebarToggle.addEventListener("click",()=>{
    sidebar.classList.add("sidebar_show")
})
closeSidebar.addEventListener("click",()=>{
    sidebar.classList.remove("sidebar_show")
})
