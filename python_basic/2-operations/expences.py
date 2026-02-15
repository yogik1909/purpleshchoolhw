# Ввести три траты: еда, транспорт, развлечения. Вывести общую
# сумму и среднее.

expenses1 = int(input("Введите сумму трат на еду: "))
expenses2 = int(input("Введите сумму трат на транспорт: "))
expenses3 = int(input("Введите сумму трат на развлечения: "))

total = expenses1 + expenses2 + expenses3
average = total / 3

print(f"Общая сумма трат: {total}")
print(f"Среднее значение трат: {average}")