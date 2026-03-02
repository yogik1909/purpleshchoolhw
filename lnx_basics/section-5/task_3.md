Задача: Запусти команды:
- mkdir -p ~/empty/
- for i in $(seq 1 1000) ; do fallocate -l 24 ~/empty/file$i ; done ;
- echo 'You got me!' > ~/empty/file777


Артефакт: Найди те, что с текстом, команды запиши в файл empty