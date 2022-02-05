let Name = document.getElementById('Name')
const sueldo = "5.000.000"; 

let mensaje = alert('Un placer saludarte ; para saber tu sueldo, escribe tu nombre')

Name.onclick = function (){
    Name = prompt ('Insertar Nombre de Usuario')
    alert(" Hola  " + Name + " tu sueldo es un total de $" + sueldo);
}
Swal.fire(
    'The Internet?',
    'That thing is still around?',
    'question'
  )