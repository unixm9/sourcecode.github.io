// var xhr = new XMLHttpRequest();
// var section2 = document.getElementById("section2");

// xhr.onload = function() {
//     if(this.status === 200) {
//         // let data = JSON.parse(xhr.responseText);
//         // section2.innerHTML = `${data.card}`;
//         // section2.innerHTML = xhr.responseText;
//     }
//     else{
//         section2.innerHTML = "Error has occured while fetching data from the server";
//     }
// };
// xhr.open("GET", "divs.html", true);
// xhr.send();
var toggle = document.getElementById("toggle");
var btnSort = document.querySelector(".btnSort");
toggle.onclick = function() {
    if(!btnSort.classList.contains("btnSortOpen")){
        btnSort.classList.add("btnSortOpen");
            btnSort.style.display= "flex";
            toggle.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
    }
    else {
        btnSort.classList.remove("btnSortOpen");
            btnSort.style.display= "none";
            toggle.innerHTML = '<i class="fa fa-filter" aria-hidden="true"></i>';
    }
};
var menubar = document.querySelector('.menubar');
var ul = document.querySelector('.ul');
menubar.onclick = function() {
    ul.classList.toggle("open");
    if(menubar.innerHTML === '<i class="fa fa-times" aria-hidden="true"></i>'){
        menubar.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
        // menubar.style.transform= "rotate(90deg)";  
    }
    else {
        menubar.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
        // menubar.style.transform= "rotate(0deg)";       
    }
};

var buttons = document.querySelectorAll(".buttons");
var cards = document.querySelectorAll(".cards");
for(let i=0;i<buttons.length;i++) {
    buttons[i].addEventListener("click" , function() {
        for(let j=0;j<buttons.length;j++) {
            buttons[j].classList.remove("active");
        }
        buttons[i].classList.add("active");
        const target = this.getAttribute("data-target");

        for(let k=0;k<cards.length;k++){
            cards[k].style.display = "none";

            if(cards[k].getAttribute("data-id")==target) {
                cards[k].style.display ="block";
            }
            if(target=="all") {
                cards[k].style.display= "block";
            }
        }
    });
}

var cardshead = document.querySelectorAll(".cards-head");
// var view = document.querySelectorAll(".view");
var gradients =["linear-gradient(to top right, #ff0f7b, #f89b29)",
                "linear-gradient(to top right, #ff930f, #fff95b)",
                "linear-gradient(to top right, #5cb270, #f4f269)",
                "linear-gradient(to top right, #6e78ff, #61f4de)"];
window.onload = function() {
    for(let i=0;i<cards.length;i++) {
        cardshead[i].style.background = gradients[Math.floor(Math.random()*gradients.length)];
        // view[i].style.background = gradients[Math.floor(Math.random()*gradients.length)];
    }
    
}
let search = document.getElementById("search");
let searchBox = document.querySelector(".search-box");
let searchClose = document.getElementById("search-close");
search.onclick = function() {
    searchBox.style.display = "flex";
}
searchClose.onclick = function() {
    searchBox.style.display = "none";
    // btnSort.style.display = "none";
    // toggle.innerHTML = '<i class="fa fa-ellipsis-v" aria-hidden="true"></i>';
}
var heading = document.querySelector('.heading');
var header = document.querySelector('.header');
window.onscroll = function() {
    var top = window.scrollY;
    if(top>100) {
        heading.classList.add('newHeading');
        header.classList.add('newHeader');
    }
    else {
        heading.classList.remove('newHeading');
        header.classList.remove('newHeader');
    }
};

var searchBar = document.querySelector('input');
var searchIcon = document.querySelector('.search-box .fa-search');
searchIcon.addEventListener('click', goSearch);
searchBar.addEventListener('keyup', function(e) {
    if(e.which === 13 || e.keycode === 13) {
        goSearch();
    }
    else {
        console.log("Not worked");
    }
})
function goSearch() {
    if(searchBar.value === ''){
        alert('Your search is not valid')
    }
    else {
    window.open('https://www.google.com/search?q='+ searchBar.value);
    }
}
