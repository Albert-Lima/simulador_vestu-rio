var barra = document.querySelectorAll(".barra")
var menuBtt = document.querySelector(".menuBtt")
var configAba = document.querySelector(".configAba")
var display = document.querySelector(".display-vision")
var mensagem = document.querySelector("#mensagem")

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
    configAba.style.boxShadow = "0px 5px 10px 5px rgba(0, 0, 0, 0.080)"

    display.style.width = "calc(100% - 150px)"

    menuBtt.removeEventListener("click", MenuAbrir)
    menuBtt.addEventListener("click", MenuFechar)
    if(mensagem.textContent = "Clique no menu e comece a personalizar"){
        mensagem.textContent = "funcionou"
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
    configAba.style.top = "50px"
    configAba.style.transition = "0.5s"
    configAba.style.boxShadow = "none"

    display.removeAttribute('style')
    menuBtt.removeEventListener("click", MenuFechar)
    menuBtt.addEventListener("click", MenuAbrir)
}