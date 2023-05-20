
const elRegisterFrom = document.querySelector(".register__form");
const elRegisterUSerName = elRegisterFrom.querySelector(".register__name");
const elRegisterUserNumber = elRegisterFrom.querySelector(".register__phone");
const elRegisterUserEmail = elRegisterFrom.querySelector(".register__email");
const elRegisterUserPassword = elRegisterFrom.querySelector(".register__password");

// TRY CATCH 

async function register(){
    try {
        const response = await fetch("http://localhost:5000/user/register" , {
        method: "POST", 
        headers: {
            
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user_name: elRegisterUSerName.value.trim(),
            phone: elRegisterUserNumber.value.trim(),
            email: elRegisterUserEmail.value.trim(),
            password: elRegisterUserPassword.value.trim(),
            
        })
        
    });
    
    const data = await response.json();
    console.log(data);
    
    if (data.token) {
        window.localStorage.setItem("register", data.token);
        window.location.replace("/login.html");
    }
    
    
    
} catch (error) {
    console.log(error);
    
}
}

//  Listen form 

elRegisterFrom.addEventListener("submit" , evt => {
    evt.preventDefault();
    register()
})