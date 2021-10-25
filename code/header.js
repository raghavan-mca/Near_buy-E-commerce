document.addEventListener('DOMContentLoaded', function(){
// readdata

      function readdata(){
        db.collection("clickingdataitem").onSnapshot((Snapshot) => {
            let procount=0;
            Snapshot.forEach((doc) => {
                procount+=doc.data().quantity;
            });
            display(procount);
        });
      };
      function display(procount){
        document.querySelector(".count-no").innerText = procount;
      };
      readdata();
});

