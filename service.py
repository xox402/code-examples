import logging
from dataclasses import dataclass

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@dataclass
class User:
    id: int
    name: str
    email: str

class UserService:
    def __init__(self):
        self.users: dict[int, User] = {}

    def create_user(self, user_id: int, name: str, email: str) -> User:
        if user_id in self.users:
            raise ValueError("User already exists")

        user = User(user_id, name, email)
        self.users[user_id] = user
        logger.info(f"User created: {user}")
        return user

    def get_user(self, user_id: int) -> User:
        if user_id not in self.users:
            raise KeyError("User not found")
        return self.users[user_id]

    def delete_user(self, user_id: int) -> None:
        if user_id in self.users:
            del self.users[user_id]
            logger.info(f"Deleted user {user_id}")

    def list_users(self) -> list[User]:
        return list(self.users.values())


def simulate():
    service = UserService()

    _ = service.create_user(1, "Alice", "alice@example.com")
    _ = service.create_user(2, "Bob", "bob@example.com")

    for user in service.list_users():
        print(user)

    service.delete_user(1)


if __name__ == "__main__":
    simulate()
