class Network {
  constructor(name) {
    if (!name) {
      throw new Error("Missing required argument 'name'");
    }

    this.name = name;
  }
}

export default Network;
