 let taskbar = document.querySelector(".taskbar");
 let startmenu = document.querySelector(".startmenu");

 taskbar.addEventListener("click", ()=> {
    console.log("click");
    if(startmenu.style.bottom == "10px"){
        startmenu.style.bottom = "-655px";
    }
    else{
        startmenu.style.bottom = "10px";
    }
 });