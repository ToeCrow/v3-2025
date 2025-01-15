// Product.tsx
import React from 'react';

// Definiera typ för book-props
interface ProductProps {
  book: {
    title: string;
    author: string;
    description: string;
  };
}

const Product: React.FC <ProductProps> = ({ book }) => {

  const { title, author, description } = book;

  return (
    <div className="product">
      <h2>{title}</h2>
      <h4>{author}</h4>
      <p>{description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
