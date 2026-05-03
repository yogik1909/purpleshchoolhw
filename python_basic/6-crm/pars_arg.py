from datetime import date, datetime


def parse_command_add(args: list[str]) -> dict | None:
    """Парсит аргументы команды add. Возвращает title, amount, email, due, tags."""
    title, amount, email, due, tags = "", 0, "", None, None

    title = args[0]

    for arg in args[1:]:
        key, value = arg.split("=", 1)
        match key:
            case "--amount":
                try:
                    amount = float(value)
                except ValueError:
                    raise ValueError(f"Неверный формат суммы: {value!r}") from None
            case "--email":
                email = value
            case "--due":
                due = pars_date(value)
            case "--tags":
                tags = value.split(",")

    return title, amount, email, due, tags


def pars_date(date_str: str) -> date:
    try:
        return datetime.strptime(date_str, "%Y-%m-%d").date()
    except ValueError:
        raise ValueError(f"Неверный формат даты: {date_str}")