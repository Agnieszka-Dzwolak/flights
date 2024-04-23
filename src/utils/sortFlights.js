/**
 * Sorts the flights by departure date
 *
 * @param {object} - the object of flights data.
 * @property {array} data.flights - flights to be sorted.
 * @returns {object} - flights sorted by date.
 */

const sortFlights = (data) => {
    const organizedFlights = data.flights.sort((a, b) => {
        return (
            new Date(a.departureDate).getTime() -
            new Date(b.departureDate).getTime()
        );
    });
    return organizedFlights;
};

export default sortFlights;
