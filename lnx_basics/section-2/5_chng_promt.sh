#!/bin/bash
# Изменить prompt для пользователя max
echo "PS1='[\d][\t][\u][\@][\h][\$ ]'" | sudo tee -a /home/max/.profile