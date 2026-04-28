// Объявите переменные соответствующего типа для хранения названия, автора, года издания, ISBN

// Реализуйте ввод данных о книге с помощью метода Console.ReadLine() в объявленные ранее переменные

// Реализуйте вывод введённых ранее данных о книге с помощью метода Console.WriteLine()



Console.WriteLine("Введите название книги: ");
string title = Console.ReadLine();

Console.WriteLine("Введите автора книги: ");
string author = Console.ReadLine();

Console.WriteLine("Введите год издания книги: ");
string year = Console.ReadLine();

Console.WriteLine("Введите ISBN книги: ");
string isbn = Console.ReadLine();

Console.WriteLine($"Название книги: {title} Автор: {author} Год издания: {year} ISBN: {isbn}");