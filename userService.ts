interface User {
  id: number;
  name: string;
  email: string;
}

class UserService {
  private users: Map<number, User> = new Map();

  createUser(id: number, name: string, email: string): User {
    if (this.users.has(id)) {
      throw new Error("User exists");
    }

    const user: User = { id, name, email };
    this.users.set(id, user);
    return user;
  }

  getUser(id: number): User {
    const user = this.users.get(id);
    if (!user) throw new Error("Not found");
    return user;
  }

  listUsers(): User[] {
    return Array.from(this.users.values());
  }
}

const service = new UserService();
service.createUser(1, "Alice", "a@mail.com");
console.log(service.listUsers());
