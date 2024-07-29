
let stickyNavbar = document.querySelector("nav.navbar")

document.addEventListener("scroll",
    () => {
        if (window.scrollY > 70) {
            stickyNavbar.classList.add("scrolling")
        } else {
            stickyNavbar.classList.remove("scrolling")
        }
    })

    let slideIndex = 0;
    const slides = document.querySelectorAll('.slider');
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'inactive');
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.add('inactive');
            }
        });
    }
    
    function plusSlide() {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        showSlide(slideIndex);
    }
    
    function autoSlides() {
        plusSlide();
        setTimeout(autoSlides, 3000); // Change slide every 3 seconds
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        showSlide(slideIndex);
        autoSlides();
    });
    
    



function navbar_click(){
    let side_bar = document.getElementById("side-bar-menu");
    let y = document.getElementById("icon-xmark")
    let dropdwon_content = document.getElementsByClassName("dropdown-content")
    if (side_bar.className === "container-side-bar" || y.className === "icon-xmark") {
        side_bar.className += " responsive"
        y.className += " responsive"
    } else {
        side_bar.className = "container-side-bar"
        y.className = "icon-xmark"
    }
    
    for (let index = 4; index < dropdwon_content.length; index++) {
        const element = dropdwon_content[index];
        element.className = "dropdown-content"
        
    }

}

function sideBarDropdown(id) {
    let x = document.getElementById(id)
    let elementDropdown = x.childNodes[3]
    if (elementDropdown.className === "dropdown-content") {
        elementDropdown.className += " active"
        
    }else{
        elementDropdown.className = "dropdown-content"
    }
}