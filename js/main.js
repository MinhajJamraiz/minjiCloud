const collabsibles = document.querySelectorAll(".collapsible");
collabsibles.forEach(item=>item.addEventListener("click",function(){
    this.classList.toggle("collapsible--expanded");
}))