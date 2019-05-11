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
