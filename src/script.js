const { brotliDecompressSync } = require("zlib");

function onClickDrop(){
    var div=document.getElementsByClassName("myDropdown");
    // div.style.display = div.style.display == "none" ? "block" : "none";
    div.classList.toggle("show");
    document.body.style.overflow="hidden";
}
function onScrollSTop(){
    document.body.style.overflow="hidden";
}