
const CreateDiv = document.getElementById('crear-div')
const zoneCreateDiv = document.getElementById('zone-create-div')
const createDiv = () => {
    const nodeDiv = document.createElement('div')
    nodeDiv.classList.add('new-div', 'col-4', 'm-3')
    zoneCreateDiv.appendChild(nodeDiv)
}
CreateDiv.onclick = function(){
    createDiv()
}