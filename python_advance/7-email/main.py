# async def send_email(user: str) -> None:

# Имитация отправки письма пользователю:

# ждёт случайное время от 0.3 до 0.8 секунд
# печатает: "Email sent to {user}"
# async def send_bulk(users: list[str]) -> None:

# Должна:

# запустить send_email для каждого пользователя ПАРАЛЛЕЛЬНО
#  дождаться завершения всех отправок
# async def main() -> None:
# users = ["alice", "bob", "carol", "dave", "eve"]
# await send_bulk(users)

import asyncio
import random
import time

async def send_email(user: str) -> None:
    await asyncio.sleep(random.uniform(0.3, 0.8)) # ждём случайное время от 0.3 до 0.8 секунд
    print(f"Email sent to {user}")

async def send_bulk(users: list[str]) -> None:
    await asyncio.gather(*[send_email(user) for user in users]) # запускаем send_email для каждого пользователя ПАРАЛЛЕЛЬНО

async def main() -> None:
    users = ["alice", "bob", "carol", "dave", "eve"]
    start_time = time.time()
    await send_bulk(users)
    print(f"All emails sent, for {time.time() - start_time:.2f} seconds")

if __name__ == "__main__":
    asyncio.run(main())