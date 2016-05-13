import { expect } from 'chai';

import { Computer } from '../src/computer.js';

describe('Computer', () => {
  describe('constructor', () => {
    it('should have a default ip', () => {
      const computer = new Computer();
      expect(computer.ip).to.equal('1.1.1.1');
    });
  });
});
