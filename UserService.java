import java.util.*;

class User {
    int id;
    String name;
    String email;

    User(int id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

class UserService {
    private Map<Integer, User> users = new HashMap<>();

    public void createUser(int id, String name, String email) {
        users.put(id, new User(id, name, email));
    }

    public User getUser(int id) {
        return users.get(id);
    }

    public List<User> listUsers() {
        return new ArrayList<>(users.values());
    }
}

public class Main {
    public static void main(String[] args) {
        UserService service = new UserService();
        service.createUser(1, "Alice", "a@mail.com");
        service.createUser(2, "Bob", "b@mail.com");

        for (User u : service.listUsers()) {
            System.out.println(u.name);
        }
    }
}
