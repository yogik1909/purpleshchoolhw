Итоговые команды в приложении:
- list — вывести таблицу заказов (id, title, amount, status, due).

    •    --overdue,

    •    --tag=... (фильтр по тегу),

    •    --limit=N. 

- add --title "..." --amount 123.45 --email user@ex.com [--due "..."] [--tags "a,b,c"

- remove --id <uuid> — удалить заказ по id.

- edit --id <uuid> [--title ...] [--amount ...] [--email ...] [--due ...] — редактирование только переданных полей.

- tags --id <uuid> [--add a,b] [--remove x,y] — управление тегами (множество).

- status --id <uuid> status — изменение статуса