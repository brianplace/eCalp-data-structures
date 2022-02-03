import { expect } from 'chai';
import { IList, List, ILinkedList, LinkedList } from '../classes/iList';

describe('ListsTests', () => {
    it('creating an empty list has count of 0', () => {
        const list: IList<number> = new List<number>();
        expect(list.count()).to.equal(0);
    });

    it('adding an element to a list has count of 1', () => {
        const list: IList<number> = new List<number>();
        list.add(0, 5);
        expect(list.count()).to.equal(1);
    });

    it('element added to empty list will be returned by get at 0', () => {
        const list: IList<number> = new List<number>();
        list.add(0, 5);
        expect(list.get(0)).to.equal(5);
    });

    it('element added at -1 throws an error', () => {
        const list: IList<number> = new List<number>();
        expect(() => list.add(-1, 5)).to.throw();
    });

    it('element added at list count + 1 throws an error', () => {
        const list: IList<number> = new List<number>();
        expect(() => list.add(list.count() + 1, 5)).to.throw();
    });

    it('calling get at -1 throws an error', () => {
        const list: IList<number> = new List<number>();
        expect(() => list.get(-1)).to.throw();
    });

    it('calling get at length throws an error', () => {
        const list: IList<number> = new List<number>();
        list.add(0, 5);
        expect(() => list.get(list.count())).to.throw();
    });

    it('calling set at index replaces the value of the index', () => {
        const list: IList<number> = new List<number>();
        list.add(0, 5);
        const updatedValue = list.set(0, 10);
        expect(list.get(0)).to.equal(10);
        expect(updatedValue).to.equal(10);
    });

    it('calling set at -1 throws an error', () => {
        const list: IList<number> = new List<number>();
        expect(() => list.set(-1, 5)).to.throw();
    });

    it('calling set on index that does not exist throws error', () => {
        const list: IList<number> = new List<number>();
        expect(() => list.set(0, 5)).to.throw();
    });

    it('calling remove at index gets back that value', () => {
        const list: IList<number> = new List<number>();
        list.add(0, 5);
        const removedValue = list.remove(0);
        expect(removedValue).to.equal(5); 
    });

    it('calling remove reduces the count of the list by 1', () => {
        const list: IList<number> = new List<number>();
        list.add(0, 5);
        const originalCount: number = list.count();
        const removedValue = list.remove(0);
        expect(originalCount - 1).to.equal(list.count());
    });

    it('calling remove at -1 throws error', () => {
        const list: IList<number> = new List<number>();
        expect(() => list.remove(-1)).to.throw();
    });
    
    it('calling remove at index outside of count throws error', () => {
        const list: IList<number> = new List<number>();
        expect(() => list.remove(list.count())).to.throw();
    });

    it('calling add multiple times returns a count that matches', () => {
        let callAdd: number = 0;
        const list: IList<number> = new List<number>();
        list.add(0, 1);
        callAdd++;
        list.add(1, 2);
        callAdd++;
        expect(list.count()).to.equal(callAdd);
    });

    it('calling add two times, then get at index 1, returns the second number added', () => {
        const list: IList<number> = new List<number>();
        list.add(0, 1);
        list.add(1, 2);
        expect(list.get(1)).to.equal(2);
    });

    it('add initial item, then add at zero, the original element should now be at index 1', () => {
        const list: IList<number> = new List<number>();
        list.add(0, 1);
        list.add(0, 5);
        expect(list.get(1)).to.equal(1);
    });
});

describe('LinkedListsTest', () => {
    it('calling first returns the first element in a linked list', () => {
        const linkedList: ILinkedList<number> = new LinkedList<number>();
        linkedList.add(0, 5);
        expect(linkedList.first()).to.equal(5);
    });

    it('calling first in linked list with multiple items returns just the first element', () => {
        const linkedList: ILinkedList<string> = new LinkedList<string>();
        linkedList.add(0, 'at zero');
        linkedList.add(1, 'at one');
        expect(linkedList.first()).to.equal('at zero');
    });

    it('calling first on empty linked list throws an error', () => {
        const linkedList: ILinkedList<number> = new LinkedList<number>();
        expect(() => linkedList.first()).to.throw();
    });

    it('calling last on empty linked list throws error', () => {
        const linkedList: ILinkedList<number> = new LinkedList<number>();
        expect(() => linkedList.last()).to.throw();
    });

    it('calling last returns the last element in a linked list', () => {
        const linkedList: ILinkedList<number> = new LinkedList<number>();
        linkedList.add(0, 1);
        linkedList.add(1, 2);
        linkedList.add(2, 3);
        expect(linkedList.last()).to.equal(3);
    });

    it('calling before on empty linked list throws error', () => {
        const linkedList: ILinkedList<number> = new LinkedList<number>();
        expect(() => linkedList.before(5)).to.throw();
    });

    it('calling before on linked list where index is 0 throws error', () => {
        const linkedList: ILinkedList<number> = new LinkedList<number>();
        linkedList.add(0, 1);
        expect(() => linkedList.before(0)).to.throw();
    });

    it('calling before on initialized list will return correct item', () => {
        const linkedList: ILinkedList<number> = new LinkedList<number>();
        linkedList.add(0, 1);
        linkedList.add(1, 2);
        expect(linkedList.before(1)).to.equal(1);
    });

    it('calling aafter on empty linked list throws error', () => {
        const linkedList: ILinkedList<number> = new LinkedList<number>();
        expect(() => linkedList.after(0)).to.throw();
    });

    it('calling after on linked list where index equals the count throws error', () => {
        const linkedList: ILinkedList<number> = new LinkedList<number>();
        linkedList.add(0, 1);
        expect(() => linkedList.after(linkedList.count())).to.throw();
    });

    it('calling after on initialized list will return correct item', () => {
        const linkedList: ILinkedList<number> = new LinkedList<number>();
        linkedList.add(0, 1);
        linkedList.add(1, 2);
        expect(linkedList.after(0)).to.equal(2);
    });
});