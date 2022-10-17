// Scrolling Navbar
window.addEventListener('scroll', function(){
    var header = document.querySelector('.uni-scrolling-navbar');
    header.classList.toggle("sticky", window.scrollY > 0);
});


// For Navigation
function openNav() {
var element = document.getElementById("sidebar");
   element.classList.toggle("main");
}
  

// For Checkbox in top university
function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

// search icon JS

var about = document.getElementById("sub-menu");

function showAbout() {
    about.classList.toggle("small-screen");
}
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show-search");
}