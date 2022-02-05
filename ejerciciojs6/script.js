let lasagna = document.getElementById('lasagna')
let bandejapaisa = document.getElementById('bandejapaisa')
let almuerzo = document.getElementById('almuerzo')
let karla = document.getElementById('karla')
let abihait = document.getElementById('abihait')
let avila = document.getElementById('avila')



const desvanecer = (image) =>( 
    image.style.visibility="hidden"
)
const revelar =(image) =>(
    image.style.visibility="visible"
)
lasagna.onmouseover = function (){
    desvanecer(lasagna)
}

bandejapaisa.onmouseover= function(){
    desvanecer(bandejapaisa)
}
almuerzo.onmouseover = function(){
    desvanecer(almuerzo)
}

karla.onclick = function(){
    revelar(lasagna)
}
abihait.onclick = function(){
    revelar(bandejapaisa)
}
avila.onclick = function(){
    revelar(almuerzo)
}