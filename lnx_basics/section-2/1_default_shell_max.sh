#!/bin/bash
# Определить shell по умолчанию для пользователя max
echo "getent passwd max | cut -d: -f7" > max_shell