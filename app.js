const itemNav = document.querySelector(".item-3");

document.addEventListener("DOMContentLoaded", ()=>{
    console.log("hello from console")

    itemNav.addEventListener("click", ()=>{
        window.alert("hello")
    })
})