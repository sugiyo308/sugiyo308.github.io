const syarat = [
    "Menguasai Windows Operating System yang baik, seperti bagaimana membuka start menu, mengaktifkan program aplikasi,membuka windows Explorer, mengerti folder,  menyimpan file ke dalam folder dan sebagainya.", 
    "Mengerti bagaimana menggunakan salah satu atau semua editor seperti Notepad, EditPlus, visual studio code atau yang lainnya.", 
    "mengerti bagaimana cara menggunakan Web Browser seperti Internet Explorer, Mozilla, Opera, Google Chrome dsb)",
    "Telah menguasai HTML dan CSS.",
    "Karena tutorial ini lebih diperuntukkan bagi tunanetra yang ingin  belajar JavaScript, maka bagi tunanetra yang ingin belajar JavaScript dengan buku ini harus bisa menggunakan screen reader dengan baik, sehingga tahu bagaimana menelusuri suatu text yang ditulis dengan huruf kapital atau huruf biasa, tahu bagaimana tanda baca diucapkan oleh screen reader dan sebagainya. Meskipun ada banyak screen reader yang ada di masyarakat tunanetra pengguna komputer, Di dalam buku ini hanya akan dibahas menggunakan NVDA saja.",
];

document.write("<ol>");
const panjangMenu = syarat.length;
for (i = 0; i < panjangMenu; i++) {
    document.write("<li>" + syarat[i]);
}