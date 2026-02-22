#!/bin/bash
# Изменить prompt для пользователя max
echo "PS1='[\D{%a %b %d}]\u@\h\$ '" | sudo tee -a /home/max/.profile
cp /home/max/.profile /home/vova/purpleshchoolhw/lnx_basics/section-2/profile