var elem = document.getElementById("buttom");
var link = document.getElementById("link");

let newlink = "assets/css/flex.css";
var x = 0;
elem.addEventListener("click", function() {
    if(x == 0){
        
    document.getElementsByTagName("button")[0].childNodes[0].nodeValue="KachelAnsicht";
    //elem.innerHTML = "KachelAnsicht!"; 
    //document.querySelector("body header") 
    x = 1;
}else{
   
    document.getElementsByTagName("button")[0].childNodes[0].nodeValue="ListeAnsicht";
    //link.replaceWith(newlink);
    link.getAttribute('href').replace(newlink);
    x = 0;
}
});
    




