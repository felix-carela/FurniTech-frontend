import React, { useEffect, useState } from 'react'
import { getAllItems } from '../api/routes';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Item from '../components/Item';


export default function LandingPage() {
  const [displayItems, setDisplayItems] = useState([])

  useEffect(() => {
    const getFeatureItems = async () => {
      try {
        const data = await getAllItems();

        if(!data||!Array.isArray(data.results)){
          console.log('it aint here', data.results);
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

  console.log("In Landing Page Display Items:")
  console.log(displayItems)

  return (
    <div>
      LandingPage
    </div>
  )
}
