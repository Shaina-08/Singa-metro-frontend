// src/reports/components/DailyReport.jsx
import React, { useState, useEffect } from 'react';
import './Report.css';
import { API_BASE_URL } from '../../api/reportApi';

const DailyReport = () => {
  const [reportData, setReportData] = useState([]);
  const [error, setError] = useState('');
  const [startDate, setStartDate] = useState('2025-01-01');
  const [endDate, setEndDate] = useState('2025-01-07');

  useEffect(() => {
    if (startDate && endDate) {
      fetch(`${API_BASE_URL}/reports/daily?startDate=${startDate}&endDate=${endDate}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 'success') {
            setReportData(data.data.report);
          } else {
            setError(data.message);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [startDate, endDate]); 
  return (
    <div className="daily-report">
      <h2>Daily Report</h2>

      
      <div className="date-inputs">
        <label htmlFor="start-date">Start Date:</label>
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <label htmlFor="end-date">End Date:</label>
        <input
          type="date"
          id="end-date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      {error ? (
        <p className="error">{error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>From Line</th>
              <th>To Line</th>
              <th>Total Journeys</th>
              <th>Total Fare</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((entry, index) => (
              <tr key={index}>
                <td>{entry._id.date}</td>
                <td>{entry._id.fromLine}</td>
                <td>{entry._id.toLine}</td>
                <td>{entry.totalJourneys}</td>
                <td>${entry.totalFare.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DailyReport;
