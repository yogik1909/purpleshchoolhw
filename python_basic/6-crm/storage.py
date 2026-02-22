"""Работа с JSON-хранилищем заказов."""

import json
from order import Order



def load(file_path: str):
    """Загрузить заказы из файла. Если файла нет или JSON повреждён — вернуть []."""
    with open(file_path, "r", encoding="utf-8") as file:
        try:
            return json.load(file)
        except json.JSONDecodeError:
            print("Ошибка: файл заказов повреждён или содержит неверный JSON. Используется пустой список.")
            return []

def save(items: list[Order], file_path: str):
    """Сохранить список заказов в JSON-файл."""
    with open(file_path, "w", encoding="utf-8") as file:
        json.dump(items, file, ensure_ascii=False, indent=2)
