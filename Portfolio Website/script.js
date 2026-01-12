let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contains");

function openTab(tabName)
{
   for(tabLinks of tabLinks){
    tabLinks.classList.remove("active")
   } 
   for(tabContents of tabContents){
    tabContents.classList.remove("active-tab")
}
event.currentTarget.classList.add("active");

document.getElementById(tabName).classList.add("active-tab")
}      

// Side menu 
let sideMenu = document.getElementById("sideMenu");
function openMenu()
{
    sideMenu.style.right ="0px";
}
function closeMenu(){
     sideMenu.style.right ="-200px";

}