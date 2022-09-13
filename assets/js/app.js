//==========Javascript for Navbar==========//
let togollerBtn = document.querySelector(".mega-wrapper-menu-togoller");
togollerBtn.addEventListener("click", () =>{
    togollerBtn.children[1].classList.toggle('active');
});

let dropdownManuTogoller = document.querySelector(".mega-wrapper-togoller-btn");
let megaWrapperMenu = document.querySelector(".mega-wrapper-menu");
dropdownManuTogoller.addEventListener("click", () =>{
    megaWrapperMenu.classList.toggle("show");
});

let mailItems = document.querySelector(".mail-items");
mailItems.addEventListener("click", ()=>{
    alert("clickted");
    mailItems.nextSibling.classList.toggle('show');
});
