document.addEventListener('DOMContentLoaded', function(){

  

    let signup = document.getElementById("sign-up-bts");
    function signup_form(){
        let email=document.getElementById("sign-up-email").value;
        let password=document.getElementById("sign-up-password").value;
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then((userCredential) => {
              swal({
                title: "Account Created Succesfully",
                icon: "success",
              });
              var form = document.getElementById("signup-form");
              form.reset(); 
              var user = userCredential.user;
            })
            // .then(() => {
            //   db.collection("users_address").add({
            //     name: username,
            //     mail: email,         
            // })
            // })    
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              swal({
                title: "Please enter the value input / Password must be minimum 6 character",
                icon: "warning",
              });       
            });
    }
    signup.addEventListener("click", signup_form);

});