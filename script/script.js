const navProduct = document.querySelector('.navbar__link--product');
const sectionTwo = document.querySelector('.sectionProduct__2');

const navAlbum = document.querySelector('.navbar__link--album');
const sectionAlbum = document.querySelector('.sectionAlbum');

const sectionProfolio = document.querySelector(".profolio");
const  profolio = document.querySelector(".navbar__link--profolio");

const sectionprojects = document.querySelector(".projects");
const  projects = document.querySelector(".navbar__link--projects");

navProduct.addEventListener("click", function(e) {
    e.preventDefault();
    sectionTwo.scrollIntoView({behavior:'smooth'});
});

navAlbum.addEventListener("click", function(e) {
    e.preventDefault();
    sectionAlbum.scrollIntoView({behavior:'smooth'});
});

profolio.addEventListener("click", function(e) {
    e.preventDefault();
    sectionProfolio.scrollIntoView({behavior:'smooth'});
});

projects.addEventListener("click", function(e) {
    e.preventDefault();
    sectionprojects.scrollIntoView({behavior:'smooth'});
});