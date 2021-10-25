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
      function getitemtoy(){
        db.collection("toyschennai").get().then((querySnapshot) => {
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
            generateitemtoy(items);
            

        });
      };
    //   generate element in part 1
      function generateitemtoy(items){
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
          document.querySelector(".prodectmaintoy").appendChild(doc);
          
        });

    };
    getitemtoy();

      

    //   ####################################################################
    function getitem(){
        db.collection("watchchennai").get().then((querySnapshot) => {
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
// ####################################################################
function getitemjewlery(){
    db.collection("jewlerychennai").get().then((querySnapshot) => {
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
        generateitemjewlery(items);
        
    });
    
  };
  function generateitemjewlery(items){
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
      document.querySelector(".prodectmainjewlery").appendChild(doc);
      
    });
    


};
getitemjewlery();

// ########################################################################
function getitemmens(){
    db.collection("mensdresschennai").get().then((querySnapshot) => {
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
        generateitemmens(items);
        
    });
    
  };
  function generateitemmens(items){
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
      document.querySelector(".prodectmainmens").appendChild(doc);
      
    });
    


};
getitemmens();
// ####################################################################################
function getitemwomensdress(){
    db.collection("womensdresschennai").get().then((querySnapshot) => {
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
        generateitemwomens(items);
        
    });
    
  };
  function generateitemwomens(items){
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
      document.querySelector(".prodectmainwomens").appendChild(doc);
      
    });
    


};
getitemwomensdress();

// ##########################################################################

function getitemelectronics(){
    db.collection("electronicschennai").get().then((querySnapshot) => {
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
        generateitemelectronics(items);
        
    });
    
  };
  function generateitemelectronics(items){
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
      document.querySelector(".prodectmainelectronics").appendChild(doc);
      
    });
    


};
getitemelectronics();

// #############################################


function getitemmobile(){
    db.collection("mobilechennai").get().then((querySnapshot) => {
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
        generateitemmobile(items);
        
    });
    
  };
  function generateitemmobile(items){
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
      document.querySelector(".prodectmainmobile").appendChild(doc);
      
    });
    


};
getitemmobile();
// #############################################


function getitembook(){
    db.collection("storybookschennai").get().then((querySnapshot) => {
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
        generateitembook(items);
        
    });
    
  };
  function generateitembook(items){
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
      document.querySelector(".prodectmainbook").appendChild(doc);
      
    });
    


};
getitembook();

// #############################################################
function getitemgrocery(){
    db.collection("grocerychennai").get().then((querySnapshot) => {
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
        generateitemgrocery(items);
        
    });
    
  };
  function generateitemgrocery(items){
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
      document.querySelector(".prodectmaingrocery").appendChild(doc);
      
    });
    


};
getitemgrocery();

// #############################################################
function getitemveg(){
    db.collection("veg&fruitchennai").get().then((querySnapshot) => {
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
        generateitemveg(items);
        
    });
    
  };
  function generateitemveg(items){
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
      document.querySelector(".prodectmainfruitsveg").appendChild(doc);
      
    });
    


};
getitemveg();

});