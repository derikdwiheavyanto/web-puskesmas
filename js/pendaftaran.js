import {user} from './dataset/user.js';

export function changeButton(value) {
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

export const cari = (e)=>{
    e.preventDefault()
    let no_rm = document.getElementById('no_rm_pasien_lama')
    let nik = document.getElementById('nik_pasien_lama')
    let pendaftaran = document.getElementById('pendaftaran')
    let found = false

    user.forEach((value)=>{
        if ((Number(no_rm.value) === value.no_rekam_medis) && (Number(nik.value) === value.nik) ) {
            found = true
            Swal.fire({
                icon: "success",
                title: "Berhasil",
                text: "Lanjutkan melakukan pendaftaran",
                confirmButtonColor: '#17610B',
              }).then((_) => {
                pendaftaran.classList.add('active')    
            });
            
        }
    })

    if(!found){
        Swal.fire({
            icon: "error",
            title: "Tidak Ditemukan",
            text: "Pastikan Nomor Rekam Medis dan NIK benar atau melakukan pendaftaran pada menu pasien baru",
            confirmButtonColor: '#17610B',
          });
        if (pendaftaran.classList.contains('active')) {
            pendaftaran.classList.remove('active')
        }
    }
}

export const daftarPasienBaru = (e)=>{
    
}