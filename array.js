
window.onload = cargarImagen;
var i = 0;
var misImagenes = new Array(10);

function cargarImagen() {
    misImagenes[0] = "img2/1.jpg";
    misImagenes[1] = "img2/2.jpg";
    misImagenes[2] = "img2/3.jpg";
    misImagenes[3] = "img2/4.jpg";
    misImagenes[4] = "img2/5.jpg";
    misImagenes[5] = "img2/6.jpg";
    misImagenes[6] = "img2/7.jpg";
    misImagenes[7] = "img2/8.jpg";
    misImagenes[8] = "img2/9.jpg";
    misImagenes[9] = "img2/10.jpg";
    document.imgSrc.src=misImagenes[i];
}
function siguiente() {
    if (i>=9) {
        i = misImagenes.length-1;
        window.alert("ultima imagen en la galeria");
    } else {
        i++;
     }
     document.imgSrc.src=misImagenes[i];
}

function anterior() {
    if (i<1){
        i = 0;
        window.alert("primera imagen en la galeria");
    } else {
        i--;
    }
    document.imgSrc.src=misImagenes[i];
}