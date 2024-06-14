function sun(){
    document.getElementById("sunstyle").style.visibility="visible";
    document.getElementById("carstyle").style.visibility="collapse";
   }
   function sundbl(){
    document.getElementById("sun").style.visibility="collapse";
    document.getElementById("sun").style.width="0px";
    document.getElementById("sun").style.height="0px"
   }
   function ysun(){
    document.getElementById("sun1").style.visibility="collapse";
    document.getElementById("sun").style.visibility="visible";
    document.getElementById("sun").style.width="100px";
    document.getElementById("sun").style.height="100px"
    document.getElementById("sun").style.position="absolute";
    document.getElementById("sun").style.zIndex="2";
    document.getElementById("sunstyle").style.visibility="collapse";
    document.getElementById("carstyle").style.visibility="collapse";
   }
   function rsun(){
    document.getElementById("sun").style.visibility="collapse";
    document.getElementById("sun1").style.visibility="visible";
    document.getElementById("sun1").style.width="100px";
    document.getElementById("sun1").style.height="100px"
    document.getElementById("sun1").style.position="absolute";
    document.getElementById("sun1").style.zIndex="";
    document.getElementById("sunstyle").style.visibility="collapse";
    document.getElementById("carstyle").style.visibility="collapse";
   }

   function road(){
    document.getElementById("road").style.visibility="visible";
    document.getElementById("road").style.width="750px";
    document.getElementById("road").style.height="750px";
    document.getElementById("road").style.position="absolute";
    document.getElementById("sunstyle").style.visibility="collapse";
    document.getElementById("sun").style.zIndex="1";
    document.getElementById("carstyle").style.visibility="collapse";

   }
   function roaddbl(){
    document.getElementById("road").style.visibility="collapse";
    document.getElementById("road").style.width="0px";
    document.getElementById("road").style.height="0px"
    
   }

   function car(){
  
    document.getElementById("sunstyle").style.visibility="collapse";
    document.getElementById("carstyle").style.visibility="visible";

   }
   function cardbl(){
    document.getElementById("rcar").style.visibility="collapse";
    document.getElementById("rcar").style.width="0px";
    document.getElementById("rcar").style.height="0px"
    
   }
   function rcar(){
    document.getElementById("sun").style.zIndex="2";
    document.getElementById("rcar").style.position="absolute";
    document.getElementById("rcar").style.visibility="visible";
    document.getElementById("rcar").style.width="100px";
    document.getElementById("rcar").style.height="100px";
    document.getElementById("rcar").style.marginTop="440px";
    document.getElementById("rcar").style.marginLeft="310px";
    document.getElementById("rcar").style.marginRight="240px";
    document.getElementById("rcar").style.marginBottom="360px";
    document.getElementById("gcar").style.visibility="collapse";
    document.getElementById("bcar").style.visibility="collapse";
    document.getElementById("sunstyle").style.visibility="collapse";
    document.getElementById("carstyle").style.visibility="collapse";
   }
   function gcar(){
    document.getElementById("sun").style.zIndex="2";
    document.getElementById("gcar").style.position="absolute";
    document.getElementById("gcar").style.visibility="visible";
    document.getElementById("gcar").style.width="100px";
    document.getElementById("gcar").style.height="100px";
    document.getElementById("gcar").style.marginTop="440px";
    document.getElementById("gcar").style.marginLeft="300px";
    document.getElementById("gcar").style.marginRight="240px";
    document.getElementById("gcar").style.marginBottom="360px";
    document.getElementById("rcar").style.visibility="collapse";
    document.getElementById("bcar").style.visibility="collapse";
    document.getElementById("sunstyle").style.visibility="collapse";
    document.getElementById("carstyle").style.visibility="collapse";
   }
   function bcar(){
    document.getElementById("sun").style.zIndex="2";
    document.getElementById("bcar").style.position="absolute";
    document.getElementById("bcar").style.visibility="visible";
    document.getElementById("bcar").style.width="100px";
    document.getElementById("bcar").style.height="100px";
    document.getElementById("bcar").style.marginTop="440px";
    document.getElementById("bcar").style.marginLeft="300px";
    document.getElementById("bcar").style.marginRight="240px";
    document.getElementById("bcar").style.marginBottom="360px";
    document.getElementById("rcar").style.visibility="collapse";
    document.getElementById("gcar").style.visibility="collapse";
    document.getElementById("sunstyle").style.visibility="collapse";
    document.getElementById("carstyle").style.visibility="collapse";
   }
   
   
