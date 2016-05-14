import { expect } from 'chai';

import Network from '../src/network';
import Computer from '../src/computer';

describe('Network', () => {
  describe('constructor', () => {
    it('assigns the network name', () => {
      const network = new Network('network1');
      expect(network.name).to.equal('network1');
    });

    it('requires the network name', () => {
      expect(() => new Network()).to.throw("Missing required argument 'name'");
    });
  });

  describe('#connect', () => {
    it('adds a computer to the network', () => {
      const network = new Network();
      network.connect(new Computer());

      expect(network.computers[0]).to.be.an('Object');
    });

    it('assigns the provided ip to the computer', () => {
      const network = new Network();
      network.connect(new Computer(), '1.2.3.4');

      expect(network.computers[0].ip).to.equal('1.2.3.4');
    });
  });
});
