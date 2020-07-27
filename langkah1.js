const langkah1 = [
    "Siapkan sebuah folder untuk menyimpan file latihan kita. Sebagai contoh, saya membuat folder belajar_javascript di drive D. Anda boleh membuat folder yang sama maupun menggunakan folder lain.",
    "Aktifkan program Visual Studio Code.", 
    "Berikutnya tulis script berikut.",
];

document.write("<ol>");
const tampilLangkah1 = langkah1.length;
for (i = 0; i < tampilLangkah1; i++) {
 document.write("<li>" + langkah1[i] + "</li>");
}
document.write("</ol>");