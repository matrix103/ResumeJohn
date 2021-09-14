menu.onclick = function HeaderMenu(){
  var x = document.getElementById("mynav");
  var berger = document.getElementById("menu");
  if(x.className === "nav_menu"){
    x.className+=" responsive";
    berger.className+=" responsive";
  }
  else {
    x.className = "nav_menu";
    berger.className = "nav_link_menu";
  }
}
