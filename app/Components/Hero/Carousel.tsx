// // carousel.tsx
// "use client";
// import Image from 'next/image';
// import React, { useEffect, useRef, useState } from 'react';


// const Carousel = ({ data, autoplayInterval = 5000 }: {
//   data: { image: string }[];
//   autoplayInterval?: number;
// }) => {
//   // State and Ref initialization
//   const [currentImg, setCurrentImg] = useState(0);
//   const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
//   const carouselRef = useRef(null);
//   let timerId: number | null = null; // Declare timerId as number or null

//   // useEffect to get the initial carousel size
//   useEffect(() => {
//     let elem = carouselRef.current as unknown as HTMLDivElement;
//     let { width, height } = elem.getBoundingClientRect();
//     if (carouselRef.current) {
//       setCarouselSize({ width, height });
//     }
//   }, []);

//   // useEffect to handle automatic image change
//   useEffect(() => {
//     let timerId: NodeJS.Timeout | null = null; // Declare timerId as NodeJS.Timeout or null

//     if (autoplayInterval) {
//         // Clear any previous timer
//         if (timerId !== null) {
//             clearTimeout(timerId as NodeJS.Timeout); // Cast timerId to NodeJS.Timeout
//         }

//         // Create a new timer for automatic image change
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//         timerId = setTimeout(() => {
//             setCurrentImg((prev) => (prev + 1) % data.length); // Wrap around at end
//         }, autoplayInterval);

//         // Cleanup function to clear timer on unmount
//         return () => clearTimeout(timerId as NodeJS.Timeout); // Cast timerId to NodeJS.Timeout
//     }
//   }, [autoplayInterval, data.length, currentImg]);

//   return (     
//       <div className="w-full h-80 rounded-md overflow-hidden relative">
//         <div
//           ref={carouselRef}
//           style={{
//             // left: -currentImg * carouselSize.width,
//             // transition: "all 0.3s ease-in-out",
//           }}
//           className="w-full h-full absolute flex transition-all duration-300"
//         >
            
//           {data.map((v, i) => (
//             <div key={i} className="flex justify-center relative shrink-0 w-full h-full">
//               <Image
//                 className="pointer-events-none"
//                 alt={`carousel-image-${i}`}
//                 fill
//                 src={v.image || "https://random.imagecdn.app/500/500"}
//               />
              
//             </div>
//           ))}
//         </div>
//       </div>

//   );
// };

// export default Carousel;

