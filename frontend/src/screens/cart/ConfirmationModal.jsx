// ConfirmationModal.jsx
import React from 'react';
import './ConfirmationModal.css'; // Add styles for the modal

export default function ConfirmationModal({ show, onClose, onConfirm, summary }) {
  if (!show) return null;

  return (
    <div className="confirmation-modal-overlay">
      <div className="confirmation-modal">
        <h2>Confirm Your Order</h2>
        <pre>{summary}</pre>
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
