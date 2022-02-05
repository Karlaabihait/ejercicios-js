let pregunta = prompt('Escribe la palabra que quieras traducir (casa,mesa perro o gato)')
let casa = document.getElementById('casa')
let mesa = document.getElementById('mesa')
let gato = document.getElementById('gato')
let perro = document.getElementById('perro')


switch (pregunta) {
    case "casa":
        alert("House");
        casa.classList.remove('d-none') 
        break;

        case "mesa":
            alert("Table");
            mesa.classList.remove('d-none')
            break;

            case "perro":
                alert ("Dog");
                perro.classList.remove('d-none')
                break;

            case "gato":
            alert (" Cat");
            gato.classList.remove('d-none')
            break;

    default:
        alert("Escribe lo que quieras traducir")
        break;
}