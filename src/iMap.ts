export interface IMap<TKey, TValue> {
  isEmpty: () => boolean;
  push: (key: TKey, value: TValue) => void;
  hasKey: (key: TKey) => boolean;
  remove: (key: TKey) => TValue | undefined;
  get: (key: TKey) => TValue;
  getCount: () => number;
}

export class Map<TKey, TValue> implements IMap<TKey, TValue> {
  private hashTable: any = {};
  private count: number = 0;

  public isEmpty: () => boolean = () => {
    return this.count === 0;
  };

  public push: (key: TKey, value: TValue) => void = (key, value) => {
    const serializedKey: string = JSON.stringify(key);
    if (!(serializedKey in this.hashTable)) {
      this.hashTable[serializedKey] = value;
      this.count++;
    } else {
      throw new Error();
    }
  };

  public hasKey: (key: TKey) => boolean = (key) => {
    const serializedKey: string = JSON.stringify(key);
    return serializedKey in this.hashTable && this.hashTable[serializedKey] !== undefined;
  };

  public get: (key: TKey) => TValue = (key) => {
    const serializedKey: string = JSON.stringify(key);
    return this.hashTable[serializedKey];
  };

  public remove: (key: TKey) => TValue | undefined = (key) => {
    const serializedKey: string = JSON.stringify(key);

    if (serializedKey in this.hashTable) {
      const returnValue: TValue = this.hashTable[serializedKey];
      this.hashTable[serializedKey] = undefined;
      this.count--;
      return returnValue;
    }

    return undefined;
  };

  public getCount: () => number = () => {
    return this.count;
  };
}
