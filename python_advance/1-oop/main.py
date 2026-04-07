# Нужно реализовать класс BankAccount, описывающий банковский счёт простого вида. У счёта должны быть:

#     владелец счёта (строка, имя);
#     номер счёта (строка или число);
#     текущий баланс (число, не может быть отрицательным);
# При создании счёта баланс может задаваться, а если не задан — считается 0.

# Класс BankAccount должен уметь:

# Создавать новый счёт в конструкторе init
# deposit(amount) — пополнение счёта на сумму amount.
# withdraw(amount) — снятие денег со счёта. Нельзя уйти в минус.
# transferto(otheraccount, amount) — перевод денег на другой счёт BankAccount.
# info() — возвращать строку с краткой информацией о счёте
# @classmethod def getaccountscreated(cls) — возвращает количество созданных счетов.


class BankAccount:
    account_created = 0
    def __init__(self, owner: str, account_number: str | int, balance: float = 0):
        self.owner = owner
        self.account_number = account_number
        self.balance = balance
        BankAccount.account_created += 1
    def deposit(self, amount: float):
        self.balance += amount
    
    def withdraw(self, amount: float):
        if self.balance - amount < 0:
            raise ValueError("Недостаточно средств")
        self.balance -= amount
    
    def transferto(self, other_account: 'BankAccount', amount: float):
        self.withdraw(amount)
        other_account.deposit(amount)
    
    def info(self):
        return f"Счет {self.account_number} принадлежит {self.owner} и имеет баланс {self.balance}"
    
    @classmethod
    def getaccountscreated(cls):
        return cls.account_created


def main():
    pass

if __name__ == "__main__":
    main()