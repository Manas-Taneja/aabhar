// 'use client'
// import React, { useRef, useState } from 'react';
// import { useInView } from 'react-intersection-observer';
// import styles from './LowerPage.module.css';

// interface RedRectangleProps {
//   index: number;
//   opacity: number; // Pass opacity as a prop
// }

// const RedRectangle: React.FC<RedRectangleProps> = ({ index, opacity }) => (
//   <div
//     key={index}
//     className={`redRectangle${index + 1}`}
//     style={{
//       opacity, // Use prop for opacity
//       margin: '20px',
//       backgroundColor: '#8A0B03',
//       height: '58.5rem',
//       width: '4.75rem',
//     }}
//   />
// );

// export default function LowerPage(){
//   const myRef = useRef<HTMLDivElement>(null);
//   const { ref, inView } = useInView({ threshold: 0.1, delay: 1000}); 

//   return (
//     <div ref={ref} className={styles.redRectangleAll}>
//       {Array(12)
//         .fill(null)
//         .map((_, index) => (
//           <RedRectangle key={index} index={index} opacity={inView ? 1-(index * 0.1) : 0.01} /> // Adjust opacity based on visibility
//         ))}
//     </div>
//   );
// }
'use client'
import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './LowerPage.module.css';

interface RedRectangleProps {
  index: number;
}

const RedRectangle: React.FC<RedRectangleProps> = ({ index }) => {
  const [isVisible, setIsVisible] = useState(false); // Track visibility state
  const [opacity, setOpacity] = useState(0); // Initial opacity

  const { ref, inView } = useInView({ threshold: 0.1, delay: 1000 });

  useEffect(() => {
    if (inView) {
      setIsVisible(true); // Set visible on intersection
      setOpacity(1 - (index * 0.1)); // Set final opacity
    } else {
      setIsVisible(false); // Set invisible on out of view
      setOpacity(0.01); // Set initial opacity
    }
  }, [inView, index]); // Update on inView and index changes

  return (
    <div
      key={index}
      className={`redRectangle${index + 1}`}
      style={{
        opacity: isVisible ? opacity : 0, // Use visibility state for opacity
        transition: `opacity 0.5s ease-in`, // Add transition for animation
        margin: '20px',
        backgroundColor: '#8A0B03',
        height: '58.5rem',
        width: '4.75rem',
      }}
      ref={ref} // Pass ref to useInView
    />
  );
};

export default function LowerPage() {
  const myRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({ threshold: 0.1, delay: 1000 });

  return (
    <div ref={ref} className={styles.redRectangleAll}>
      {Array(12)
        .fill(null)
        .map((_, index) => (
          <RedRectangle key={index} index={index} /> // No need for opacity prop
        ))}
    </div>
  );
}
