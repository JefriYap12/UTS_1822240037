// Created by
// Jefri/1822240037

let pesanan = [];
let daftarPesanan = document.getElementById("daftarPesanan");

const simpanPesanan = () => {
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const p = document.getElementById("pesanan").value;

    let dataPemesan = { nama: nama, email: email, p: p };
    let pesan = localStorage.getItem("pesanan");

    if (pesan != null) {
        pesanan = JSON.parse(pesan);
        }

    pesanan.push(dataPemesan);

    localStorage.setItem("pesanan", JSON.stringify(pesanan));
    }

    const tampilPesanan = () => {
        pesanan = [];
        const daftarPesanan = document.getElementById("daftarPesanan");

       let pesan = localStorage.getItem("pesanan");

       if (pesan != null) {
           let daftarPesanan = JSON.parse(pesan);
           console.log(daftarPesanan);
           daftarPesanan.forEach(showPesanan);
       }

       function showPesanan(item, index)  {
        daftarPesanan.innerHTML += "<tr id='row"+index+"'><td>"+item.nama+"</td><td>"+item.email+"</td><td>"+item.p+"</td></tr>"
        }
    }