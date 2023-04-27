// Header
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".header .nav-list ul");
const menuItem = document.querySelectorAll(".header .nav-bar .nav-list ul li a");
const header = document.querySelector(".header.container");
// Hamburger + mobile Menu
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});
// End hamburger

// Automatically close menu when click
menuItem.forEach(link => {
    link.addEventListener("click", () =>{
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });
});
// End auto close menu

// Header desktop background menu
const background = document.querySelectorAll(".header .nav-list ul a");

background.forEach(btn => {
    btn.addEventListener("click", e => {
        background.forEach(btn => {
            btn.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    });
});
// End Header desktop background menu
// End header

// Hiking
const places = [
    {
        id: 1,
        title: "Lebanon-Falougha",
        category: "favorite",
        img: "./images/falougha2.jpeg",
    },
    {
        id: 2,
        title: "Lebanon-Marina Dbayeh",
        category: "favorite",
        img: "./images/marina.jpeg",
    },
    {
        id: 3,
        title: "Lebanon-Zaaroor",
        category: "favorite",
        img: "./images/zaaroor.jpeg",
    },
    {
        id: 4,
        title: "Lebanon-Abou Mizein",
        category: "mountains",
        img: "./images/abou1.jpeg",
    },
    {
        id: 5,
        title: "Lebanon-Abou Mizein",
        category: "rivers",
        img: "./images/abou2.jpeg",
    },
    {
        id: 6,
        title: "Lebanon-Abou Mizein",
        category: "mountains",
        img: "./images/abou3.jpeg",
    },
    {
        id: 7,
        title: "Lebanon-Abou Mizein",
        category: "mountains",
        img: "./images/abou4.png",
    },
    {
        id: 8,
        title: "Lebanon-Chowan Lake",
        category: "rivers",
        img: "./images/chowanlake1.jpeg",
    },
    {
        id: 9,
        title: "Lebanon-Chowan Lake",
        category: "rivers",
        img: "./images/chowanlake2.jpeg",
    },
    {
        id: 10,
        title: "Lebanon-Chowan Lake",
        category: "rivers",
        img: "./images/chowanlake3.jpeg",
    },
    {
        id: 11,
        title: "Lebanon-Chowan Lake",
        category: "rivers",
        img: "./images/chowanlake4.jpeg",
    },
    {
        id: 12,
        title: "Lebanon-Chowan Lake",
        category: "rivers",
        img: "./images/chowanlake5.jpeg",
    },
    {
        id: 13,
        title: "Lebanon-Falougha",
        category: "mountains",
        img: "./images/falougha1.jpeg",
    },
]

const sectionCenter = document.querySelector(".section-center");
const displayBtns = document.querySelector(".btns");

window.addEventListener("DOMContentLoaded",()=>{
    displayPlacesItems(places);
    displayFilterBtns();
});

function displayPlacesItems(places){
    let displayPlaces = places.map( item => {
        return`<div class="single-item">
                    <img src="${item.img}" class="photo" alt="img">
                    <h2>${item.title}</h2>
               </div>`
    }).join("");
    sectionCenter.innerHTML = displayPlaces;
}
displayPlacesItems(places);

function displayFilterBtns(){
    const categories = places.reduce((values, item) => {
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    },["all"]);

    const categoryBtns = categories.map(category => {
        return `<button class="filter-btn" data-id="${category}" type="button">${category}</button>`;
    }).join("");
    displayBtns.innerHTML = categoryBtns;

    const filterBtns = document.querySelectorAll(".filter-btn");
    
    filterBtns.forEach(btn => {
        btn.addEventListener("click", e =>{
            filterBtns.forEach(btn =>{
                btn.classList.remove("active");
            });
            e.currentTarget.classList.add("active");

            const targetid = e.currentTarget.dataset.id;
            const filterPlaces = places.filter( item => {
                if(item.category === targetid){
                    return item;
                }
            });
            if(targetid === "all"){
                displayPlacesItems(places);
            }
            else{
                displayPlacesItems(filterPlaces);
            }
        });
    });
}
// End hiking

