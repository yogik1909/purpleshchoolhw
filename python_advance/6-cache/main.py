# Сделайте типобезопасный generic-класс кэша с ключами и значениями произвольных типов. Пример:
# hits = Cache[str, int]()
# hits.set("home", 10)
# hits.set("about", 3)
# x = hits.get("home")        # x: int | None
# paths = hits.keys()         # list[str]
# counts = hits.values()      # list[int]

# hits.set("contacts", "5")   # ❌ ошибка типов
# hits.get(123)               # ❌ ошибка типов


from dataclasses import dataclass, field
from typing import Generic, Optional, TypeVar

K = TypeVar('K')
V = TypeVar('V')


@dataclass
class Cache(Generic[K, V]):
    __cache: dict[K, V] = field(default_factory=dict)

    
    def set(self, key: K, value: V):
        self.__cache[key] = value
    def get(self, key: K) -> Optional[V]:
        return self.__cache.get(key)
    def keys(self) -> list[K]:
        return list(self.__cache.keys())
    def values(self) -> list[V]:
        return list(self.__cache.values())


hits = Cache[str, int]()
hits.set("home", 10)
hits.set("about", 3)
x = hits.get("home")

hits.set("contacts", "5")
hits.get(123) # ❌ ошибка типов