#!/bin/bash
# Установить /etc/fstab как целевой файл для монтирования
script_dir=$(dirname "$0")
sudo systemctl get-default > $script_dir/sys-target