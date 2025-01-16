import React, { useState } from 'react';
import SplitInput from '../SplitInput/SplitInput';
import './SplitUpFrame.css';

const SplitUpFrame: React.FC = () => {
  // Skapa state för varje inputfält
  const [summa, setSumma] = useState('');
  const [vanner, setVanner] = useState('');
  const [dricks, setDricks] = useState('');
  const [result, setResult] = useState<string | null>(null); // State för att hålla resultatet

  // Funktion för att hantera när användaren skriver i input-fälten
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
    setter(e.target.value);
  };

  // Funktion för att beräkna resultatet
  const calculate = () => {
    const summaNum = parseFloat(summa);
    const vannerNum = parseFloat(vanner);
    const dricksNum = parseFloat(dricks);
  
    // Kontrollera att alla värden är giltiga nummer
    if (isNaN(summaNum) || isNaN(vannerNum) || isNaN(dricksNum) || vannerNum === 0) {
      return 'Ogiltiga inmatningar';
    }
  
    // Beräkna dricks per vän enligt formeln: (summa + (summa * dricks)) / vanner
    const result = (summaNum + (summaNum * (dricksNum/100))) / vannerNum;
    return result.toFixed(2); // Returnera resultatet med 2 decimaler
  };
  

  const handleButtonClick = () => {
    const calculatedValue = calculate();
    setResult(calculatedValue); // Uppdatera resultatet i state
  };

  return (
    <div id='split-up'>
      <SplitInput label="Summa" id="summa-input" onChange={(e) => handleInputChange(e, setSumma)} />
      <SplitInput label="Antal Vänner" id="vanner-input" onChange={(e) => handleInputChange(e, setVanner)} />
      <SplitInput label="Dricks (skriv i procent)" id="dricks-input" onChange={(e) => handleInputChange(e, setDricks)} />
      <button onClick={handleButtonClick}>Räkna</button>

      {/* Visa resultatet om det finns */}
      {result !== null && <p id="answer">Resultat: {result}</p>}
    </div>
  );
};

export default SplitUpFrame;
