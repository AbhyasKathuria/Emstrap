@echo off
echo ==================================================
echo         EMSTRAP - Local Development Starter
echo ==================================================
echo.

:: Check if backend/node_modules folder exists
if not exist "backend\node_modules\" (
    echo Installing backend dependencies...
    cd backend
    call npm install
    cd ..
)

:: Check if root frontend node_modules folder exists
if not exist "node_modules\" (
    echo Installing frontend dependencies...
    call npm install
)

echo Starting Backend Server on port 5000 (with hot reload)...
cd backend
start cmd /k "npm run dev"
cd ..

echo.
echo Starting Frontend React/Vite development server...
start cmd /k "npm run dev"

echo.
echo Done! Both Backend and Frontend are running locally.
echo Frontend: http://localhost:5173
echo Backend:  http://localhost:5000
echo.
pause
