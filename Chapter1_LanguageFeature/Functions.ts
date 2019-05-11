// Rest Parameters
function UseRestParameters(...listOfThing: number[]): void {
    // The listOfThing here is possible an empty array
    listOfThing.forEach(thing => {
        console.log(`Element in list of Thing: ${thing}`);
    });
}

// Overload
/**
 * 1. Prefer not to use it. Use union type instead
 * 2. There is only one implementation method that carries the compatible type of all the overloads
 * 3. The overload and the implementation should have the same signature - method name.
 * 4. Use optional or Rest Parameter instead for the extra parameters in impelentation method to match the overload one.
 */

// Speicalized Overload
class Finder {
    FindEntryByCollection(collectionname: 'document'): string;
    FindEntryByCollection(collectionname: 'emailthread'): string;
    FindEntryByCollection(collectionname: 'phoneCall'): string;
    //    FindEntryByCollection(collectionname: string): string;
    FindEntryByCollection(collectionname: string): string {
        return collectionname.length.toString();
    }
}
const finderInst = new Finder();
const collectionresult = finderInst.FindEntryByCollection('document');

// Arrow Function
const arrowFunction1 = (a: number, b: number) => a + b;
const arrowFunctionresult1 = arrowFunction1(1, 2);

const arrowReturnObject = (a: number, b: number) => ({ a: a, b: b });// This will return an object

const scopeLosingExample = {
    text: 'property from loasing scope',
    run: function () {
        setTimeout(function () {
            // console.log(this.text);
        }, 1000);
    }
}

const scopePersistingExample = {
    text: 'property from persisting scope',
    run: function () {
        setTimeout(() => {
            console.log(this.text);
        }, 1000);
    }
}

//Funtion Currying
const multiply = (a: number) => (b: number) => a * b;
const numberA = multiply(2)(3); //6
const multiplyBy10 = multiply(10);
const num100 = multiplyBy10(10);
const num1000 = multiplyBy10(num100);
//currying usage on logging
const log = (source: string) => (message: string) => console.log(source, message);
const userloger = log('ZhangYuxin logged:');
userloger('message1');
userloger('message2');