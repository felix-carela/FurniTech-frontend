import React, { useState, useEffect } from 'react';
import { getAllItems } from '../api/routes';
import Item from '../components/Item';

interface Props {
  lighting?: boolean;
  furniture?: boolean;
  decor?: boolean;
  linens?: boolean;
}

const MarketPlace: React.FC<Props> = ({ lighting, furniture, decor, linens }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const data = await getAllItems();
      setItems(data['results']);
    };
    getItems();
  }, []);

  console.log("In Marketplace 1st instance in Items:")
  console.log(items)

  return (
    <div>
      <h1>MarketPlace</h1>
      <div>
        {items.map((item, index) => (
          <Item key={index} id={item['id']} image={item['image']} name={item['name']} color={item['color']} price={item['price']} description={item['description']} category={item['category']} tags={item['tags']} />
        ))}
      </div>
    </div>
  );
};

export default MarketPlace;
