document.addEventListener('DOMContentLoaded', function () {


    

    function carditem() {
        db.collection("clickingdataitem").onSnapshot((Snapshot) => {
            carddetail = [];

           

            Snapshot.forEach((doc) => {
                carddetail.push({
                    id: doc.id,
                    image: doc.data().image,
                    mp: doc.data().mp,
                    name: doc.data().name,
                    off: doc.data().off,
                    price: doc.data().price,
                    quantity: doc.data().quantity
                });
            
                tablegenerater(carddetail);
                cost(carddetail);

            });
            if(carddetail.length == 0) {
                document.getElementById("btsfunction").classList.add("btn-disabled");
                document.getElementById("empty").classList.remove("empty_hide");
            }
            else if(carddetail.length != 0) {
                document.getElementById("btsfunction").classList.remove("btn-disabled") ;
                
            }
        });
    };


    function cost(items) {
        let cost = 0;
        items.forEach((item) => {
            cost += (item.price * item.quantity);
        });
        document.querySelector(".overall-total-no").innerText = numeral(cost).format("$00,000");
    }

    function decreaseCount(itemId) {
        let cartquantity = db.collection("clickingdataitem").doc(itemId);
        cartquantity.get().then(function (doc) {
            if (doc.exists) {
                if (doc.data().quantity > 1) {
                    cartquantity.update({
                        quantity: doc.data().quantity - 1
                    });
                };
            }

        });
    };

    function increaseCount(itemId) {
        let cartquantity = db.collection("clickingdataitem").doc(itemId);
        cartquantity.get().then(function (doc) {
            if (doc.exists) {
                if (doc.data().quantity > 0) {
                    cartquantity.update({
                        quantity: doc.data().quantity + 1
                    })
                }

            }
        });
    };

    function deleteitemfromcartCount(itemId) {

        db.collection("clickingdataitem").doc(itemId).delete();

    }


    function tablegenerater() {
        let innertabledetail = ""
        carddetail.forEach((item) => {
            innertabledetail += `
                         <tr class="main-table">
                                <td class="main-table-data">
                                    <div class="prodect-table-div">
                                        <div class="prodect-table-img">
                                            <img class="prodect-table-div-img" src="${item.image}" alt="">
                                        </div>
                                        <div class="prodect-table-detail">
                                            <h6>${item.name}</h6>
                                            <div>
                                                <span class="actualprice-card">₹${item.mp}</span>
                                                <span class="off-card">${item.off}%</span>
                                                <div class="remove">
                                                <svg data-id="${item.id}" id="delete"  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                     width="92px" height="92px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
                                                <path id="XMLID_1348_" d="M78.4,30.4l-3.1,57.8c-0.1,2.1-1.9,3.8-4,3.8H20.7c-2.1,0-3.9-1.7-4-3.8l-3.1-57.8
                                                    c-0.1-2.2,1.6-4.1,3.8-4.2c2.2-0.1,4.1,1.6,4.2,3.8l2.9,54h43.1l2.9-54c0.1-2.2,2-3.9,4.2-3.8C76.8,26.3,78.5,28.2,78.4,30.4z
                                                     M89,17c0,2.2-1.8,4-4,4H7c-2.2,0-4-1.8-4-4s1.8-4,4-4h22V4c0-1.9,1.3-3,3.2-3h27.6C61.7,1,63,2.1,63,4v9h22C87.2,13,89,14.8,89,17z
                                                     M36,13h20V8H36V13z M37.7,78C37.7,78,37.7,78,37.7,78c2,0,3.5-1.9,3.5-3.8l-1-43.2c0-1.9-1.6-3.5-3.6-3.5c-1.9,0-3.5,1.6-3.4,3.6
                                                    l1,43.3C34.2,76.3,35.8,78,37.7,78z M54.2,78c1.9,0,3.5-1.6,3.5-3.5l1-43.2c0-1.9-1.5-3.6-3.4-3.6c-2,0-3.5,1.5-3.6,3.4l-1,43.2
                                                    C50.6,76.3,52.2,78,54.2,78C54.1,78,54.1,78,54.2,78z"/>
                                                </svg>
                                            
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </td>
                                <td class="quantity-table">
                                    <div>
                                        <svg data-id="${item.id}" id="decrease" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h5>${item.quantity}</h5>
                                    </div>
                                    <div>
                                        <svg data-id="${item.id}" id="increase" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                        </svg>
                                    </div>
                                </td>
                                <td class="cost">
                                    <div class="cost-div">
                                        <h5>₹${item.price * item.quantity}</h5>
                                    </div>
                                </td>
                            </tr>
            `
            document.querySelector(".table-body").innerHTML = innertabledetail;
            
            clickbutton();
        });
    };

    function clickbutton() {
        let decrease = document.querySelectorAll("#decrease");
        let increase = document.querySelectorAll("#increase");
        let deleteitem = document.querySelectorAll("#delete");

        decrease.forEach((button) => {
            button.addEventListener("click", function () {
                decreaseCount(button.dataset.id);

            })

        })
        increase.forEach((button) => {
            button.addEventListener("click", function () {
                increaseCount(button.dataset.id);
            })
        })
        deleteitem.forEach((button) => {
            button.addEventListener("click", function () {
                deleteitemfromcartCount(button.dataset.id);
            })
        })
    }
    carditem();

    
 
});