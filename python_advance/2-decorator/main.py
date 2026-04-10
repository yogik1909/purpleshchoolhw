# def limit_args

# Декоратор для ограничения числовых аргументов функции. Параметры:

# max_value: максимальное допустимое значение для числовых аргументов
# mode: "error" или "clip"
#             - "error" — при превышении max_value выбрасывать ValueError

#             - "clip" — при превышении maxvalue заменять значение на maxvalue

from functools import wraps
from hmac import new
def limit_args(max_value: int, mode: str):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            newargs = []
            for index, arg in enumerate(args):
                if arg > max_value:
                    if mode == "error":
                        raise ValueError(f"Аргумент {index + 1} = {arg}, что превышает максимально допустимое значение {max_value}")
                    elif mode == "clip":
                        newargs.append(max_value)
                else:
                    newargs.append(arg)
            return func(*newargs, **kwargs)
        return wrapper
    return decorator


@limit_args(max_value=10, mode="clip")
def multiply(a, b):
     return a * b

@limit_args(max_value=10, mode="error")
def multiply_error(a, b):
     return a * b

print(multiply(2, 3))
print(multiply(100, 3))

try:
    print(multiply_error(2, 3))
    print(multiply_error(100, 3))
except ValueError as e:
    print(e)
finally:
    print("finally")



