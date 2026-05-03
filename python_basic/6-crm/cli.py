"""Парсинг аргументов командной строки."""
from shlex import split
from utils.help import help_command
from utils.add import add_order

def main(ORDERS):
    print("Добро пожаловать в программу учета заказов! help - для справки по командам")

    while True:
        try:
            raw = split(input("> "))
        except KeyboardInterrupt:
            print("\nВыход из программы")
            break
        except Exception as e:
            print(f"Ошибка: {e}")
            continue
        
        cmd, args = raw[0].lower(), raw[1:]
        match cmd:
            case "help":
                help_command()
            case "add":
                try:
                    add_order(ORDERS, args)
                except ValueError as e:
                    print(f"Ошибка: {e}")
            case "exit":
                print("Выход из программы")
                break
            case _:
                print(f"Неизвестная команда: {cmd}")
                continue
