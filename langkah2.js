const langkah2 = [
    "Tekan tombol ctrl+s.",
    "Tulis nama file yang diinginkan misalnya script 01.hello_world.",
    "Tekan tab sekali, tekan huruf h sampai komputer mengatakan “html”.",
    "Tekan tab beberapa kali sampai ketemu tree view.",
    "Tekan panah bawah untuk mencari drive tempat penyimpanan. Sebagai contoh saya membuat folder tempat penyimpanan di dalam drive d, tekan enter.",
    "Tekan panah kanan untuk membuka drive tersebut.",
    "Tekan panah bawah untuk mencari folder dimaksud. Sebagai contoh saya menyiapkan folder tempat penyimpanan JavaScript bernama belajar_javascript, tekan enter",
    "Tekan shift+tab sampai ketemu save button, tekan enter.",
];

document.write("<ul>");
const tampilLangkah2 = langkah2.length;
for (i = 0; i < tampilLangkah2; i++) {
    document.write("<li>" + langkah2[i] + "</li>");
}
document.write("</ul>")