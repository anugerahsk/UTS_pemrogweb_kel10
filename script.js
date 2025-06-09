const modal = document.getElementById("sewaModal");  // kecil semua
const span = document.getElementsByClassName("close")[0];  // kecil semua
const hargaInput = document.getElementById("harga");
const hariInput = document.getElementById("hari");
const totalInput = document.getElementById("total");
const mobilInput = document.getElementById("mobil");

// Event klik tombol sewa
document.querySelectorAll(".mobil-info button").forEach(button => {
  button.addEventListener("click", function () {
    const mobilNama = this.parentElement.querySelector("h2").innerText;
    const hargaText = this.parentElement.querySelector("h4").innerText;
    const harga = parseInt(hargaText.replace(/\D/g, ""));

    mobilInput.value = mobilNama;
    hargaInput.value = harga;
    totalInput.value = "";
    hariInput.value = "";
    modal.style.display = "block";
  });
});

// Tutup modal
span.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
  if (event.target == modal) modal.style.display = "none";
};

// Hitung total harga otomatis
hariInput.addEventListener("input", () => {
  const hari = parseInt(hariInput.value);
  const harga = parseInt(hargaInput.value);
  if (!isNaN(hari) && !isNaN(harga)) {
    totalInput.value = harga * hari;
  } else {
    totalInput.value = "";
  }
});

// Submit form kirim data via URL query string
document.getElementById("formSewa").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const tanggal = document.getElementById("tanggal").value;
  const hari = document.getElementById("hari").value;
  const mobil = document.getElementById("mobil").value;
  const harga = document.getElementById("harga").value;
  const total = document.getElementById("total").value;

  const url = `invoice.html?nama=${encodeURIComponent(nama)}&email=${encodeURIComponent(email)}&tanggal=${tanggal}&hari=${hari}&mobil=${mobil}&harga=${harga}&total=${total}`;
  
  window.location.href = url;
});