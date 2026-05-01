#include <iostream>
#include <map>
#include <vector>

struct User {
    int id;
    std::string name;
    std::string email;
};

class UserService {
private:
    std::map<int, User> users;

public:
    void createUser(int id, std::string name, std::string email) {
        users[id] = {id, name, email};
    }

    User getUser(int id) {
        return users[id];
    }

    std::vector<User> listUsers() {
        std::vector<User> result;
        for (auto &pair : users) {
            result.push_back(pair.second);
        }
        return result;
    }
};

int main() {
    UserService service;

    service.createUser(1, "Alice", "a@mail.com");
    service.createUser(2, "Bob", "b@mail.com");

    for (auto user : service.listUsers()) {
        std::cout << user.name << std::endl;
    }
}
