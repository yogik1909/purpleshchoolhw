"""Точка входа в программу учёта заказов."""

from cli import main
import os
from order import Order
from storage import load, save


file_bd_name = "orders.json"
file_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), file_bd_name)

ORDERS: list[Order] = []

if __name__ == "__main__":
    import order as order_module
    ORDERS = load(file_path)
    try:
        main(ORDERS)
    finally:
        save(ORDERS, file_path)
