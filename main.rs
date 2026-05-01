use std::collections::HashMap;

#[derive(Debug)]
struct User {
    id: u32,
    name: String,
    email: String,
}

struct UserService {
    users: HashMap<u32, User>,
}

impl UserService {
    fn new() -> Self {
        Self {
            users: HashMap::new(),
        }
    }

    fn create_user(&mut self, id: u32, name: &str, email: &str) {
        let user = User {
            id,
            name: name.to_string(),
            email: email.to_string(),
        };
        self.users.insert(id, user);
    }

    fn list_users(&self) {
        for (_, user) in &self.users {
            println!("{:?}", user);
        }
    }
}

fn main() {
    let mut service = UserService::new();
    service.create_user(1, "Alice", "a@mail.com");
    service.create_user(2, "Bob", "b@mail.com");

    service.list_users();
}
