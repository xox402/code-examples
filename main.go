package main

import (
	"encoding/json"
	"fmt"
)

type User struct {
	ID    int
	Name  string
	Email string
}

type UserService struct {
	users map[int]User
}

func NewUserService() *UserService {
	return &UserService{
		users: make(map[int]User),
	}
}

func (s *UserService) CreateUser(id int, name, email string) {
	s.users[id] = User{id, name, email}
}

func (s *UserService) GetUser(id int) (User, error) {
	user, ok := s.users[id]
	if !ok {
		return User{}, fmt.Errorf("not found")
	}
	return user, nil
}

func (s *UserService) ListUsers() []User {
	users := []User{}
	for _, u := range s.users {
		users = append(users, u)
	}
	return users
}

func main() {
	service := NewUserService()

	service.CreateUser(1, "Alice", "alice@mail.com")
	service.CreateUser(2, "Bob", "bob@mail.com")

	data, _ := json.MarshalIndent(service.ListUsers(), "", "  ")
	fmt.Println(string(data))
}
