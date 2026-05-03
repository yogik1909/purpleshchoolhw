from order import Order, create_order
from pars_arg import parse_command_add


def add_order(ORDERS: list[Order], args: list[str]) -> None:
    title, amount, email, due, tags = parse_command_add(args)
    nextID = max((o.id for o in ORDERS), default=0) + 1
    order = create_order(order_ID=nextID, title=title, amount=amount, email=email, due=due, tags=tags)
    ORDERS.append(order)
    print(f"Заказ №{order.id} «{order.title}» добавлен.")