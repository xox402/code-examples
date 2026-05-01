const fs = require("fs");

class UserService {
  constructor() {
    this.users = new Map();
  }

  createUser(id, name, email) {
    if (this.users.has(id)) {
      throw new Error("User already exists");
    }

    const user = { id, name, email };
    this.users.set(id, user);
    return user;
  }

  getUser(id) {
    if (!this.users.has(id)) {
      throw new Error("User not found");
    }
    return this.users.get(id);
  }

  deleteUser(id) {
    this.users.delete(id);
  }

  listUsers() {
    return Array.from(this.users.values());
  }

  saveToFile(path) {
    fs.writeFileSync(path, JSON.stringify(this.listUsers(), null, 2));
  }
}

function simulate() {
  const service = new UserService();

  service.createUser(1, "Alice", "alice@mail.com");
  service.createUser(2, "Bob", "bob@mail.com");

  console.log(service.listUsers());

  service.saveToFile("./users.json");
}

simulate();
