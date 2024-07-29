function submitPengaduan(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const pesan = document.getElementById('pesan').value;
    if (email && pesan) {
        Swal.fire({
            title: 'Terima Kasih!',
            text: 'Pengaduan anda telah kami terima.',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#17610B'
        }).then((result) => {
            if (result.isConfirmed) {
                document.getElementById('form-pengaduan').reset();
            }
        });
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Harap isi semua kolom.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
}

function submitKritikSaran(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const pesan = document.getElementById('pesan').value;
    if (email && pesan) {
        Swal.fire({
            title: 'Terima Kasih!',
            text: 'Kritik dan Saran anda telah kami terima.',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#17610B'
        }).then((result) => {
            if (result.isConfirmed) {
                document.getElementById('form-pengaduan').reset();
            }
        });
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Harap isi semua kolom.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
}