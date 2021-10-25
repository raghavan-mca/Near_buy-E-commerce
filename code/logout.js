
    const logout = document.getElementById("logout")
    logout.addEventListener("click",log_out)

    function log_out(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(!user){
            location.replace("index.html")
          }
        })
        firebase.auth().signOut()
    }
    function home(){
      var homeload=document.getElementsByClassName("titlename")[0]
      homeload.addEventListener('click',function(){
        location.replace("chennai.html")

      })
      
    }
    home()
    