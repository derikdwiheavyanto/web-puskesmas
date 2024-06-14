function changeButton(value) {
    let button = document.getElementsByClassName("button")
    let pasienLama = document.getElementById("pasien-lama")
    let pasienBaru = document.getElementById("pasien-baru")

    if (value == 0) {
        pasienLama.style.display = "block"
        pasienBaru.style.display = "none"
        button[0].classList.add("active")
        button[1].classList.remove("active")
        
    }

    if (value == 1) {
        pasienBaru.style.display = "block"
        pasienLama.style.display = "none"
        button[0].classList.remove("active")
        button[1].classList.add("active")
    }

    
}