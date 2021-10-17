@echo off

 
cmd /k docker compose -f docker-compose.yml -p donet_angular down --volumes --rmi all

exit