@echo off
setlocal
cd /d "%~dp0"
echo.
echo  IPMS Research Website
echo  Opening http://127.0.0.1:8088
echo  Press Ctrl+C to stop the local server.
echo.
start "" "http://127.0.0.1:8088"
python -m http.server 8088 --bind 127.0.0.1
endlocal
