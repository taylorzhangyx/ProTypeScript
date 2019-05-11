const firstArray = [1, 2, 3, 4];
const secondArray: [number, number, number] = [5, 6, 7];
// combinedArray = [1,2,3,4,5,6,7]
const combinedArray = [...firstArray, ...secondArray];

const speaker = {
    wire: '1',
    handle: '2'
}
const projector = {
    lens: '33',
    power: '44'
}

const speakerProjector = { ...speaker, ...projector };
console.log(speakerProjector);

function sum(a: number, b: number, c: number): number {
    return a + b + c;
}
const sumresult = sum(...secondArray);
console.log(sumresult);//
secondArray.pop();
const errorresult = sum(...secondArray);
console.log(errorresult);//NaN