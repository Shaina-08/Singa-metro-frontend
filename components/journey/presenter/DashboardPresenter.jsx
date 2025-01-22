import React from 'react';
import JourneyTable from './JourneyTable';
import JourneyForm from './JourneyForm';

const DashboardPresenter = ({ journeys }) => (
  <div style={{ padding: '20px' }}>
    <h1>Journey Dashboard</h1>
    <JourneyForm />
    <JourneyTable journeys={journeys} />
  </div>
);

export default DashboardPresenter;
