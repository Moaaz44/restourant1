const navbar = document.getElementById("fa");
const midnav = document.querySelector(".mid-nav");
const wrong = document.getElementById("false");
const foodlist = document.querySelector(".foodbutton")
const list = document.querySelector(".food")
const list2 = document.querySelector(".foodlist1")
navbar.addEventListener("click", (params) => {
    wrong.style.display = ("block")
    navbar.style.display = ("none")
    midnav.style.display = ("block")

}
);
wrong.addEventListener("click", (params) => {
    wrong.style.display = ("none")
    midnav.style.display = ("none")
    navbar.style.display = ("block")
}
);
foodlist.addEventListener("click", (params) => {
    list.style.display = ("block")
}
);
