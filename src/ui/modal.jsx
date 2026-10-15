import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, onClose }) {
  const previousFocus = useRef(document.activeElement);
  const modalContainerRef = useRef(null);

  useEffect(() => {
    if (modalContainerRef.current) {
      modalContainerRef.current.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (previousFocus.current) {
        previousFocus.current.focus();
      }
    };
  }, [onClose]);

  return createPortal(
    <div className="overlay" onClick={onClose}>
      <div 
        ref={modalContainerRef}
        tabIndex="-1"
        role="dialog" 
        aria-modal="true"
        className="panel" 
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}
