var barra = document.querySelectorAll(".barra")
var menuBtt = document.querySelector(".menuBtt")
var configAba = document.querySelector(".configAba")
var display = document.querySelector(".display-vision")
var mensagem = document.querySelector("#mensagem")
var iconEdit = document.querySelectorAll(".iconEdit")
var BttTshirts = document.querySelector("#bttOpenTshirts")
var BttColors = document.querySelector("#bttOpenColors")
var BttFileSelect = document.querySelector("#bttOpenFileSelect")

function MenuAbrir(){
    barra.forEach((e)=>{
        if(e.classList.contains("barra1-1")){
            e.classList.toggle("barra1-1")
            e.classList.toggle("barra1-2")
        }else if(e.classList.contains("barra2-1")){
            e.classList.toggle("barra2-1")
            e.classList.toggle("barra2-2")
        }else if(e.classList.contains("barra3-1")){
            e.classList.toggle("barra3-1")
            e.classList.toggle("barra3-2")
        }
    })
    configAba.style.left = "0px"
    configAba.style.top = "55px"
    configAba.style.transition = "0.5s"
    configAba.style.boxShadow = "0px 0px 5px 1px rgba(0, 0, 0, 0.080)"

    display.style.width = "calc(100% - 150px)"

    menuBtt.removeEventListener("click", MenuAbrir)
    menuBtt.addEventListener("click", MenuFechar)
    if(mensagem.textContent = "Clique no menu e comece a personalizar"){
        mensagem.textContent = "selecione um modelo"
    }
}
menuBtt.addEventListener("click", MenuAbrir)

function MenuFechar(){
    barra.forEach((e)=>{
        if(e.classList.contains("barra1-2")){
            e.classList.toggle("barra1-2")
            e.classList.toggle("barra1-1")
        }else if(e.classList.contains("barra2-2")){
            e.classList.toggle("barra2-1")
            e.classList.toggle("barra2-2")
        }else if(e.classList.contains("barra3-2")){
            e.classList.toggle("barra3-1")
            e.classList.toggle("barra3-2")
        }
    })
    configAba.style.left = "-150px"
    configAba.style.top = "55px"
    configAba.style.transition = "0.5s"
    configAba.style.boxShadow = "none"
    if(ContainerTshirts.classList.contains("boxSelect12")){
        ContainerTshirts.classList.toggle("boxSelect12")
        ContainerTshirts.classList.toggle("boxSelect11")
    }
    if(boxColor.classList.contains("boxSelect22")){
        boxColor.classList.toggle("boxSelect21")
        boxColor.classList.toggle("boxSelect22")
    }
    if(mensagem.innerHTML = "..."){
        mensagem.innerHTML = "selecione um modelo"
    }

    display.removeAttribute('style')
    menuBtt.removeEventListener("click", MenuFechar)
    menuBtt.addEventListener("click", MenuAbrir)
}



var ContainerTshirts = document.querySelector("#t-shirts")
function poupUpTshirtsOpen(){
    ContainerTshirts.classList.toggle("boxSelect11")
    ContainerTshirts.classList.toggle("boxSelect12")
    if(mensagem.textContent = "selecione um modelo"){
        mensagem.textContent = "..."
    }
}
BttTshirts.addEventListener("click", poupUpTshirtsOpen)


var boxColor = document.querySelector("#boxColor")
function poupUpColorOpen(){
    boxColor.classList.toggle("boxSelect21")
    boxColor.classList.toggle("boxSelect22")
}
BttColors.addEventListener("click", poupUpColorOpen)

var fileSelect = document.querySelector("#fileSelect")
function poupUpFileSelect(){
    fileSelect.classList.toggle("boxSelect31")
    fileSelect.classList.toggle("boxSelect32")
}
BttFileSelect.addEventListener("click", poupUpFileSelect)