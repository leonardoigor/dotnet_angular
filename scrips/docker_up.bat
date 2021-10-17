@echo off

cmd /k docker compose -f ../docker-compose.yml -p donet_angular up -d --renew-anon-volumes


exit