let data = [];

fetch("data.json")
  .then((res) => res.json())
  .then((json) => {
    data = json;
  })
  .catch((err) => {
    document.getElementById("output").textContent = "Gagal memuat data!";
    console.error(err);
  });

function formatData(d) {
  return `
🟢 Nama: ${d.nama}
📆 Tanggal Lahir: ${d.tanggal_lahir}
👤 Jenis Kelamin: ${d.jenis_kelamin}
🆔 NIK: ${d.nik}
🕌 Agama: ${d.agama}
🏫 Sekolah Asal: ${d.sekolah_asal}
📏 Tinggi: ${d.tinggi_badan} | ⚖ Berat: ${d.berat_badan}
👪 Saudara Kandung: ${d.jumlah_saudara_kandung}
🏠 Jenis Tinggal: ${d.jenis_tinggal}
📱 No HP: ${d.telepon_hp}

📍 Alamat:
  Jalan: ${d.alamat.jalan}
  Dusun: ${d.alamat.dusun}, RT ${d.alamat.rt}/RW ${d.alamat.rw}
  Desa: ${d.alamat.desa_kelurahan}
  Kecamatan: ${d.alamat.kecamatan}
  Kota/Kabupaten: ${d.alamat.kabupaten_kota}
  Kode Pos: ${d.alamat.kode_pos}

👨 Ayah:
  Nama: ${d.ayah.nama}
  Lahir: ${d.ayah.tahun_lahir}
  Pekerjaan: ${d.ayah.pekerjaan}
  Pendidikan: ${d.ayah.pendidikan}
  Penghasilan: ${d.ayah.penghasilan_bulanan}

👩 Ibu:
  Nama: ${d.ibu.nama}
  Lahir: ${d.ibu.tahun_lahir}
  Pekerjaan: ${d.ibu.pekerjaan}
  Pendidikan: ${d.ibu.pendidikan}
  Penghasilan: ${d.ibu.penghasilan_bulanan}
`;
}

document.getElementById("search").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const found = data.find((d) => d.nama.toLowerCase().includes(keyword));
  const output = document.getElementById("output");

  if (keyword === "") {
    output.textContent = "Menunggu pencarian...";
  } else if (found) {
    output.textContent = `Tuan, datamu ditemukan:\n\n${formatData(found)}`;
  } else {
    output.textContent = "Kak, datanya tidak ditemukan.";
  }
});
