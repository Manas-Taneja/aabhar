'use client'
import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './LowerPage.module.css';

interface RedRectangleProps {
  index: number;
}

const RedRectangle: React.FC<RedRectangleProps> = ({ index }) => {
  const [isVisible, setIsVisible] = useState(false); 
  const [opacity, setOpacity] = useState(0); // 

  const { ref, inView } = useInView({ threshold: 0.1, delay: 1000 });

  useEffect(() => {
    if (inView) {
      setIsVisible(true); 
      setOpacity(1 - (index * 0.1)); 
    } else {
      setIsVisible(false); 
      setOpacity(0.01);
    }
  }, [inView, index]);

  return (
    <div
      key={index}
      className={`redRectangle${index + 1}`}
      style={{
        opacity: isVisible ? opacity : 0,
        transition: `opacity 0.5s ease-in`, 
        margin: '20px',
        backgroundColor: '#8A0B03',
        height: '58.5rem',
        width: '4.75rem',
        position:'relative'
      }}
      ref={ref} 
    />
  );
};

export default function LowerPage() {
  const myRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({ threshold: 0.1, delay: 1000 });

  return (
    <div ref={ref} className={styles.redRectangleAll}>
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <RedRectangle key={index} index={index} /> 
        ))}
    </div>
  );
}
