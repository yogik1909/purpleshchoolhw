1. Разделение строк по содержимому

Задача: Выполнить команды:
mkdir -p ~/l-r/
for name in {A..Z}; do echo "$name were the left" >> ~/l-r/file$name; done
for name in {0..50}; do echo "$name were the right" >> ~/l-r/file$name; done

Затем строки с “left” перенести в файл answerleft, а с “right” — в файл answerright.


Артефакт: 
Перенеси строки с вхождением left в файл answer_left, right в файл answer_right