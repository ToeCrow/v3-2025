import React from 'react';

interface HeaderProps {
  dag: string;
}

const OverTyping: React.FC<HeaderProps> = ({ dag }) => {
  return (
    <header>
      <h1 className="bold">Övning {dag}</h1>
    </header>
  );
};

export default OverTyping
