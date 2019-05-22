// Interface can be extended
interface car {
    readonly vin: number;
    door: number;
}
interface car {
    dashboard: string;
    plate: string;
}
class auto implements car {
    vin = 202;
    door = 100;
    dashboard = 'big';
    plate = 'cal';
}

const myauto = new auto();
myauto.vin = 2222;

// Hybrid type
interface simpleDocument {
    (selector: string): HTMLElement;
    notify(message: string): void;
}
const prepareDocument = function (): simpleDocument {
    let doc = <simpleDocument>function (selector: string) {
        return document.getElementById(selector);
    }
    doc.notify = (message: string) => {
        alert(message);
    }
    return doc;
}
const $ = prepareDocument();

const element = $('div');
$.notify(element.id);