import React, { useEffect, useState } from 'react'
import { getAllItems } from '../api/routes';
import Carousel from '../components/Carousel';


export default function LandingPage() {
  const [displayItems, setDisplayItems] = useState([]);

  useEffect(() => {
    const getFeatureItems = async () => {
      try {
        const data = await getAllItems();

        if(!data||!Array.isArray(data.results)){
          return;
        }

        const featureItems = data.results.length > 10 ? data.results.slice(-10) : data;
        setDisplayItems(featureItems);
      } catch (error) {
        console.error("Failed to fetch items:", error);
      }
    };
    getFeatureItems();
  }, []);


  return (
    <div>
      <Carousel items={displayItems} />
      <h1 className='featured-item-title'>Featured Items</h1>
    </div>
  );

}
