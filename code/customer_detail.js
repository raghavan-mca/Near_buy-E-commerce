document.addEventListener('DOMContentLoaded', function(){

function customer_detail(){
    var username=document.getElementById("nam").value;
    var usermobile=document.getElementById("mob").value;
    var useraddress=document.getElementById("address").value;
    var userno=document.getElementById("doorno").value;
    var userstname=document.getElementById("stname").value;
    var userarea=document.getElementById("area").value;
    var usercity=document.getElementById("city").value;
    var userpin=document.getElementById("pin").value;
    if(username!=""& usermobile!=""&useraddress!=""&userno!=""&userstname!=""&userarea!=""&usercity!=""&userpin!=""){
        db.collection("user_address").add({
            name: username,
            mobile: usermobile, 
            address:useraddress,
            doorno:userno,
            street:userstname,
            area:userarea,
            city:usercity,
            pin:userpin,         
        })
        
        db.collection("shipping-detail").doc("address").update({
            name: username,
            mobile: usermobile, 
            address:useraddress,
        });
        
        document.getElementById("invoicelink").classList.remove("redirecttoinvoice-div-disable");
        
        
    }
    else{
        document.getElementById("invoicelink").classList.add("redirecttoinvoice-div-disable");
        
    }
    var form = document.getElementById("form-reset");
        form.reset();
    
    
    
    
};
let userdetailbts=document.getElementById("user-submit");
userdetailbts.addEventListener("click",customer_detail);







});