let sia = document.getElementById('sia')

const marcar =  (image) => {
image.style.opacity = 0.2
    
}
const desmarca = (image) => {
    image.style.opacity = 1
}

sia.onmouseover = funtion(){ 
    marcar(sia)
}
sia.onmouseout = funtion (){
    desmarca(sia)
}