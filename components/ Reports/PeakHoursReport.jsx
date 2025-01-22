import React, { useState } from 'react';
import { API_BASE_URL } from '../../api/reportApi';

const PeakHoursReport = () => {
  const [date, setDate] = useState('');
  const [reportData, setReportData] = useState([]);
  const [error, setError] = useState('');

  const fetchPeakHoursReport = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/reports/peak-hours?date=${date}`);
      const data = await response.json();

      if (data.status === 'success') {
        setReportData(data.data.report);
      } else {
        setError('No data found for the given date');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="report">
      <h2>Peak Hours Report</h2>
      <div className="inputs">
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={fetchPeakHoursReport}>Get Report</button>
      </div>
      {error && <p className="error">{error}</p>}
      {reportData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Hour</th>
              <th>Total Journeys</th>
              <th>Average Fare</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((entry, index) => (
              <tr key={index}>
                <td>{entry._id.hour}</td>
                <td>{entry.totalJourneys}</td>
                <td>${entry.averageFare.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PeakHoursReport;
