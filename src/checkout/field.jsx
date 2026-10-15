import React from 'react';

export default function Field({ id, label, error, touched, children }) {
  const showError = touched && error;

  return (
    <div className={`form-field ${showError ? 'field-error' : ''}`}>
      <label htmlFor={id}>{label}</label>
      
      {React.cloneElement(children, {
        id,
        'aria-invalid': !!showError,
        'aria-describedby': showError ? `${id}-error` : undefined
      })}

      {showError && (
        <p id={`${id}-error`} role="alert" className="error-text">
          ❌ {error}
        </p>
      )}
    </div>
  );
}
