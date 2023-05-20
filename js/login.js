const elLoginForm = document.querySelector(".form-login");
const elLoginEmail = document.querySelector(".login-name");
const elLoginPassword = document.querySelector(".login-passwor");


const getRegisterToken = window.localStorage.getItem("register");
if (!getRegisterToken) {
    window.location.replace("/register.html");
}



async function loginIn(){
    try {
        const res = await fetch("http://localhost:5000/user/login" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
            "email": elLoginEmail.value.trim(),
            "password": elLoginPassword.value.trim(),
        })
    });
    
    const dat = await res.json();
    if (dat.token){
        window.localStorage.setItem("login" , dat.token);
        window.location.replace("/index.html");
    } 
    
} catch (error) {
    console.log(error);
}
};

elLoginForm.addEventListener("submit" , evt =>{
    evt.preventDefault();
    loginIn();
})

