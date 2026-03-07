def help_command():
    print(f"""
    Список команд:
    add title:"..." --amount 123.45 --email user@ex.com [--due=YYYY-MM-DD] [--tags "a,b,c"] - добавление заказа
    list [--overdue] [--tag=...] [--limit=N] - Вывести списко задачи by - сортирвока по [preo -  приорите | due - по дате выполнения]
    remove --id <uuid> — удалить заказ по id.
    edit --id <uuid> [--title ...] [--amount ...] [--email ...] [--due=YYYY-MM-DD] редактирование только переданных полей.
    tags --id <uuid> [--add a,b] [--remove x,y] — управление тегами (множество).
    status --id <uuid> status — изменение статуса
    help - вывод списка команд
    exit - выход из программы""")