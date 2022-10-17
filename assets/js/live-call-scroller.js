const scroller = document.getElementById('scroll');
scroller.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
})


let btn = document.getElementById('contact-button');
let div = document.getElementById('toggle');

btn.addEventListener('click', () => {
    if (div.style.display === "none") {
        div.style.display = "block";

    }
    else {
        div.style.display = "none";
    }
}

)