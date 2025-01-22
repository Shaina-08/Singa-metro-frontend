import React, { useState } from 'react';
import axios from 'axios';
import CSVUploadPresenter from './CSVUploadPresenter';
import { API_BASE_URL } from '../../api/reportApi';

const CSVUploadContainer = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    setLoading(true);
    setError('');
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(
        `${API_BASE_URL}/csv`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );
      setData(response.data); // Save the data received from the API
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || 'Failed to upload and process the file. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CSVUploadPresenter
      onFileChange={handleFileChange}
      onUpload={handleUpload}
      data={data}
      loading={loading}
      error={error}
    />
  );
};

export default CSVUploadContainer;
