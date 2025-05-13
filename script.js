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

  document.getElementById("formSewa").addEventListener("submit", function (e) {
    e.preventDefault();
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const tanggal = document.getElementById("tanggal").value;
    const hari = document.getElementById("hari").value;
    const total = document.getElementById("total").value;

    alert(
      `Penyewaan berhasil!\n\n` +
      `Nama: ${nama}\n` +
      `Email: ${email}\n` +
      `Tanggal: ${tanggal}\n` +
      `Lama Sewa: ${hari} hari\n` +
      `Total Harga: Rp ${total}`
    );
    modal.style.display = "none";
    this.reset();
  });
});

