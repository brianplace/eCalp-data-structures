import { expect } from 'chai';
import { IMap, Map } from '../classes/iMap';

describe('iMap Tests', () => {
  it('brand new iMap isEmpty returns true', () => {
    const map: IMap<string, {}> = new Map<string, {}>();
    expect(map.isEmpty()).to.be.true;
  });

  it('after calling push isEmpty returns false', () => {
    const map: IMap<string, {}> = new Map<string, {}>();
    map.push('something', {});
    expect(map.isEmpty()).to.be.false;
  });

  it('calling push second time with key throws error', () => {
    const map: IMap<string, {}> = new Map<string, {}>();
    map.push('something', {});
    expect(() => map.push('something', {})).to.throw();
  });

  it('calling push with an object as key does not throw error', () => {
    const map: IMap<{}, {}> = new Map<{}, {}>();
    expect(() => map.push({}, {})).to.not.throw();
  });

  it('calling hasKey after adding key returns true', () => {
    const map: IMap<string, number> = new Map<string, number>();
    map.push('something', 5);
    expect(map.hasKey('something')).to.be.true;
  });

  it('calling hasKey on empty map returns false', () => {
    const map: IMap<string, number> = new Map<string, number>();
    expect(map.hasKey('something')).to.be.false;
  });

  it('calling hasKey after adding object key returns true', () => {
    type keyType = { something: number };
    const map: IMap<keyType, string> = new Map<keyType, string>();
    const keyObject: keyType = { something: 5 };
    map.push(keyObject, 'something');
    expect(map.hasKey(keyObject)).to.be.true;
  });

  it('calling hasKey after adding one object key returns false with different object key', () => {
    type keyType = { something: number };
    const map: IMap<keyType, string> = new Map<keyType, string>();
    const keyObject: keyType = { something: 5 };
    const otherKeyObject: keyType = { something: 6 };
    map.push(keyObject, 'something');
    expect(map.hasKey(otherKeyObject)).to.be.false;
  });

  it('calling get after adding the key returns that value', () => {
    const map: IMap<string, number> = new Map<string, number>();
    map.push('something', 5);
    expect(map.get('something')).to.equal(5);
  });

  it('calling get on key that has not been added returns undefined', () => {
    const map: IMap<string, number> = new Map<string, number>();
    expect(map.get('something')).to.equal(undefined);
  });

  it('calling removed after adding key returns the correct value', () => {
    const map: IMap<string, number> = new Map<string, number>();
    map.push('something', 5);
    expect(map.remove('something')).to.equal(5);
  });

  it('after calling removed the key is no longer in the map', () => {
    const map: IMap<string, number> = new Map<string, number>();
    map.push('something', 5);
    const removedValue = map.remove('something');
    expect(map.hasKey('something')).to.be.false;
  });

  it('after calling removed on single key, isEmpty returns true', () => {
    const map: IMap<string, number> = new Map<string, number>();
    map.push('something', 5);
    const removedValue = map.remove('something');
    expect(map.isEmpty()).to.be.true;
  });

  it('after calling removed on key that is not there, isEmpty returns false', () => {
    const map: IMap<string, number> = new Map<string, number>();
    map.push('something', 5);
    const removedValue = map.remove('something else');
    expect(map.isEmpty()).to.be.false;
  });

  it('after calling removed on key that is not there, the returned value is undefined', () => {
    const map: IMap<string, number> = new Map<string, number>();
    map.push('something', 5);
    const removedValue = map.remove('something else');
    expect(removedValue).to.equal(undefined);
  });

  it('calling get on added item returns the expected value', () => {
    const map: IMap<string, number> = new Map<string, number>();
    map.push('something', 5);
    const returnedValue = map.get('something');
    expect(returnedValue).to.equal(5);
  });

  it('calling get on added item does not change the count', () => {
    const map: IMap<string, number> = new Map<string, number>();
    map.push('something', 5);
    const initialCount: number = map.getCount();
    const returnedValue = map.get('something');
    expect(initialCount).to.equal(map.getCount());
  });

  it('calling get on item that is not included returns undefined', () => {
    const map: IMap<string, number> = new Map<string, number>();
    const returnedValue = map.get('something');
    expect(returnedValue).to.equal(undefined);
  });
});
