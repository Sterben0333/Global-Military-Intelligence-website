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

:: Start the Express backend server
node backend/server.js

