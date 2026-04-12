# У нас есть отель, в котором есть номера разных типов(от Room):

# Обычный номер
# Люкс(имеет мультипликатор цены)
# Гость может:

# бронировать номер на определённые даты - через класс Booking - бронирование. Его можно отменить.
# Отель(класс Hotel) должен:

# уметь показывать список доступных номеров на заданные даты
# добавить номер
# забронировать и отменить бронирование
# показать забронированные номера

from dataclasses import dataclass
from datetime import datetime


PRICE_MULTIPLIER_TYPES: dict[str, float] = {"luxury": 1.5, "standard": 1.0}


@dataclass(repr=False)
class Room:
    number: int
    type: str
    __price: float

    @property
    def price(self) -> float:
        return self.__price * PRICE_MULTIPLIER_TYPES[self.type]

    def __repr__(self) -> str:
        return f"Room(number={self.number}, type={self.type}, price={self.price})"


class Booking:
    def __init__(self, room: Room):
        self.room = room
        self.is_booked = False
        self.date: datetime | None = None

    def cancel(self):
        self.is_booked = False

    def book(self, date: datetime):
        self.is_booked = True
        self.date = date


class Hotel:
    rooms: dict[int, Room]
    __base_price: int

    def __init__(self, base_price: int):
        self.__base_price = base_price
        self.bookings = {}
        self.rooms = {}

    def get_available_rooms(self):
        booked = {n for n, b in self.bookings.items() if b.is_booked}
        return [self.rooms[n] for n in self.rooms if n not in booked]

    def add_room(self, room_num: int, type: str):
        self.rooms[room_num] = Room(room_num, type, float(self.__base_price))

    def book_room(self, room_num: int, date: datetime):
        room = self.rooms[room_num]
        existing = self.bookings.get(room_num)
        if existing is not None and existing.is_booked:
            raise ValueError("Room is already booked")
        booking = Booking(room)
        booking.book(date)
        self.bookings[room_num] = booking

    def cancel_booking(self, booking: Booking):
        booking.cancel()

    def get_booked_rooms(self):
        return [b.room for b in self.bookings.values() if b.is_booked]


hotel = Hotel(100)
hotel.add_room(1, "standard")
hotel.add_room(2, "luxury")
hotel.add_room(3, "standard")
hotel.book_room(1, datetime(2026, 4, 12))

print(hotel.get_booked_rooms())
print(hotel.get_available_rooms())
