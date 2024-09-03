import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="flex-col justify-center items-center bg-gray-900 text-white p-6 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        
        <ol className="list-decimal list-inside space-y-2">
          <li>Fill up all the details mentioned.</li>
          <li>All the teammates should fill up the same team name and ID.</li>
          <li>Team size: 2-4 members.</li>
          <li>After filling up all the details, click 'Proceed to payment'.</li>
          <li>
            After that, you’ll be redirected to the official Gravitas'24 website.
          </li>
          <li>Complete the payment and YAY! You’re registered.</li>
        </ol>
        <center>
        <button 
          
          onClick={onClose} 
          className="mt-6 bg-gradient-to-r from-start to-end font-light px-4 py-2 rounded-md  transform transition-transform duration-300 hover:-translate-y-2 text-white"
        >
          Close
        </button>
        </center>
      </div>
    </div>
  );
};

export default Modal;
