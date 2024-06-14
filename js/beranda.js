
let stickyNavbar = document.querySelector("nav.navbar")

document.addEventListener("scroll",
    () => {
        if (window.scrollY > 70) {
            stickyNavbar.classList.add("scrolling")
        } else {
            stickyNavbar.classList.remove("scrolling")
        }
    })

let indexSlider = 0;
showSlider(indexSlider, true)

function plusSlide(n, cond) {
    showSlider(indexSlider += n, cond)
}

function showSlider(n, cond) {
    let x = document.getElementsByClassName("slider")
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none"
    }
    
    if (n > x.length - 1) { indexSlider = 0 }
    if (n < 0) { indexSlider = x.length - 1 }
    x[indexSlider].style.display = "block"

    if (cond) {
        setTimeout(function () {
            showSlider(indexSlider += 1, true)
        }, 15000)
    }
}


// async function initMap() {
//     let map;
//     const position = { lat: -8.209540569225295, lng: 111.78358786012056 };
//     const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

//     map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 19,
//         center: position,
//         mapId: "a913de24bcf3badc",
//     });

//     new AdvancedMarkerElement({
//         map: map,
//         position: position,
//         title: "Puskesmas Besuki",
//     });
// }



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
    // console.log(elementDropdown)
    if (elementDropdown.className === "dropdown-content") {
        elementDropdown.className += " active"
        
    }else{
        elementDropdown.className = "dropdown-content"
    }
}


// function inject_tag_script() {
//     var scripts = [
//         "https://kit.fontawesome.com/1d87bd3f87.js"
//     ];

//     var scriptTarget = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0])
//     for (var index = 0; index < scripts.length; index++) {
//         var yourScript = document.createElement('script'); 
//         yourScript.src = scripts[index];
//         yourScript.crossOrigin = "anonymous";
//         scriptTarget.appendChild(yourScript);
//     }
//   };

//   inject_tag_script()