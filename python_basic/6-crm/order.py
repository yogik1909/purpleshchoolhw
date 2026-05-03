"""Бизнес-логика заказов."""

from datetime import date, timezone
from dataclasses import dataclass
from typing import Optional
from typing import List

STATUSES = ("new", "in_progress", "done", "cancelled")


def _parse_optional_date(value: object) -> Optional[date]:
    if value is None or value == "":
        return None
    if isinstance(value, date):
        return value
    return date.fromisoformat(str(value))


def order_from_dict(data: dict) -> Order:
    """Восстановить Order из словаря после json.load."""
    return Order(
        id=int(data["id"]),
        title=str(data["title"]),
        amount=float(data["amount"]),
        email=str(data["email"]),
        status=str(data.get("status", "new")),
        tags=data.get("tags"),
        created_at=_parse_optional_date(data.get("created_at")),
        due=_parse_optional_date(data.get("due")),
        closed_at=_parse_optional_date(data.get("closed_at")),
    )


@dataclass
class Order:
    id: int
    title: str
    amount: float
    email: str
    status: str = "new"
    tags: Optional[str] | None = None
    created_at: Optional[date] = None
    due: Optional[date] = None
    closed_at: Optional[date] = None


def create_order(
    order_ID: int,
    title: str,
    amount: float,
    email: str,
    status: str = "new",
    tags: Optional[str] = None,
    due: Optional[date] = None,
) -> Order:
    """Создать заказ. Возвращает созданный заказ (Order)."""
    return Order(id=order_ID, title=title, amount=amount,email=email,status=status,tags=tags,due=due, created_at=date.today(), closed_at=None)


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
