@echo off
title Global Military Intelligence - Local Server
echo.
echo ========================================
echo   Global Military Intelligence Server
echo ========================================
echo.
echo Starting server on http://localhost:3000 ...
echo.

:: Open browser after a short delay
start "" "http://localhost:3000"

:: Start the server (this keeps running until you close the window)
npx -y serve "e:\Anti gravity files\Web files ig\military-intel-website" -l 3000
