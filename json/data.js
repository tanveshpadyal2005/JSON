



function store(){
    
    let getreq = new XMLHttpRequest();

    getreq.onreadystatechange = function(){
        if(this.readyState ==4 && this.status== 200){
            let newOBJ = JSON.parse(this.responseText)
            console.log(newOBJ.pet)
            document.getElementById('cheak').innerHTML= newOBJ.pet
            
        }
    }


    getreq.open('GET',"data.json",true)
    getreq.send()


  }



  function getdata(){

    let abc = new XMLHttpRequest;
    abc.onreadystatechange = function(){
      let fill =   JSON.parse(this.responseText)
       document.getElementById('cheak').innerHTML=fill.subject[0].scince
    }



    abc.open('GET',"data.json",true)
    abc.send()


  }













