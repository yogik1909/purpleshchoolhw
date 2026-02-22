import sys


class LibraryError(Exception):
    """Базовый класс для ошибок библиотеки"""
    pass


class FilterTextNotProvidedError(LibraryError):
    """Ошибка: не передан текст фильтра"""
    pass


class InvalidCommandError(LibraryError):
    """Ошибка: передана неверная команда"""
    pass


class InvalidSortParameterError(LibraryError):
    """Ошибка: передан неверный параметр сортировки"""
    pass


books = {
    "Книга 1": "Автор 1",
    "Книга 2": "Автор 2",
    "Книга 3": "Автор 1",
}


def filter_books(author):
    filtered_books = filter(lambda item: item[1] == author, books.items())
    result = list(map(lambda item: f"{item[0]} — {item[1]}", filtered_books))
    for book in result:
        print(book)


def sort_books(sort_by):
    book_list = list(map(lambda item: f"{item[0]} — {item[1]}", books.items()))

    match sort_by:
        case "author":
            book_list.sort(key=lambda x: x.split(" — ")[1])
        case "book":
            book_list.sort(key=lambda x: x.split(" — ")[0])
        case _:
            raise InvalidSortParameterError(
                f"Неверный параметр сортировки: {sort_by}")

    for book in book_list:
        print(book)


try:
    if len(sys.argv) < 2:
        raise InvalidCommandError("Команда не передана")

    action = sys.argv[1]

    match action:
        case "filter":
            if len(sys.argv) < 3:
                raise FilterTextNotProvidedError("Не передан текст фильтра")
            author = sys.argv[2]
            filter_books(author)
        case "sort":
            if len(sys.argv) < 3:
                raise InvalidSortParameterError(
                    "Не передан параметр сортировки")
            sort_by = sys.argv[2]
            sort_books(sort_by)
        case _:
            raise InvalidCommandError(f"Неверная команда: {action}")

except LibraryError as e:
    print(f"Ошибка: {e}")
except Exception as e:
    print(f"Неожиданная ошибка: {e}")
