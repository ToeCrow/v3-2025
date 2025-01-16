import React from 'react';
import './SplitInput.css';

interface SplitInputProps {
  label: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;  // Lägg till onChange prop
}

const SplitInput: React.FC<SplitInputProps> = ({ label, id, onChange }) => {
  return (
    <div id='SplitInput'>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} onChange={onChange} />
      <div className="line"></div>
    </div>
  );
};

export default SplitInput;
