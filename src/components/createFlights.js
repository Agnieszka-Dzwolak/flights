/**
 * Creation of flight element.
 *
 * @param {object} flight - flight object.
 * @returns {HTMLElement} - flight element.
 */

const createFlights = (flight) => {
    //create a container
    const flightDom = document.createElement('div');
    flightDom.classList.add('flightDom');

    //create a name
    const name = document.createElement('div');
    name.classList.add('name');
    //name.className = 'name';
    name.innerText = flight.name;

    //create a plane
    const plane = document.createElement('div');
    plane.classList.add('plane');
    plane.innerText = flight.plane;

    //create departure date
    const departureDate = document.createElement('div');
    departureDate.classList.add('departureDateDom');
    departureDate.innerText = flight.departureDate;

    //create origin
    const origin = document.createElement('div');
    origin.classList.add('origin');
    origin.innerText = flight.origin;

    //create arrival date
    const arrivalDate = document.createElement('div');
    arrivalDate.classList.add('arrivalDateDom');
    arrivalDate.innerText = flight.arrivalDate;

    //destination
    const destination = document.createElement('div');
    destination.classList.add('destination');
    destination.innerText = flight.destination;

    //create stops
    const stops = document.createElement('div');
    stops.classList.add('stops');
    stops.innerText = flight.stops;

    flightDom.append(
        name,
        plane,
        departureDate,
        origin,
        arrivalDate,
        destination,
        stops,
    );
    return flightDom;
};

export default createFlights;
