
import React, { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [elements, setElements] = useState<React.ReactNode[]>([]);
  
  useEffect(() => {
    // Create initial elements
    createInitialElements();
    
    // Add new elements periodically
    const interval = setInterval(() => {
      addNewElement();
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  const createInitialElements = () => {
    const initialElements = [];
    for (let i = 0; i < 10; i++) {
      initialElements.push(createRandomElement(i));
    }
    setElements(initialElements);
  };
  
  const addNewElement = () => {
    setElements(prevElements => {
      // Remove oldest elements if there are too many
      const updatedElements = [...prevElements];
      if (updatedElements.length > 30) {
        updatedElements.shift();
      }
      
      // Add a new element
      updatedElements.push(createRandomElement(Date.now()));
      return updatedElements;
    });
  };
  
  const createRandomElement = (key: number) => {
    const isRosePetal = Math.random() > 0.5;
    const randomLeft = Math.random() * 100;
    const randomDelay = Math.random() * 5;
    const randomDuration = (Math.random() * 5) + 5;
    
    return (
      <div
        key={key}
        className={isRosePetal ? 'rose-petal' : 'golden-sparkle'}
        style={{
          left: `${randomLeft}%`,
          animationDelay: `${randomDelay}s`,
          animationDuration: `${randomDuration}s`
        }}
      />
    );
  };
  
  return (
    <>
      <div className="bokeh"></div>
      {elements}
    </>
  );
};

export default AnimatedBackground;
