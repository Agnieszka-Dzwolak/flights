import data from '../data.js';
import dom from '../dom.js';

const loadHandler = () => {
    const organizedFlights = data.flights.sort((a, b) => {
        return (
            new Date(a.departureDate).getTime() -
            new Date(b.departureDate).getTime()
        );
    });
    organizedFlights.forEach((flight) => {
        //create a container
        const container = document.createElement('div');
        container.classList.add('container');

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

        container.append(
            name,
            plane,
            departureDate,
            origin,
            arrivalDate,
            destination,
            stops,
        );
        dom.container.appendChild(container);
    });
};

export default loadHandler;
