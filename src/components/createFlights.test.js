/**
 * @jest-environment jsdom
 */

import createFlights from './createFlights.js';

describe('create flights elements', () => {
    const flightDom = createFlights({
        id: 1,
        name: 'VQ-903',
        plane: 'ATR725',
        departureDate: '2023-08-05 13:45:00',
        origin: 'DAC',
        arrivalDate: '2023-08-05 14:40:00',
        destination: 'CGP',
        stops: 0,
    });

    test('nodeName -> DIV', () => {
        expect(flightDom.nodeName).toEqual('DIV');
    });
    test('class name -> flightDom', () => {
        expect(flightDom.className).toEqual('flightDom');
    });
    test('child element count', () => {
        expect(flightDom.childElementCount).toEqual(7);
    });
    test('check the first child', () => {
        const firstChild = flightDom.children[0];
        expect(firstChild.nodeName).toEqual('DIV');
        expect(firstChild.className).toEqual('name');
        expect(firstChild.innerText).toEqual('VQ-903');
    });
});
