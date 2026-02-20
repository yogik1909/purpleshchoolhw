"""Бизнес-логика заказов."""

from datetime import datetime, timezone
from typing import TypedDict
from typing import Optional
from typing import List

STATUSES = ("new", "in_progress", "done", "cancelled")


class Order:
    id: int
    title: str
    amount: float
    email: str
    status: str
    tags: List[str]
    created_at: str
    due: Optional[str]
    closed_at: Optional[str]


# Список заказов в памяти
_orders: List[Order] = []


def create_order(
    title: str,
    amount: float,
    email: str,
    status: str = "new",
    tags: List[str] | None = None,
    due: Optional[str] = None,
) -> Order:
    """Создать заказ. Возвращает созданный заказ (dict)."""
    order_id = max((o["id"] for o in _orders), default=0) + 1
    now = datetime.now(timezone.utc).isoformat().replace("+00:00", "Z")
    order: Order = {
        "id": order_id,
        "title": title,
        "amount": float(amount),
        "email": email,
        "status": status if status in STATUSES else "new",
        "tags": list(tags) if tags is not None else [],
        "created_at": now,
        "due": due,
        "closed_at": None,
    }
    _orders.append(order)
    return order


def list_orders() -> List[Order]:
    """Вернуть список всех заказов."""
    return _orders.copy()


def edit_order(order_id: int, **kwargs: object) -> Optional[Order]:
    """Изменить заказ по id. Допустимые поля: title, amount, email, status, tags, due, closed_at. Возвращает заказ или None."""
    for order in _orders:
        if order["id"] == order_id:
            for key in ("title", "amount", "email", "status", "due", "closed_at"):
                if key in kwargs:
                    order[key] = kwargs[key]
            if "tags" in kwargs:
                order["tags"] = list(kwargs["tags"]) if kwargs["tags"] is not None else []
            return order
    return None


def remove_order(order_id: int) -> bool:
    """Удалить заказ по id. Возвращает True если удалён, иначе False."""
    for i, order in enumerate(_orders):
        if order["id"] == order_id:
            _orders.pop(i)
            return True
    return False
