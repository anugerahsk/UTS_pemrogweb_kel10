function showForm(mobil) {
  const formSection = document.getElementById('rentalForm');
  formSection.scrollIntoView({ behavior: 'smooth' });
}

// Modal logic
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("sewaModal");
  const span = document.getElementsByClassName("close")[0];
  const hargaInput = document.getElementById("harga");
  const hariInput = document.getElementById("hari");
  const totalInput = document.getElementById("total");

  document.querySelectorAll(".mobil-info button").forEach(button => {
    button.addEventListener("click", function () {
      const hargaText = this.parentElement.querySelector("h4").innerText;
      const harga = parseInt(hargaText.replace(/\D/g, ""));
      hargaInput.value = harga;
      totalInput.value = "";
      hariInput.value = "";
      modal.style.display = "block";
    });
  });

  span.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  hariInput.addEventListener("input", function () {
    const hari = parseInt(this.value);
    const harga = parseInt(hargaInput.value);
    if (!isNaN(hari) && !isNaN(harga)) {
      totalInput.value = harga * hari;
    }
  });

  // 
  document.getElementById("formSewa").addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const tanggal = document.getElementById("tanggal").value;
    const hari = document.getElementById("hari").value;
    const total = document.getElementById("total").value;

    // Sembunyikan modal dan tampilkan verifikasi
    modal.style.display = "none";
    document.getElementById("verifikasiPembayaran").style.display = "block";

    // Isi data ke verifikasi pembayaran
    document.getElementById("verNama").innerText = nama;
    document.getElementById("verEmail").innerText = email;
    document.getElementById("verTanggal").innerText = tanggal;
    document.getElementById("verHari").innerText = hari;
    document.getElementById("verTotal").innerText = total;

    // Countdown 3 jam
    let countDownTime = new Date().getTime() + 3 * 60 * 60 * 1000;
    let countdown = setInterval(function () {
      let now = new Date().getTime();
      let distance = countDownTime - now;

      if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerText = "Waktu pembayaran telah habis!";
        return;
      }

      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("countdown").innerText = `Sisa waktu: ${hours} jam ${minutes} menit ${seconds} detik`;
    }, 1000);

    // Reset form
    this.reset();
  });
});
