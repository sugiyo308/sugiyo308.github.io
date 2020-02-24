let menu = [
    ["index.html", "Beranda"],
    [java.bab1.html", "Pengenalan JavaScript"],
    ["jakpus.html", "Provinsi DKI Jakarta"],
            ];

document.write("<ul>");
let tampil_menu = menu.length;
for (i = 0; i < tampil_menu; i++) {
    document.write("<li>");
    document.write("<a href=" + "\"" + menu[i][0] + "\"" + "\>" + menu[i][1] + "</a>");
    document.write("</li>");
}
document.write("</ul>");
