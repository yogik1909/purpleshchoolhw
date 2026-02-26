"""Работа с JSON-хранилищем заказов."""

import json
from order import Order



def load(file_path: str) -> list[Order]:

    list_orders = []
    try:
        with open(file_path, "r", encoding="utf-8") as file:
            list_orders = json.load(file)
    except json.JSONDecodeError:
        print("Ошибка при загрузке заказов: файл заказов повреждён или содержит неверный JSON. Используется пустой список.")
    except FileNotFoundError:
        print("Ошибка при загрузке заказов: файл заказов не найден. Используется пустой список.")
    return list_orders

def save(items: list[Order], file_path: str):
    """Сохранить список заказов в JSON-файл."""
    try:
        with open(file_path, "w", encoding="utf-8") as file:
            json.dump(items, file, ensure_ascii=False, indent=2)
    except Exception as e:
        print(f"Ошибка при сохранении заказов: {e}")
