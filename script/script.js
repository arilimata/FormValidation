function validateForm() {
    if (document.forms["formPendaftaran"]["nama"].value == "") {
        alert("Nama Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["nama"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["nim"].value == "") {
        alert("NIM Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["nim"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["mataKuliah"].selectedIndex < 1) {
        alert("Pilih Mata Kuliah.");
        document.forms["formPendaftaran"]["mataKuliah"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["namaDosen"].selectedIndex < 1) {
        alert("Pilih Mata Kuliah.");
        document.forms["formPendaftaran"]["namaDosen"].focus();
        return false;
    }
}