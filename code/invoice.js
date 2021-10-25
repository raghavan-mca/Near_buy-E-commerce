function getitem_invoice() {

    // const logout = document.getElementById("logout")
    // logout.addEventListener("click",log_out)

    // function log_out(){
    //     firebase.auth().onAuthStateChanged((user)=>{
    //         if(!user){
    //         location.assign("http://127.0.0.1:5500/sign-inpage.html")
    //       }
    //     })
    //     firebase.auth().signOut()
    // }
    
  db.collection("shipping-detail").get()

  .then((querySnapshot) => {
      let items=[];
      
      querySnapshot.forEach((doc) => {
          items.push({
              address:doc.data().address,
              name:doc.data().name,
              mobile:doc.data().mobile
          });
          console.log(items);  
          generateuseraddress(items);
      });
     
      // console.log(doc.data());
      
  });


};

getitem_invoice();

  function generateuseraddress(items) {
    let innerinvoicedetail = "";
    
    items.forEach((item) => {
        innerinvoicedetail+= `
    <td class="customer-address" colspan="3">
        <h3>${item.name}</h3>
        <p>${item.address}</p>
        <p>${item.mobile}</p>
    </td> 
        `
        document.querySelector(".customerinfo-invoice").innerHTML = innerinvoicedetail;

    });


    // ###########################################################################


    function cost(items) {
        let cost = 0;
        items.forEach((item) => {
            cost += (item.price * item.quantity);
        });
        document.querySelector(".o-total-no").innerText = cost;
    }

    function carditem() {
        db.collection("clickingdataitem").onSnapshot((Snapshot) => {
            carddetail = [];
            Snapshot.forEach((doc) => {
                carddetail.push({
                    id: doc.id,
                    image: doc.data().image,
                    mp: doc.data().mp,
                    name: doc.data().name,
                    price: doc.data().price,
                    quantity: doc.data().quantity
                });
                tablegenerater(carddetail);
                cost(carddetail);

            });
        });
    };

    carditem();

    function tablegenerater() {
        let innertabledetail = ""
        carddetail.forEach((item) => {
            innertabledetail += `
            <tbody class="prodect-body">
                <tr class="prodect-invoice.data">
                    <td class="Product-size">
                        <div class="Product-invoice-grid">
                            <div class="image-invoice-div">
                                <img class="image-invoice" src="${item.image}" alt="...">
                            </div>
                            <div class="image-invoice-detail">
                                <p>${item.name}</p>
                                <span>₹${item.mp}</span>
                                <span>₹${item.off}</span>
                            </div>
                        </div>
                    </td>
                    <td class="quantity-size">
                        <div>${item.quantity}</div>
                    </td>
                    <td class="amount-size">
                        <div>₹${item.price * item.quantity}</div>
                    </td>
                </tr>
            </tbody>
            `
            document.querySelector(".prodect-body-main").innerHTML = innertabledetail;

        });
    };
};

function generatepdf() {
    window.print();
    var thbtn = document.getElementById("th-btn")
    thbtn.classList.remove("dn");

    thbtn.addEventListener("click",function(){

    location.replace("chennai.html")
   

    })
    var inv_btn = document.getElementById("in-btn")
    inv_btn.classList.add("dn");
    
    inv_btn.innerText="THANKYOU"
    }


// function generatepdf() {
//     html2canvas(document.getElementById("invoice"), {
//         onrendered: function(canvas) {
//             var data = canvas.toDataURL();
//             var docDefinition = {
//                 content: [ {
//                     image: data,
//                     width:400,
                    
//                 } ]
//             };
//             pdfMake.createPdf(docDefinition).download("Invoice.pdf");
//         }
//     });
// }

// function generatepdf() {
//     var doc = new jsPDF()
//   doc.autoTable({ html: '#invoice' })
//   doc.save('invoice.pdf')
// }
// function generatepdf(){
//     // const element=document.getElementById("invoice");
//     var doc = new jsPDF();
//     doc.fromHTML(document.getElementById("invoice"))
//     doc.save();
// }

// function generatepdf() {
   
//         var pdf = new jsPDF('p', 'pt', 'letter');
//         // source can be HTML-formatted string, or a reference
//         // to an actual DOM element from which the text will be scraped.
//         source = $('#invoice');
//         console.log($('#invoice'));
    
//         // we support special element handlers. Register them with jQuery-style 
//         // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
//         // There is no support for any other type of selectors 
//         // (class, of compound) at this time.
//         specialElementHandlers = {
//             // element with id of "bypass" - jQuery style selector
//             '#bypassme': function (element, renderer) {
//                 // true = "handled elsewhere, bypass text extraction"
//                 return true
//             }
//         };
//         margins = {
//             top: 80,
//             bottom: 60,
//             left: 40,
//             width: 522
//         };
        
//         pdf.fromHTML(
//         source, // HTML string or DOM elem ref.
//         margins.left, // x coord
//         margins.top, { // y coord
//             'width': margins.width, // max width of content on PDF
//             'elementHandlers': specialElementHandlers
//         },
    
//         function (dispose) {
            
//             pdf.save('Test.pdf');
//         }, margins);
//     }



// const options = {
//     margin: 0.5,
//     filename: 'invoice.pdf',
//     image: { 
//       type: 'jpeg', 
//       quality: 500
//     },
//     html2canvas: { 
//       scale: 1 
//     },
//     jsPDF: { 
//       unit: 'in', 
//       format: 'letter', 
//       orientation: 'portrait' 
//     }
//   }
  
//   $('.invoice-bts').click(function(e){
//     e.preventDefault();
//     const element = document.getElementById('invoice');
//     html2pdf().from(element).set(options).save();
//   });


//   function printDiv(divName) {
//    var printContents = document.getElementById(divName).innerHTML;
//    var originalContents = document.body.innerHTML;

//    document.body.innerHTML = printContents;

//    window.print();

//    document.body.innerHTML = originalContents;
// }