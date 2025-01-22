import React, { useState } from 'react';
import { API_BASE_URL } from '../../api/reportApi';

const LineUsageReport = () => {
  const [reportData, setReportData] = useState([]);
  const [error, setError] = useState('');

  const fetchLineUsageReport = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/reports/line-usage`);
      const data = await response.json();

      if (data.status === 'success') {
        setReportData(data.data.report);
      } else {
        setError('No data found');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="report">
      <h2>Line Usage Report</h2>
      <button onClick={fetchLineUsageReport}>Get Report</button>
      {error && <p className="error">{error}</p>}
      {reportData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>From Line</th>
              <th>To Line</th>
              <th>Total Journeys</th>
              <th>Total Fare</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((entry, index) => (
              <tr key={index}>
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

export default LineUsageReport;
