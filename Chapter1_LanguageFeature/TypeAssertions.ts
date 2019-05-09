interface Apartment {
    room: string;
    door: string;
}

interface House {
    backYard: string;
    room: string;
    door: string;
}

function getProperty(): Apartment | House {
    return {
        backYard: 'big',
        room: 'small',
        door: 'solid'
    };
}

const property = getProperty();
// Type Assertion
const backyard = (<House>property).backYard;
const backyardinnumber = <number><any>property; // Compiler won't give any error here