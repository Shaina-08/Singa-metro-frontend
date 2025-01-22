import React from 'react';
import TableComponent from '../Library/TableComponent';

const CSVUploadPresenter = ({ onFileChange, onUpload, data, loading, error }) => {
  const columns = [
    { header: 'From', key: 'from' },
    { header: 'To', key: 'to' },
    { header: 'Date', key: 'date' },
    { header: 'User', key: 'user' },
    { header: 'Fare', key: 'fare' },
  ];

  const processedData = data?.results?.map((item) => ({
    from: item.processedData.fromLine,
    to: item.processedData.toLine,
    date: new Date(item.processedData.dateTime).toLocaleString(),
    user: item.processedData.userId,
    fare: item.fare,
  })) || [];

  console.log('processedData', processedData);
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>CSV Upload</h2>
      <input type="file" accept=".csv" onChange={onFileChange} style={{ marginBottom: '10px' }} />
      <button onClick={onUpload} disabled={loading} style={{ padding: '10px 20px' }}>
        {loading ? 'Uploading...' : 'Upload'}
      </button>

      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

      {data && data.results && (
        <div style={{ marginTop: '20px' }}>
          
          {processedData.length > 0 && (
        <TableComponent
          title="Fare Data"
          columns={columns}
          data={processedData}
        />
      )}
        </div>
      )}
    </div>
  );
};

export default CSVUploadPresenter;
