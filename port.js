
let loginpage = (e) =>{
    e.preventDefault()
    let email=e.target[0];
    let pswd=e.target[1];

    let credentials = {
        usermail:`darshan03@gmail.com`,
        userpswd:`2003`
    };
    if(email.value === credentials.usermail && pswd.value === credentials.userpswd){
        window.location.href="./portfolio.html";
    }else{
        email.style.border =`solid 2px red`;
        pswd.style.border=`solid 2px red`;
        alert("invalid")
    }

}
