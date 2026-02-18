Создаём новый проект по учёту заказов.

Структура проекта
__main__.py - Точка входа в программу
cli.py - Парсинт агрументов
order.py - бизнес-логика заказов
storage.py - работа с JSON
utils/ 
    - validators.py - проверка id/полей

Структура заказа:
 • id — уникальный идентификатор (int).
 • title — название заказа (строка).
 • amount — сумма заказа (число с плавающей точкой).
 • email — email клиента (строка).
 • status — статус заказа (new, in_progress, done, cancelled).
 • tags — множество тегов (set строк).
 • created_at — дата и время создания (ISO 8601, UTC).
 • due — дедлайн (строка в ISO 8601 или None).
 • closed_at — дата и время закрытия заказа (ISO 8601, UTC или
None).

В orders.py добавить заглушки с pass:
- create_order
- list_orders
- edit_order
- remove_order
В storage.py — заглушки pass:
 • load()
 • save() 