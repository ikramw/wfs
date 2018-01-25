var nav=document.getElementById("nav-res");
var nav_des=document.getElementById("nav-des");
var div_hamburger=document.getElementById("nav_des");
var icon=document.getElementById("hamburger");
if (icon.addEventListener) {
    icon.addEventListener("click", show_menu, false);
}
else {
    icon.attachEvent("onclick", show_menu);
}

function show_menu(){
    if(nav.className == "displayNone")
        nav.className = "nav-res";
    else if(nav.className =="nav-res")
        nav.className = "displayNone";
}
nav.addEventListener("click",function(event){
nav.className="displayNone";
});

nav_des.addEventListener("click",function(event){
    nav_des.className="displayNone";
});