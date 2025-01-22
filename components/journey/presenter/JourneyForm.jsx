import React, { useState } from 'react';
import { apiFactory } from '../../../api/apiFactory';

const JourneyForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiFactory.create({ name, description });
      alert('Journey created successfully!');
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button type="submit">Create Journey</button>
    </form>
  );
};

export default JourneyForm;
