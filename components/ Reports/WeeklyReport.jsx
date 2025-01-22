import React, { useState } from 'react';
import { API_BASE_URL } from '../../api/reportApi';

const WeeklyReport = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reportData, setReportData] = useState([]);
  const [error, setError] = useState('');

  const fetchWeeklyReport = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/reports/weekly?startDate=${startDate}&endDate=${endDate}`);
      const data = await response.json();

      if (data.status === 'success') {
        setReportData(data.data.report);
      } else {
        setError('No data found for the given date range');
      }
    } catch (error) {
     console.log(error);
    }
  };

  return (
    <div className="report">
      <h2>Weekly Report</h2>
      <div className="inputs">
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label>End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button onClick={fetchWeeklyReport}>Get Report</button>
      </div>
      {error && <p className="error">{error}</p>}
      {reportData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Week</th>
              <th>From Line</th>
              <th>To Line</th>
              <th>Total Journeys</th>
              <th>Total Fare</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((entry, index) => (
              <tr key={index}>
                <td>{entry._id.week}</td>
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

export default WeeklyReport;
