#!/bin/bash
# Добавить запись в файл /etc/hosts
sudo sh -c "echo '172.20.1.1 dev-gateway' >> /etc/hosts"
cat /etc/hosts > lnx_basics/section-3/hosts