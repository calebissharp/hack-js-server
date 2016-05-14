import { expect } from 'chai';

import Network from '../src/network';

describe('Network', () => {
  describe('constructor', () => {
    it('assigns the network name', () => {
      const network = new Network('network1');
      expect(network.name).to.equal('network1');
    });

    it('requires the network name', () => {
      expect(() => new Network()).to.throw(new Error("Missing required argument 'name'"));
    });
  });
});
