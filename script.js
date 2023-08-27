var logo = document.querySelector("h6")
var nav = document.querySelector("#slide")
 var flag =0
 logo.addEventListener("click",function(){
    if(flag===0){
   
    nav.style.left="0%"
    document.querySelector("#img1").style.transform = "rotate(-35deg)"
        flag=1
    }
    else{
        
        nav.style.left="-100%"
    document.querySelector("#img1").style.transform = "rotate(0deg)"

        flag=0

    }
 },)