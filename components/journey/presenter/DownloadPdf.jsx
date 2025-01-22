import React from "react";
import { jsPDF } from "jspdf";

const DownloadPdf = ({ journeyData, fare }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
  
    
    doc.setFontSize(22);
    doc.setTextColor("#2c3e50"); 
    doc.text("Journey Invoice", 105, 20, { align: "center" });
  
   
    doc.setDrawColor(200, 200, 200);
    doc.line(20, 25, 190, 25);
  
    
    doc.setFontSize(14);
    doc.setTextColor("#34495e");
    doc.text("Journey Details:", 20, 40);
  
    doc.setFontSize(12);
    doc.text(`User ID:`, 20, 50);
    doc.setFont("helvetica", "bold");
    doc.text(`${journeyData.userId}`, 60, 50);
  
    doc.setFont("helvetica", "normal");
    doc.text(`From Line:`, 20, 60);
    doc.setFont("helvetica", "bold");
    doc.text(`${journeyData.fromLine}`, 60, 60);
  
    doc.setFont("helvetica", "normal");
    doc.text(`To Line:`, 20, 70);
    doc.setFont("helvetica", "bold");
    doc.text(`${journeyData.toLine}`, 60, 70);
  
    doc.setFont("helvetica", "normal");
    doc.text(`Date & Time:`, 20, 80);
    doc.setFont("helvetica", "bold");
    doc.text(`${new Date(journeyData.dateTime).toLocaleString()}`, 60, 80);
  
    doc.setFont("helvetica", "normal");
    doc.text(`Fare:`, 20, 90);
    doc.setFont("helvetica", "bold");
    doc.setTextColor("#27ae60"); 
    doc.text(`$${fare}`, 60, 90);
  
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor("#7f8c8d"); 
    doc.text("Thank you for using our service!", 105, 120, { align: "center" });
  
    doc.setFontSize(10);
    doc.text(
      "For inquiries, contact us at support@example.com",
      105,
      130,
      { align: "center" }
    );
  
    
    doc.save("JourneyInvoice.pdf");
  };
  

  return (
    <button
      onClick={generatePDF}
      style={{
        padding: "10px 20px",
        marginTop: "20px",
        backgroundColor: "#4caf50",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      Download Invoice
    </button>
  );
};

export default DownloadPdf;
