import { expect } from 'chai';
import { HelloWorld } from '../HelloWorld';

describe('Hello World Test', () => {
    it('passes test', () => {
        expect(HelloWorld()).to.equal('Hello World!');
    });
})