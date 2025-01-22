Singa Metro Authority Frontend

Overview

The Singa Metro Authority Frontend is a modern and interactive user interface built using React.js. It provides users with an intuitive platform to interact with the Singa Metro Authority system, enabling seamless journey planning, fare calculation, and report visualization.

Features

Responsive Design: Optimized for desktops, tablets, and mobile devices.

Dynamic Components: Built using reusable and dynamic React components.

Integration with Backend: Communicates efficiently with the Singa Metro Authority Backend for real-time data updates.

Interactive Visualizations: Incorporates tables for data representation.

Tech Stack

Programming Language: JavaScript

Framework/Library: React.js

Styling: CSS/SCSS, TailwindCSS

Data Fetching: Axios/Fetch API

Deployment: Vercel

Installation

Follow these steps to set up the Isnga Metrro Frontend locally:

Prerequisites

Node.js (version 22 or higher)

Backend server running for API integration

Steps

Clone the Repository:

git clone https://github.com/Shaina-08/Singa-metro-frontend.git
cd Singa-metro-frontend

Install Dependencies:

npm install


Start the Development Server:

npm run dev 

The application will run on http://localhost:5173.

Build for Production:

npm run build

The build files will be generated in the build/ directory.

Folder Structure

src/
|-- components/       # Reusable UI components
|-- pages/            # Application pages
|-- services/         # API calls and services
|-- context/          # State management context
|-- assets/           # Images, icons, and other static files
|-- styles/           # CSS/SCSS files
|-- App.js            # Main application component
|-- index.js          # Entry point

API Endpoints Used

Journeys

GET /api/journeys - Fetch all journeys

POST /api/journeys - Create a new journey

Reports

GET /api/reports/daily - Fetch daily report

GET /api/reports/weekly - Fetch weekly report

Fare Calculation

GET /api/fare - Calculate fare for a journey

CSV Management

POST /api/csv - Upload and process CSV data

Contributing

Contributions are welcome! To contribute:

Fork the repository.

Create a new branch for your feature/fix.

Commit your changes with clear messages.

Push to your fork and submit a pull request.

Contact

For questions or support, please contact:

Name: Shaina

Email: shainabhard12@gmail.com

GitHub: https://github.com/Shaina-08/

Acknowledgments

Thanks to Peakflo for this oppurtunity.

Libraries and tools used: React.js, Axios, TailwindCSS.

