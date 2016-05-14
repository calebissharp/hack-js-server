class Network {
  constructor(name) {
    if (!name) {
      throw new Error("Missing required argument 'name'");
    }

    this.name = name;
    this.computers = [];
  }
}

export default Network;
