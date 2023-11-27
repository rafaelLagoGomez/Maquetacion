
const travels = [];

function addNewTravel() {
    const nameInput = document.getElementById("name").value;
    const fromInput = document.getElementById("from").value;
    const destinationInput = document.getElementById("destination").value;
    const numberPersonsInput = document.getElementById("numberPersons").value;
    const dateInput = document.getElementById("date").value;

    const newTravel = {
        name: nameInput,
        from: fromInput,
        destination: destinationInput,
        numberPersons: numberPersonsInput,
        date: dateInput,
    }
    travels.push(newTravel);
    console.log(travels);
}


function showFiltered() {
    const destinationOption = ["canarias", "mallorca", "galicia"];
    const destinationFiltered = travels.filter(travel => {
        const destinationLowCompare = destinationOption.includes(travel.destination.toLowerCase());
        return destinationLowCompare
    });
    // --> para verificar filtro:
    console.log(destinationFiltered);  

    // --> para mostrar en web los filtrados:
    let tabla = "<table><tr><th>Nombre</th><th>Origen</th><th>Destino</th><th>Personas</th><th>Fecha</th></tr>";
    destinationFiltered.forEach (travel => {
        tabla += `<tr><td>${travel.name}</td><td>${travel.from}</td><td>${travel.destination}</td><td>${travel.numberPersons}</td><td>${travel.date}</td></tr>`;
    });
    tabla += "</table>";
    document.getElementById("destinationList").innerHTML = tabla;  
}



