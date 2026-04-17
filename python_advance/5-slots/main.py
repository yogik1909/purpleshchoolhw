# Создать класс User с полями: имя, email, password

# Создать класс SlotUser с полями: имя, email, password используя slots

# Создать 2 списка из 100 000 экземпляров каждого класса и вывести сравнение занимаемой памяти


from dataclasses import dataclass
import sys


@dataclass
class User:
    name: str
    email: str
    password: str


class SlotUser:
    __slots__ = ('name', 'email', 'password')
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password


if __name__ == "__main__":
    users = [User(f"User {i}", f"user{i}@example.com", f"password{i}") for i in range(100000)]
    slot_users = [SlotUser(f"User {i}", f"user{i}@example.com", f"password{i}") for i in range(100000)]
    print(sys.getsizeof(users))
    print(sys.getsizeof(slot_users))