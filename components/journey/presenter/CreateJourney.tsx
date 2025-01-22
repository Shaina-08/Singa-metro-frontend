import React, { useState } from "react";
import { apiFactory } from "../../../api/apiFactory";
import DownloadPdf from "./DownloadPdf";
import "./Journey.css"

const CreateJourneyComponent = () => {
  const nowDate = new Date().toISOString();

  const [journeyData, setJourneyData] = useState({
    fromLine: "",
    toLine: "",
    userId: "",
    dateTime: nowDate,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState("");
  const [fare, setFare] = useState<number | null>(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJourneyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess("");
    setFare(null);

    try {
      const response = await apiFactory.create(journeyData);

      if (response.data) {
        setSuccess("Journey created successfully!");
        setFare(response.data.data.journey.fare);
        setJourneyData({
          fromLine: response.data.data.journey.fromLine,
          toLine: response.data.data.journey.toLine,
          userId: response.data.data.journey.userId,
          dateTime: nowDate,
        });
      } else {
        throw new Error("Unexpected response format.");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="create-journey-container">
   

      <form className="create-journey-form" onSubmit={handleSubmit}>
        <label>From Line:</label>
        <input
          type="text"
          name="fromLine"
          value={journeyData.fromLine}
          onChange={handleInputChange}
          required
        />

        <label>To Line:</label>
        <input
          type="text"
          name="toLine"
          value={journeyData.toLine}
          onChange={handleInputChange}
          required
        />

        <label>User ID:</label>
        <input
          type="text"
          name="userId"
          value={journeyData.userId}
          onChange={handleInputChange}
          required
        />

        <label>Date & Time:</label>
        <input
          type="datetime-local"
          name="dateTime"
          value={journeyData.dateTime}
          onChange={handleInputChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Creating Journey..." : "Create Journey"}
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      
    </div>
    {fare !== null && (
        <div className="fare-display">
          <p>🎉 Your journey fare has been calculated successfully!</p>
          <p>
            <strong>${fare}</strong>
          </p>

          
          <DownloadPdf journeyData={journeyData} fare={fare} />
        </div>
      )}
    </>
  );
};

export default CreateJourneyComponent;
