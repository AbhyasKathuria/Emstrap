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

echo Starting Backend Server on port 5000 (with hot reload)...
cd backend
start cmd /k "npm run dev"
cd ..

echo.
echo Opening Frontend in your browser...
cd frontend
start index.html
cd ..

echo.
echo Done! The app is running locally.
echo Changes to the backend will automatically reload.
echo Refresh the browser to see frontend changes.
echo.
pause
