
document.addEventListener('DOMContentLoaded', function(){

let signin = document.getElementById("user-button");
signin.addEventListener("click", signin_form);

let create_link = document.getElementById('link-redirect')
create_link.addEventListener('click',signup_link);

function signup_link(){
  window.location.assign("sign-up.html")
}



function signin_form(){
  let email= document.getElementById("user-email").value;
  let password=document.getElementById("user-password").value;
  firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
    swal({
      title: "Go and Shop",
      icon: "success",
    });
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        location.replace("landing.html")
      }
    })
    // var base_url = "http://127.0.0.1:5500/";
    // window.location(`${base_url} + landing.html`);
    // console.log(base_url);
    // let signin_f =document.getElementById("signin-form");
    // signin_f.reset();
    var user = userCredential.user; 
   
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode + ":" + errorMessage);
    swal({
      title: "Invalid Mail id or Password",
      icon: "warning",
    });
  });
}



const forget_pass=document.getElementById("forgetpassword");
forget_pass.addEventListener("click",change_pass);

function change_pass(){
  swal({
    title : 'Reset Password',
    content : {
        element : 'input',
        attributes : {
            placeholder : 'Type your Email',
            type : 'email',
            
        }
    }
}).then(val => {
  firebase.auth().sendPasswordResetEmail(val)
  .then(() => {
    swal({
      title: "Check Your Mail Box",
      icon:"success",
    });
    
  })
  .catch((error) => {
    swal({
      title: "Enter your email address",
      icon:"warning" ,
    });
    var errorCode = error.code;
    var errorMessage = error.message;
  });
});
 



  
}


});