"""Работа с JSON-хранилищем заказов."""

import json
from dataclasses import asdict
from datetime import date

from order import Order, order_from_dict


def _json_default(obj: object) -> str:
    if isinstance(obj, date):
        return obj.isoformat()
    raise TypeError(f"Объект типа {type(obj).__name__} нельзя записать в JSON")


def load(file_path: str) -> list[Order]:
    list_orders: list[Order] = []
    try:
        with open(file_path, "r", encoding="utf-8") as file:
            raw = json.load(file)
        if isinstance(raw, list):
            for item in raw:
                if isinstance(item, dict):
                    list_orders.append(order_from_dict(item))
                elif isinstance(item, Order):
                    list_orders.append(item)
    except json.JSONDecodeError:
        print("Ошибка при загрузке заказов: файл заказов повреждён или содержит неверный JSON. Используется пустой список.")
    except FileNotFoundError:
        print("Ошибка при загрузке заказов: файл заказов не найден. Используется пустой список.")
    return list_orders


def save(items: list[Order], file_path: str):
    """Сохранить список заказов в JSON-файл."""
    try:
        payload = [asdict(o) for o in items]
        with open(file_path, "w", encoding="utf-8") as file:
            json.dump(payload, file, ensure_ascii=False, indent=2, default=_json_default)
    except Exception as e:
        print(f"Ошибка при сохранении заказов: {e}")
