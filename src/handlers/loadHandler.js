import data from '../data.js';
import dom from '../dom.js';
import sortFlights from '../utils/sortFlights.js';
import createFlights from '../components/createFlights.js';

const loadHandler = () => {
    const organizedFlights = sortFlights(data);

    organizedFlights.forEach((flight) => {
        const flightDom = createFlights(flight);

        dom.container.appendChild(flightDom);
    });
};

export default loadHandler;
