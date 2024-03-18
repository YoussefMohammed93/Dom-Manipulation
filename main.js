let myBtns = document.querySelectorAll(".question i");
let myContent = document.querySelectorAll(".answer");
let myContainer = document.querySelector(".container");

myBtns.forEach((btn,index) => {
    btn.addEventListener("click" , () => {
        myContent[index].classList.toggle("active");
        btn.classList.toggle("fa-plus");
        btn.classList.toggle("fa-minus");
    });
});

// If User Click Outside The Container === Close Answer Content
function clickOutsideContainer (event) {
    if (!myContainer.contains(event.target)) {
        myContent.forEach(content => {
            content.classList.remove("active");
        });
        myBtns.forEach(btn => {
            btn.classList.remove("fa-minus");
            btn.classList.add("fa-plus");
        });
    };
};

document.addEventListener("click" , clickOutsideContainer);