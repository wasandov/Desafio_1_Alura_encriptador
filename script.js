const inputTexto = document.querySelector(".inputtexto")
const mensaje = document.querySelector(".mensaje")

/*     `La letra "e" es convertida para "enter"`
    `La letra "i" es convertida para "imes"`
    `La letra "a" es convertida para "ai"`
    `La letra "o" es convertida para "ober"`
    `La letra "u" es convertida para "ufat"` */

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
}
function encriptar(stringEncriptador){
    let matrizCodigo = [["e", "enter"],["i","imes"],["a","ai"],["o", "ober"],["u","ufat"]];
    stringEncriptador = stringEncriptador.toLowerCase();
    for(let posicionMatriz =0; posicionMatriz < matrizCodigo.length; posicionMatriz++){
        if(stringEncriptador.includes(matrizCodigo[posicionMatriz][0])){
            stringEncriptador=stringEncriptador.replaceAll(matrizCodigo[posicionMatriz][0], matrizCodigo[posicionMatriz][1]);
        }
    }
    return stringEncriptador;
}


function btnDesencriptar(){
    const textodesencriptar = desencriptar(inputTexto.value);
    mensaje.value = textodesencriptar;
    }
function desencriptar(stringDencriptador){
    let matrizCodigo = [["enter", "e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    stringDencriptador = stringDencriptador.toLowerCase();
    for(let posicionMatriz =0; posicionMatriz < matrizCodigo.length; posicionMatriz++){
        if(stringDencriptador.includes(matrizCodigo[posicionMatriz][0])){
            stringDencriptador=stringDencriptador.replaceAll(matrizCodigo[posicionMatriz][0], matrizCodigo[posicionMatriz][1]);
        }
    }
    return stringDencriptador;
}

function btnCopiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value="";
    alert("Tecto copiado");


    var content = document.getElementById('mensaje');
    content.select();
    document.execCommand('copy');
    alert("Copied!");
}