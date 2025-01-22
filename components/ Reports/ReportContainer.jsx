// src/reports/ReportDashboard.jsx
import React, { useState } from 'react';
import DailyReport from './DailyReport';
import WeeklyReport from './WeeklyReport'; 
import LineUsageReport from './LineUsageReport'; 
import PeakHoursReport from './PeakHoursReport'; 
import './Report.css';

const ReportDashboard = () => {
  const [activeReport, setActiveReport] = useState('daily');
  const [startDate, setStartDate] = useState('2025-01-01');
  const [endDate, setEndDate] = useState('2025-01-07');

  const handleGenerateReport = () => {
    
    console.log('Fetching report data...');
   
  };

  const renderReport = () => {
    switch (activeReport) {
      case 'daily':
        return <DailyReport startDate={startDate} endDate={endDate} />;
      case 'weekly':
        return <WeeklyReport startDate={startDate} endDate={endDate} />;
      case 'line-usage':
        return <LineUsageReport startDate={startDate} endDate={endDate} />;
      case 'peak-hours':
        return <PeakHoursReport startDate={startDate} endDate={endDate} />;
      default:
        return <DailyReport startDate={startDate} endDate={endDate} />;
    }
  };

  return (
    <div className="report-dashboard">
      <div className="sidebar">
        <div className="nav-tabs">
          <button onClick={() => setActiveReport('daily')}>Daily Report</button>
          <button onClick={() => setActiveReport('weekly')}>Weekly Report</button>
          <button onClick={() => setActiveReport('line-usage')}>Line Usage</button>
          <button onClick={() => setActiveReport('peak-hours')}>Peak Hours</button>
        </div>
      
      </div>

      <div className="report-content">{renderReport()}</div>
    </div>
  );
};

export default ReportDashboard;
