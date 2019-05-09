function typeGuards(param: number | string){
    // Type Guard can help compiler narrow the type down
    if(typeof param === 'number'){
        param.toFixed();
    }
    else{
        param.length;
    }
}