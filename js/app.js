$(document).ready(portFunction);

function portFunction(){
    console.log("Hello, welcome to my profile, please feel free to visit any of my above projects!");
    fadeInElements();
}

function fadeInElements(){
    $("#wrapper").hide(0).delay(100).fadeIn(3000);
    $("#introduction").hide(0).delay(200).fadeIn(3000);
    $(".project").hide(0).delay(300).fadeIn(3000);
    $("footer").hide(0).delay(400).fadeIn(4000);
}