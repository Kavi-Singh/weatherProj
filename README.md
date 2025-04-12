# Weather App
This repository contains the source code for a simple weather application with a backend and a React frontend. It fetches weather data from the OpenWeather API.
## Getting Started
To run this application locally, follow these steps:
**
1. Clone the Repository:

2. Backend Setup:
Navigate to the backend folder:
Install the necessary Node.js dependencies:
npm install

Important: You need to configure your OpenWeather API key.
 * Create a .env file in the backend folder.
 * Add the following line to the .env file, replacing <YOUR_OPENWEATHER_API_KEY> with your actual OpenWeather API key:
   OPENWEATHER_API_KEY=<YOUR_OPENWEATHER_API_KEY>
Start the backend server:
npm start

3. Frontend Setup:
Open a new terminal and navigate to the client folder:
cd client
Install the necessary Node.js dependencies:
npm install
Start the frontend development server:
npm run dev

Open your web browser and navigate to the address. You should now be able to use the weather application.

Important Notes
 * Ensure you have Node.js and npm (or yarn/pnpm) installed on your system.
 * The frontend will make requests to the backend to fetch weather data. Make sure the backend server is running before starting the frontend.
