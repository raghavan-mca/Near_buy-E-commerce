document.addEventListener('DOMContentLoaded', function(){
    //   add to cart function
      function addtocardfun(item){
        console.log(item);
        console.log("button working")
        let storecart=db.collection("clickingdataitem").doc(item.id);
        storecart.get()
        .then((doc) =>{
            
            if(doc.exists){
                storecart.update({
                    quantity: doc.data().quantity + 1
                })
            }
            else{
                storecart.set({
                    image:item.image,
                    quantity:1,
                    mp:item.mp,
                    name:item.name,
                    off:item.off,
                    price:item.price,
                })
            }
        });
    };
    

    // get element in part1
      function getitem(){
        db.collection("part2").get().then((querySnapshot) => {
            let items=[];
            querySnapshot.forEach((doc) => {
                items.push({
                    id: doc.id,
                    image: doc.data().image,
                    mp:doc.data().mp,
                    name:doc.data().name,
                    off:doc.data().off,
                    price:doc.data().price,
                    rating:doc.data().rating,
                    shopname:doc.data().shopname,
                    area:doc.data().area,
                })
                
            });
            generateitem(items);
        });
      };
    //   generate element in part 1
      function generateitem(items){
        let itemsHTML="";
        items.forEach((item)=>{
        let doc=document.createElement("div");
        doc.classList.add("item-box");
          doc.innerHTML =`
                  <div class="item-image-box">
                      <img class="item-image" src="${item.image}" alt="...">
                      <span class="off">${item.off}% off</span>
  
                      <div class="rating-detail">
                          <p class="ratingstar">${item.rating}</p>
                          <img src="./image/star.png" class="rating-star-img" />
                      </div>
                  </div>
  
                  <div class="prodectinfo">
                      <h6 class="item-title">${item.name}</h6>
                      <div class="pricedetail">
                          <span class="price">₹${item.price}/-</span>
                          <span class="actualprice">${item.mp}</span>
  
                      </div>
                      <div>
                          <p class="shoploc">${item.shopname}</p>
                          <p class="shoploc-area">${item.area}</p>
                      </div>
                      <div class="sellerinfo">
  
                          <a href="./shopdetail.html">Seller Detail</a>
                      </div>
                  </div>
          `
          let addtocart=document.createElement("button");
          addtocart.classList.add("cardbut");
          addtocart.innerText="Add to cart";
          addtocart.addEventListener("click",function(){
              addtocardfun(item)
          });
          doc.appendChild(addtocart);
          document.querySelector(".prodectmain").appendChild(doc);
          
        });

    };

      
      getitem();

    //   ####################################################################

    //   add to cart function
    

    // get element in part 2
    function getitem1(){
        db.collection("part1").get().then((querySnapshot) => {
            let items=[];
            querySnapshot.forEach((doc) => {
                items.push({
                    id: doc.id,
                    image: doc.data().image,
                    mp:doc.data().mp,
                    name:doc.data().name,
                    off:doc.data().off,
                    price:doc.data().price,
                    rating:doc.data().rating,
                    shopname:doc.data().shopname,
                    area:doc.data().area,
                })
                
            });
            console.log(items)
            generateitem1(items);
        });
      };

      //   generate element in part 2
      function generateitem1(items){
          let itemsHTML="";
          items.forEach((item)=>{
            let doc1=document.createElement("div");
            doc1.classList.add("item-box");
              doc1.innerHTML =`
    
                    <div class="item-image-box">
                        <img class="item-image" src="${item.image}" alt="...">
                        <span class="off">${item.off}% off</span>
    
                        <div class="rating-detail">
                            <p class="ratingstar">${item.rating}</p>
                            <img src="./image/star.png" class="rating-star-img" />
                        </div>
                    </div>
    
                    <div class="prodectinfo">
                        <h6 class="item-title">${item.name}</h6>
                        <div class="pricedetail">
                            <span class="price">₹${item.price}/-</span>
                            <span class="actualprice">${item.mp}</span>
    
                        </div>
                        <div>
                            <p class="shoploc">${item.shopname}</p>
                            <p class="shoploc-area">${item.area}</p>
                        </div>
                        <div class="sellerinfo">
    
                            <a href="...">Seller Detail</a>
                        </div>
                        
                    </div>
            `
            let addtocart1=document.createElement("button");
          addtocart1.classList.add("cardbut");
          addtocart1.innerText="Add to cart";
          addtocart1.addEventListener("click",function(){
            addtocardfun(item)
          });
          doc1.appendChild(addtocart1);
          document.querySelector(".prodectmain1").appendChild(doc1);
          });
          
      };
      getitem1();

    //   
    function getitem2(){
        db.collection("part3").get().then((querySnapshot) => {
            let items=[];
            querySnapshot.forEach((doc) => {
                items.push({
                    id: doc.id,
                    image: doc.data().image,
                    mp:doc.data().mp,
                    name:doc.data().name,
                    off:doc.data().off,
                    price:doc.data().price,
                    rating:doc.data().rating,
                    shopname:doc.data().shopname,
                    area:doc.data().area,
                })
                
            });
            console.log(items)
            generateitem2(items);
        });
      };

      //   generate element in part 3
      function generateitem2(items){
          let itemsHTML="";
          items.forEach((item)=>{
            let doc1=document.createElement("div");
            doc1.classList.add("item-box");
              doc1.innerHTML =`
    
                    <div class="item-image-box">
                        <img class="item-image" src="${item.image}" alt="...">
                        <span class="off">${item.off}% off</span>
    
                        <div class="rating-detail">
                            <p class="ratingstar">${item.rating}</p>
                            <img src="./image/star.png" class="rating-star-img" />
                        </div>
                    </div>
    
                    <div class="prodectinfo">
                        <h6 class="item-title">${item.name}</h6>
                        <div class="pricedetail">
                            <span class="price">₹${item.price}/-</span>
                            <span class="actualprice">${item.mp}</span>
    
                        </div>
                        <div>
                            <p class="shoploc">${item.shopname}</p>
                            <p class="shoploc-area">${item.area}</p>
                        </div>
                        <div class="sellerinfo">
    
                            <a href="...">Seller Detail</a>
                        </div>
                        
                    </div>
            `
            let addtocart1=document.createElement("button");
          addtocart1.classList.add("cardbut");
          addtocart1.innerText="Add to cart";
          addtocart1.addEventListener("click",function(){
            addtocardfun(item)
          });
          doc1.appendChild(addtocart1);
          document.querySelector(".prodectmain2").appendChild(doc1);
          });
          
      };
      getitem2();
    //   ################################################################################
 });
