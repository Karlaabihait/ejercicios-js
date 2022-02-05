let pizza = prompt('Selecciona el tipo de pizza que desea (personal.mediana,familiar )')
let mediana
let familiar
let personalz
let hawaina
let polloychampiñones
let carnes
let queso
let salami
let cabano
let ninguno
let jamon
let piña
let bordedebocadillo
let salsa


if (pizza == 'personal') {
    alert('escogiste la opcion personal')   
    let tipos = prompt ('selecciona los ingredientes "carnes" "hawaiana" "pollo y champiñones"')
    if (tipos == 'carnes'){
        alert(' pizza personal de carnes')
        let topins = prompt('deseas la pizza con queso , cabano , ninguno . salami')
        if(topins == 'queso'){
            alert('tu pizza sera una personal de carnes con queso')
        }
        if (topins == 'cabano'){
            alert('tu pizza sera una  personal de carnes con cabano')
        }
        if (topins == 'salami'){
            alert('tu pizza sera una personal de carnes con salami')
        }
        else if(topins == 'ninguno'){
            alert('tu pizza sera una  personal de carnes sin queso  sin cabano y sin salami')
        }
    
    }
    if(tipos == 'hawaiana'){
        alert('escogiste una pizza personal hawaina')
        let topins =prompt('deseas la pizza sin piña o jamon o salami')
        if (topins == 'jamon'){
            alert('tu pizza sera una hawaina personal sin piña')
        }
        if (topins == 'piña'){
            alert('su pizza sera una hawaina personal sin jamon')
        }
        else if (topins == 'salami'){
            alert('su pizza sera una hawaina personal sin salami')
        }
    }
    else if(tipos == 'pollos y champiñones'){
        alert('escogiste una personal de pollos y champiñones')
        let topins =prompt('deseas la pizza con queso o salsa o con borde de bocadillo ')
        if (topins == 'salsa'){
            alert('tu pizza sera una pollos y champiñones personal con salsa')
        }
        if (topins == 'queso'){
            alert('su pizza sera una pollos y champiñones personal con queso')
        }
        else if (topins ==  'bordedebocadillo'){
            alert('su pizza sera una de pollos y champiñones personal con borde de bocadillo')
        }
    }
}
if (pizza == 'familiar') {
    alert('seleccionaste una familiar')
    let tipos = prompt ('escogue el tipo de pizza que quiere "carnes" "hawaiana" "pollos y champiñon"')
    if (tipos == 'carnes'){
        alert('escogiste una pizza familiar de carnes')
        let topins = prompt('deseas la pizza con queso  o cabano o ninguno o salami')
        if(topins == 'queso'){
            alert('tu pizza sera una familiar de carnes con queso')
        }
        if (topins == 'cabano'){
            alert('tu pizza sera una  familiar de carnes con canbano')
        }
        if (topins == 'salami'){
            alert('tupizza sera una  familiar de carnes con salami')
        }
        else if(topins == 'ninguno'){
            alert('tu pizza sera una  familiar de carnes sin queso  sin cabano y sin salami')
        }
    
    }
    if(tipos == 'hawaiana'){
        alert('escogiste una pizza familiar hawaina')
        let topins =prompt('deseas la pizza sin piña o jamon o salami')
        if (topins == 'jamon'){
            alert('tu pizza sera una hawaina familiar sin piña')
        }
        if (topins == 'piña'){
            alert('su pizza sera una hawaina familiar sin jamon')
        }
        else if (topins == 'salami'){
            alert('su pizza sera una hawaina familiar sin salami')
        }
    }
    else if(tipos == 'pollos y champiñones'){
        alert('escogiste una familiar de pollos y champiñones')
        let topins =prompt('deseas la pizza con queso o salsa o con borde de bocadillo ')
        if (topins == 'salsa'){
            alert('tu pizza sera una pollos y champiñones familiar con salsa')
        }
        if (topins == 'queso'){
            alert('su pizza sera una pollos y champiñones familiar con queso')
        }
        else if (topins ==  'borde de bocadillo'){
            alert('su pizza sera una de pollos y champiñones familiar con borde de bocadillo')
        }
    }
}else if(pizza == 'mediana') {
    alert('escogiste una mediana')  
    let tipos = prompt ('escogue el tipo de pizza que quiere "carnes" "hawaiana" "pollos y champiñones"')
    if (tipos == 'carnes'){
        alert('escogiste una pizza mediana de carnes')
        let topins = prompt('deseas la pizza con queso  o cabano o ninguno o salami')
        if(topins == 'queso'){
            alert('tu pizza sera una mediana de carnes con queso')
        }
        if (topins == 'cabano'){
            alert('tu pizza sera una mediana de carnes con canbano')
        }
        if (topins == 'salami'){
            alert('tu pizza sera una meidana de carnes con salami')
        }
        else if(topins == 'ninguno'){
            alert('tu pizza sera una  mediana de carnes sin queso  sin cabano y sin salami')
        }
    
    }
    if(tipos == 'hawaiana'){
        alert('escogiste una pizza mediana hawaina')
        let topins =prompt('deseas la pizza sin piña o jamon o salami')
        if (topins == 'jamon'){
            alert('tu pizza sera una hawaina mediana sin piña')
        }
        if (topins == 'piña'){
            alert('su pizza sera una hawaina mediana sin jamon')
        }
        else if (topins == 'salami'){
            alert('su pizza sera una hawaina mediana sin salami')
        }
    }
    else if(tipos == 'pollos y champiñones'){
        alert('escogiste una mediana de pollos y champiñones')
        let topins =prompt('deseas la pizza con queso o salsa o con borde de bocadillo ')
        if (topins == 'salsa'){
            alert('tu pizza sera una pollos y champiñones mediana con salsa')
        }
        if (topins == 'queso'){
            alert('su pizza sera una pollos y champiñones mediana con queso')
        }
        else if (topins ==  'bordedebocadillo'){
            alert('su pizza sera una de pollos y champiñones mediana con borde de bocadillo')
        }
    }
}   
else {
    alert('es invalida tu petición')
}