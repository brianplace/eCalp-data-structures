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

export class LinkedList<T> implements IList<T> {
    private headNode: Node<T> | undefined;
    private listCount: number = 0;

    public count: () => number = () => {
        return this.listCount;
    }

    public add: (index: number, element: T) => void = (index, element) => {
        if (index < 0 || index > this.listCount) { 
            throw new Error();
        }

        const newNode: Node<T> = new Node<T>(element);

        if (this.headNode === undefined) {
            this.headNode = newNode;
        }

        this.listCount++;
    }
    
    public get: (index: number) => T = (index) => {
        if (this.headNode === undefined) {
            throw new Error();
        }

        let currentNode: Node<T> = this.headNode;
        let nodeCounter: number = 0;

        while (nodeCounter < index) {
            if (currentNode.nextNode === undefined) {
                throw new Error();
            }

            currentNode = currentNode.nextNode;
        }

        if (currentNode === undefined) {
            throw new Error();
        }

        return currentNode.value;
    }

    public set: (index: number, element: T) => T = (index, element) => {
        if (this.headNode === undefined) {
            throw new Error();
        }

        let currentNode: Node<T> = this.headNode;

        for (let nodeIndex: number = 0; nodeIndex < index; nodeIndex++) {
            if (currentNode.nextNode === undefined) {
                throw new Error();
                
            }

            currentNode = currentNode.nextNode;
        }

        currentNode.value = element;
        return element;
    }
    
    public remove: (index: number) => T = (index) => {
        if (this.headNode === undefined) {
            throw new Error();
        }

        let currentNode: Node<T> = this.headNode;
        let previousNode: Node<T> = this.headNode;

        for (let nodeIndex: number = 0; nodeIndex < index; nodeIndex++) {
            if (currentNode.nextNode === undefined) {
                throw new Error();
            }

            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        }

        previousNode.nextNode = currentNode.nextNode;
        this.listCount--;
        return currentNode.value;
    }
}

class Node<T> {
    public value: T;
    public nextNode: Node<T> | undefined;

    constructor(value: T) {
        this.value = value;
    }
}