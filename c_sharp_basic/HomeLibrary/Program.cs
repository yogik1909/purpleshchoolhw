// Console.WriteLine("Введите название книги: ");
// string title = Console.ReadLine();

// Console.WriteLine("Введите автора книги: ");
// string author = Console.ReadLine();

// Console.WriteLine("Введите год издания книги: ");
// string year = Console.ReadLine();

// Console.WriteLine("Введите ISBN книги: ");
// string isbn = Console.ReadLine();

// Console.WriteLine($"Название книги: {title} Автор: {author} Год издания: {year} ISBN: {isbn}");

// Добавитьте простое меню с выбором действий - ‘Добавить книгу’,  ‘Показать книгу’,  ‘Выйти’, с помощью метода Console.WriteLine()

// Используйте изученные ранее операторы управления потоком для обработки выбора пользователя

while (true) {
    Console.WriteLine("1. Добавить книгу");
    Console.WriteLine("2. Показать книгу");
    Console.WriteLine("3. Выйти");
    int choice = int.Parse(Console.ReadLine());
    switch (choice) {
        case 1:
            Console.WriteLine("Введите название книги: ");
            string title = Console.ReadLine();
            Console.WriteLine("Введите автора книги: ");
            string author = Console.ReadLine();
            Console.WriteLine("Введите год издания книги: ");
            string year = Console.ReadLine();
            Console.WriteLine("Введите ISBN книги: ");
            string isbn = Console.ReadLine();
            Console.WriteLine($"Название книги: {title} Автор: {author} Год издания: {year} ISBN: {isbn}");
            break;
        case 2:
            Console.WriteLine("Введите название книги: ");
            string title_to_show = Console.ReadLine();
            break;
        case 3:
            return;
        default:
            Console.WriteLine("Некорректный выбор");
            break;
    }
}