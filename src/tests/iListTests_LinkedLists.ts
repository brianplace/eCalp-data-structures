import { expect } from 'chai';
import { IList, LinkedList } from '../classes/iList';

describe('LinkedListsTests', () => {
    it('creating an empty list has count of 0', () => {
        const list: IList<number> = new LinkedList<number>();
        expect(list.count()).to.equal(0);
    });

    it('adding an element to a list has count of 1', () => {
        const list: IList<number> = new LinkedList<number>();
        list.add(0, 5);
        expect(list.count()).to.equal(1);
    });

    it('element added to empty list will be returned by get at 0', () => {
        const list: IList<number> = new LinkedList<number>();
        list.add(0, 5);
        expect(list.get(0)).to.equal(5);
    });

    it('element added at -1 throws an error', () => {
        const list: IList<number> = new LinkedList<number>();
        expect(() => list.add(-1, 5)).to.throw();
    });

    it('element added at list count + 1 throws an error', () => {
        const list: IList<number> = new LinkedList<number>();
        expect(() => list.add(list.count() + 1, 5)).to.throw();
    });

    it('calling get at -1 throws an error', () => {
        const list: IList<number> = new LinkedList<number>();
        expect(() => list.get(-1)).to.throw();
    });

    it('calling get at length throws an error', () => {
        const list: IList<number> = new LinkedList<number>();
        list.add(0, 5);
        expect(() => list.get(list.count())).to.throw();
    });

    it('calling set at index replaces the value of the index', () => {
        const list: IList<number> = new LinkedList<number>();
        list.add(0, 5);
        const updatedValue = list.set(0, 10);
        expect(list.get(0)).to.equal(10);
        expect(updatedValue).to.equal(10);
    });

    it('calling set at -1 throws an error', () => {
        const list: IList<number> = new LinkedList<number>();
        expect(() => list.set(-1, 5)).to.throw();
    });

    it('calling set on index that does not exist throws error', () => {
        const list: IList<number> = new LinkedList<number>();
        expect(() => list.set(0, 5)).to.throw();
    });

    it('calling remove at index gets back that value', () => {
        const list: IList<number> = new LinkedList<number>();
        list.add(0, 5);
        const removedValue = list.remove(0);
        expect(removedValue).to.equal(5); 
    });

    it('calling remove reduces the count of the list by 1', () => {
        const list: IList<number> = new LinkedList<number>();
        list.add(0, 5);
        const originalCount: number = list.count();
        const removedValue = list.remove(0);
        expect(originalCount - 1).to.equal(list.count());
    });

    it('calling remove at -1 throws error', () => {
        const list: IList<number> = new LinkedList<number>();
        expect(() => list.remove(-1)).to.throw();
    });
    
    it('calling remove at index outside of count throws error', () => {
        const list: IList<number> = new LinkedList<number>();
        expect(() => list.remove(list.count())).to.throw();
    });
});