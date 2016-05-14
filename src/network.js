class Network {
  constructor(name) {
    if (!name) {
      throw new Error("Missing required argument 'name'");
    }

    this.name = name;
    this.computers = [];
  }

  connect(computer, ip) {
    computer.ip = ip;

    this.computers.push(computer);
  }
}

export default Network;
