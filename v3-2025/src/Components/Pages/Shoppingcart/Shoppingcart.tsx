// Shoppingcart.tsx
import React from 'react';
import ShoppingHeader from './ShoppingHeader';
import './Shoppingcart.css';
import Product from './Product';

// Mockdata för böcker
const books = [
  {
    title: "The Hound of the Baskervilles",
    author: "Sir Arthur Conan Doyle",
    description: "Sherlock Holmes and Dr. Watson investigate the mysterious death of Sir Charles Baskerville, allegedly caused by a ghostly hound. As they explore the moors surrounding Baskerville Hall, they uncover a sinister plot and a dangerous family secret. A classic mystery filled with suspense and intrigue."
  },
  {
    title: "A Study in Scarlet",
    author: "Sir Arthur Conan Doyle",
    description: "This is the first Sherlock Holmes novel, where Dr. Watson meets the brilliant but eccentric detective, Sherlock Holmes. The two embark on a thrilling investigation into a murder mystery that takes them from London to the American West. The case reveals a complex tale of vengeance and justice."
  },
  {
    title: "The Sign of the Four",
    author: "Sir Arthur Conan Doyle",
    description: "Sherlock Holmes and Dr. Watson are drawn into a case involving treasure, murder, and a long-lost pact. A mysterious woman seeks their help in solving the disappearance of her father and the deadly secrets surrounding an ancient Indian treasure. A thrilling adventure filled with danger and deception."
  },
  {
    title: "The Valley of Fear",
    author: "Sir Arthur Conan Doyle",
    description: "Sherlock Holmes investigates the mysterious murder of a man in a secluded mansion. As Holmes uncovers secrets from the past, the case leads him to a dangerous and shadowy organization. A story of intrigue, hidden identities, and a puzzle that challenges even Holmes’ brilliant mind."
  }
];

const Shoppingcart: React.FC = () => {
  return (
    <>
      <ShoppingHeader />
      <div id="book-list">
        {books.map((book, index) => (
          // Skicka varje bok som en prop till Product-komponenten
          <Product key={index} book={book} />
        ))}
      </div>
    </>
  );
};

export default Shoppingcart;
