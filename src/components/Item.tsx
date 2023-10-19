import React from 'react'
import AddToCartButton from './AddToCartButton'
  
  interface ItemProps {
    id: number;
    image: string;
    name: string;
    color: string;
    price: string;
    description: string;
    category: string;
    tags: string;
  }
  
  const Item: React.FC<ItemProps> = ({ id, image, name, color, price, description, category, tags }) => {
    return (
      <div>
        <div>
          <img src={image} alt={name}></img>
          <a href='/signin'>
            <h3>{name}</h3>
            <div>${price}</div>
          </a>
        </div>
        <AddToCartButton />
      </div>
    );
  };
  
  export default Item;