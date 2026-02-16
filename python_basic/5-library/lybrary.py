import sys

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
            print("Некорректный параметр сортировки")
            return

    for book in book_list:
        print(book)


action = sys.argv[1]

match action:
    case "filter":
        author = sys.argv[2]
        filter_books(author)
    case "sort":
        sort_by = sys.argv[2]
        sort_books(sort_by)
