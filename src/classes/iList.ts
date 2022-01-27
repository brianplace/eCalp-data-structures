export interface IList<T> {
    count: () => number;
    add: (index: number, element: T) => void;
    get: (index: number) => T;
    set: (index: number, element: T) => T;
    remove: (index: number) => T;
}

export class ArrayList<T> implements IList<T> {
    private arrayList: T[] = [];

    public count: () => number = () => {
        return this.arrayList.length;
    }

    public add: (index: number, element: T) => void = (index, element) => {
        if (index < 0 || index > this.arrayList.length) {
            throw new Error();
        }

        if (this.arrayList.length === 0) {
            this.arrayList.push(element);
        } else {
            const newArray: T[] = [];

            for (let baseIndex: number = 0, newIndex: number = 0; baseIndex < this.arrayList.length; baseIndex++, newIndex++) {
                if (baseIndex === index) {
                    newArray[newIndex] = element;
                    newIndex++;
                } else {
                    newArray[newIndex] = this.arrayList[baseIndex];
                }
            }

            this.arrayList = newArray;
        }
    }

    public get: (index: number) => T = (index) => {
        if (index < 0 || index >= this.count()) {
            throw new Error();
        }
        
        return this.arrayList[index];
    }

    public set: (index: number, element: T) => T = (index, element) => {
        if (index < 0 || index >= this.count()) {
            throw new Error();
        }

        this.arrayList[index] = element;
        return element;
    }

    public remove: (index: number) => T = (index) => {
        if (index < 0 || index >= this.arrayList.length) {
            throw new Error();
        }

        let returnValue: T | undefined = undefined;
        const newArray: T[] = [];

        for (let baseIndex: number = 0, newIndex: number = 0; baseIndex < this.arrayList.length; baseIndex++, newIndex++) {
            if (baseIndex === index) {
                returnValue = this.arrayList[baseIndex];
                baseIndex++;
            } else {
                newArray[newIndex] = this.arrayList[baseIndex];
            }
        }

        this.arrayList = newArray;
        return returnValue as T;
    }
}