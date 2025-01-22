import React, { useState } from 'react';
import { FaFileCsv, FaRoad, FaChartLine, FaMoneyBillWave } from 'react-icons/fa';
import { Sidebar } from '../components/Sidebar';
import { CSVUploadContainer } from '../components/CSVUpload'; 
import './App.css';
import DashboardContainer from '../components/journey/container/DashboardContainer';
import ReportDashboard from '../components/ Reports/ReportContainer';

const App = () => {
  const [currentSection, setCurrentSection] = useState('csv-upload');

  const navigationLinks = [
    { id: 'csv-upload', label: 'CSV Upload', icon: <FaFileCsv /> },
    { id: 'fare-calculator', label: 'Fare Calculator', icon: <FaMoneyBillWave /> },
    { id: 'reports', label: 'Reports', icon: <FaChartLine /> },
    
  ];

  const handleNavigate = (id) => {
    setCurrentSection(id);
    console.log(`Navigated to ${id}`);
  };

  return (
    <div className="app">
       <Sidebar navigationLinks={navigationLinks} onNavigate={handleNavigate} />
      <main className="content">
        {currentSection === 'csv-upload' && <CSVUploadContainer />}
        {currentSection === 'fare-calculator' && <DashboardContainer />}
        {currentSection === 'reports' && <ReportDashboard/>}
        
      </main>
     </div>
  );
};

export default App;
