import React from 'react';

interface HeaderProps {
  dag: string;
}

const Header: React.FC<HeaderProps> = ({ dag }) => {
  return (
    <header>Övning {dag}</header>
  );
};

export default Header;
