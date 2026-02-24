#!/bin/bash
# Добавить запись в файл /etc/hosts
script_dir=$(dirname "$0")
sudo sh -c "echo '172.20.1.1 dev-gateway' >> /etc/hosts"
cat /etc/hosts > $script_dir/hosts