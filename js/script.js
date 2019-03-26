function HoverButton()
{
    document.getElementById("butt").style.backgroundColor = "#080";
}
function Hover()
{
    document.getElementById("butt").style.backgroundColor = "#00BCBA";
}


   // Mangna
function Show()
{
    document.getElementById("click").style.visibility = "visible";
}
function hide()
{
    document.getElementById("click").style.visibility = "hidden";

}

// Pharetra
var n = 0 ;
function Hovered()
{
    n = n + 1 ;
    document.getElementById("img1").innerHTML = n;
}

// form
// function clc()
// {
// document.getElementById("clicks").style.color = "#f50" ;
// document.getElementById("clicks").style.textDecoration = "underline"
// }

var links = document.getElementById("clicks") ,
    the_p = document.getElementById("clicks").getElementsByTagName("p");
    for(var p = 0 ; p < the_p.length ; p++)
    {
        the_p[p].addEventListener("click" , function(){
            links = this.style.color = "#f50" ;
            links = this.style.textDecoration = "underline" ;
        });
    }
 

// valid
function valid()
{
    var t = prompt("Name ..");
    if( t == "Nada")
    {
        window.location = "index.html";
    }
    else{
        alert("wrong !!");
    }
}
