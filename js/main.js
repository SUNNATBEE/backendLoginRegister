const createAccauntBtn = document.querySelector(".create-account");
const signOutBtn = document.querySelector(".create-account");

const getTokenLogin = window.localStorage.getItem("login");

if(!getTokenLogin){
    window.location.replace("/login.html");
};

createAccauntBtn.addEventListener("click" , () => {
    window.localStorage.clear();
});

signOutBtn.addEventListener("click" , () => {
    window.localStorage.removeItem("login");
    window.location.replace("/login.html");
})