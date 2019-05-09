function typeGuards(param: number | string){
    // Type Guard can help compiler narrow the type down
    if(typeof param === 'number'){
        param.toFixed();
    }
    else{
        param.length;
    }
}

// Custom type guard
interface Apple{
    room: string;
    yard: string;
}
interface Peach{
    leasingOffice: string;
}

// Custom type guard function, could be used as type guard
function isApartment(apartment: Peach | any): apartment is Peach{
    if(apartment.leasingOffice){
        return true;
    }
    else{
        return false;
    }
}

function houseHunting(place: Apple| Peach){
    if(isApartment(place)){
        place.leasingOffice = 'office';
    }
    else{
        place.room = 'big';
    }
}
