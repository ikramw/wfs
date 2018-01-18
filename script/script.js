var nav=document.getElementById("nav-res");
var icon=document.getElementById("hamburger");
icon.addEventListener("click",show_menu);

function show_menu(){
    if(nav.className == "displayNone")
        nav.className = "nav-res";
    else if(nav.className =="nav-res")
        nav.className = "displayNone";
}
