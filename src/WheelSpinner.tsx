// import  { useState, useEffect } from 'react';

// const WheelSpinner = () => {
//   const cards = [
//     "./assets/images/cards/card1.png",
//     "./assets/images/cards/card2.png",
//     "./assets/images/cards/card3.png",
//     "./assets/images/cards/card4.png",
//     "./assets/images/cards/card5.png",
//     "./assets/images/cards/card6.png",
//     "./assets/images/cards/card7.png",
//     "./assets/images/cards/card8.png",
//     "./assets/images/cards/card9.png",
//     "./assets/images/cards/card10.png",
//     "./assets/images/cards/card11.png",
//     "./assets/images/cards/card12.png",
//     "./assets/images/cards/card13.png",
//     "./assets/images/cards/card14.png",
//     "./assets/images/cards/card15.png",
//   ];

//   const [isSpinning, setIsSpinning] = useState(false);
//   const [showFixedCards, setShowFixedCards] = useState(false);
//   const [currentCards, setCurrentCards] = useState(cards.slice(0, 3));
//   const [stopSpinner, setStopSpinner] = useState(false)
//   const [fal, setFal] = useState(false)
//   const selectWinningCards = () => {
//     const randomIndex = Math.floor(Math.random() * cards.length);
//     return [cards[randomIndex], cards[randomIndex], cards[randomIndex]];
//   };

//   const startSpin = () => {
//     if (isSpinning) return;
//     setShowFixedCards(false);
//     setIsSpinning(true);

//     const spinInterval = setInterval(() => {
//       setCurrentCards([
//         cards[Math.floor(Math.random() * cards.length)],
//         cards[Math.floor(Math.random() * cards.length)],
//         cards[Math.floor(Math.random() * cards.length)]
//       ]);
//     }, 150);

//     setTimeout(() => {
//       clearInterval(spinInterval);
//       const winningCards = selectWinningCards();
//       setCurrentCards(winningCards);
//       setIsSpinning(false);
//       setStopSpinner(true);
//       setTimeout(() => {
//         setShowFixedCards(true);
//       }, 300);
//     }, 5000);
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowFixedCards(true);

//       const autoSpinTimer = setTimeout(() => {
//         startSpin();
//       }, 100);
//       return () => clearTimeout(autoSpinTimer)

//     }, 100);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     const style = document.createElement('style');
//     style.innerHTML = `
//       .wheel-container {
//         perspective: 1000px;
//       }
//       @keyframes spin-vertical {
//         0% { 
//           transform: rotateX(0deg); 
//         }
//         100% { 
//           transform: rotateX(360deg); 
//         }
//       }
//       .animate-spin-vertical {
//         animation: spin-vertical 0.5s linear infinite; 
//         backface-visibility: hidden;
//       }
//     `;
//     document.head.appendChild(style);
//     return () => {
//       if (document.head.contains(style)) {
//         document.head.removeChild(style);
//       }
//     };
//   }, []);

//   return (
//     <>
//       {!fal && (
//         <div className="relative w-full max-w-md mx-auto cursor-pointer wheel-container" onClick={() => {
//           // startSpin
//           setFal(true)
//         }}>
//           <div className="flex flex-col gap-1 items-center text-primary-dark text-white">
//             {!stopSpinner ? (
//               <p className="text-md font-bold">
//                 فال تو در حال آماده‌شدن است، گوش جانت را تیز کن…
//               </p>) : (

//               <p className="text-xl font-bold">
//                 فال تو اماده است ...!!
//               </p>)}
//           </div>
//           <img
//             src="./assets/images/round.png"
//             alt="fal"
//             className={`w-full transition-transform duration-1000 ease-out ${isSpinning ? 'animate-spin-vertical' : 'transform-none'
//               }`}
//           />

//           <div className={`absolute top-1/2 left-1/2 md:-translate-x-32 -translate-x-10/18  translate-y-3 flex md:gap-16 gap-10 transition-all duration-500 ${showFixedCards ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
//             }`}>
//             {currentCards.map((card, index) => (
//               <img
//                 key={`fixed-${index}`}
//                 src={card}
//                 alt={`card${index + 1}`}
//                 className="w-8 h-8 object-cover rounded-lg mx-auto text-center"
//               />
//             ))}
//           </div>

//           {/* fal */}
//           <div className={`absolute top-1/2 left-1/2 md:-translate-x-32 -translate-x-10/18  translate-y-3 flex md:gap-16 gap-10 transition-all duration-500 ${isSpinning ? 'opacity-100 scale-100 blur-sm' : 'opacity-0 scale-95'
//             }`}>
//             {currentCards.map((card, index) => (
//               <img
//                 key={`spinning-${index}`}
//                 src={card}
//                 alt={`round${index + 1}`}
//                 className="w-8 h-8 object-cover rounded-lg  animate-pulse "
//               />
//             ))}
//           </div>

//         </div>)}

//       {fal && (
//         <div className="">
//           <div className="flex gap-3 items-center opacity-50">
//             <div className="h-[0.075rem] bg-gradient-to-l from-transparent to-primary-dark flex-1" />
//             <img alt="shape" className="w-full" src="./assets/images/shape.png" />
//             <div className="h-[0.075rem] bg-gradient-to-r from-transparent to-primary-dark flex-1" />
//           </div>
//           <div className="relative  h-100 rounded-lg overflow-hidden">

//             <img
//               src="./assets/images/topcorner.png"
//               alt="topcorner"
//               className="absolute top-2 left-2 w-26 h-46 object-contain rounded"
//             />

//             <img
//               src="./assets/images/bcorner.png"
//               alt="corner"
//               className="absolute bottom-2 -right-14 w-56 h-46 object-contain rounded"
//             />

//             <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-lg font-semibold text-gray-800">
//               فال1  !
//             </p>
//           </div>
//         </div>)}


//     </>
//   );
// };

// export default WheelSpinner;

// import { useState, useEffect } from 'react';

// const WheelSpinner = () => {
//   const cards = [
//     "./assets/images/cards/card1.png",
//     "./assets/images/cards/card2.png",
//     "./assets/images/cards/card3.png",
//     "./assets/images/cards/card4.png",
//     "./assets/images/cards/card5.png",
//     "./assets/images/cards/card6.png",
//     "./assets/images/cards/card7.png",
//     "./assets/images/cards/card8.png",
//     "./assets/images/cards/card9.png",
//     "./assets/images/cards/card10.png",
//     "./assets/images/cards/card11.png",
//     "./assets/images/cards/card12.png",
//     "./assets/images/cards/card13.png",
//     "./assets/images/cards/card14.png",
//     "./assets/images/cards/card15.png",
//   ];
//   const [isSpinning, setIsSpinning] = useState(false);
//   const [showFixedCards, setShowFixedCards] = useState(false);
//   const [showSnow, setShowSnow] = useState(false);
//   const [currentCards, setCurrentCards] = useState(cards.slice(0, 3));
//   const [stopSpinner, setStopSpinner] = useState(false);
//   const [fal, setFal] = useState(false);

//   const selectWinningCard = () => {
//     const randomIndex = Math.floor(Math.random() * cards.length);
//     return cards[randomIndex];
//   };

//   const startSpin = () => {
//     if (isSpinning) return;
//     setShowFixedCards(false);
//     setShowSnow(false);
//     setIsSpinning(true);
//     const spinInterval = setInterval(() => {
//       setCurrentCards([
//         cards[Math.floor(Math.random() * cards.length)],
//         cards[Math.floor(Math.random() * cards.length)],
//         cards[Math.floor(Math.random() * cards.length)]
//       ]);
//     }, 150);
//     setTimeout(() => {
//       clearInterval(spinInterval);
//       const winningCard = selectWinningCard();
//       setCurrentCards([winningCard, winningCard, winningCard]); // نمایش یکی از کارت‌ها به صورت تکراری برای همخوانی بصری
//       setIsSpinning(false);
//       setStopSpinner(true);
//       setTimeout(() => {
//         setShowFixedCards(true);
//         setTimeout(() => {
//           setShowSnow(true); // فعال کردن انیمیشن برف بعد از ثابت شدن کارت‌ها
//         }, 500);
//       }, 300);
//     }, 3000); // 3 ثانیه
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowFixedCards(true);
//       const autoSpinTimer = setTimeout(() => {
//         startSpin();
//       }, 100);
//       return () => clearTimeout(autoSpinTimer);
//     }, 100);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     const style = document.createElement('style');
//     style.innerHTML = `
//       .wheel-container {
//         perspective: 1000px;
//         height: 201px; /* ارتفاع ثابت برای میله */
//       }
//       @keyframes spin-vertical {
//         0% {
//           transform: rotateX(0deg);
//         }
//         100% {
//           transform: rotateX(360deg);
//         }
//       }
//       .animate-spin-vertical {
//         animation: spin-vertical 0.5s linear infinite;
//         backface-visibility: hidden;
//       }
//       .spinning-cards-container {
//         perspective: 1000px;
//       }
//       .spinning-cards-container.animate-spin-vertical {
//         animation: spin-vertical 0.5s linear infinite;
//         backface-visibility: hidden;
//       }
//       /* انیمیشن برف کریسمسی */
//       .snow-container {
//         position: fixed;
//         top: 0;
//         left: 0;
//         width: 100vw;
//         height: 100vh;
//         pointer-events: none;
//         z-index: 9999;
//         opacity: 0;
//         transition: opacity 0.5s ease-in;
//       }
//       .snow-container.show {
//         opacity: 1;
//       }
//       .snowflake {
//         position: absolute;
//         color: #fff;
//         font-size: 1em;
//         animation: snowfall linear infinite;
//       }
//       @keyframes snowfall {
//         0% {
//           transform: translateY(-100vh) rotate(0deg);
//           opacity: 1;
//         }
//         100% {
//           transform: translateY(100vh) rotate(360deg);
//           opacity: 0;
//         }
//       }
//       /* تولید برفک‌ها با اندازه‌های مختلف */
//       .snowflake:nth-child(1) { left: 10%; animation-duration: 10s; animation-delay: 0s; }
//       .snowflake:nth-child(2) { left: 20%; animation-duration: 15s; animation-delay: 1s; font-size: 0.8em; }
//       .snowflake:nth-child(3) { left: 30%; animation-duration: 12s; animation-delay: 2s; }
//       .snowflake:nth-child(4) { left: 40%; animation-duration: 18s; animation-delay: 3s; font-size: 1.2em; }
//       .snowflake:nth-child(5) { left: 50%; animation-duration: 14s; animation-delay: 4s; }
//       .snowflake:nth-child(6) { left: 60%; animation-duration: 16s; animation-delay: 5s; font-size: 0.9em; }
//       .snowflake:nth-child(7) { left: 70%; animation-duration: 11s; animation-delay: 6s; }
//       .snowflake:nth-child(8) { left: 80%; animation-duration: 13s; animation-delay: 7s; font-size: 1.1em; }
//       .snowflake:nth-child(9) { left: 90%; animation-duration: 17s; animation-delay: 8s; }
//       .snowflake:nth-child(10) { left: 15%; animation-duration: 9s; animation-delay: 9s; font-size: 0.7em; }
//       .snowflake:nth-child(11) { left: 25%; animation-duration: 20s; animation-delay: 10s; }
//       .snowflake:nth-child(12) { left: 35%; animation-duration: 12s; animation-delay: 11s; font-size: 1em; }
//       /* تکرار برای برف بیشتر */
//       .snowflake:nth-child(13) { left: 45%; animation-duration: 15s; animation-delay: 0s; font-size: 0.8em; }
//       .snowflake:nth-child(14) { left: 55%; animation-duration: 14s; animation-delay: 1s; }
//       .snowflake:nth-child(15) { left: 65%; animation-duration: 16s; animation-delay: 2s; font-size: 1.2em; }
//       .snowflake:nth-child(16) { left: 75%; animation-duration: 11s; animation-delay: 3s; }
//       .snowflake:nth-child(17) { left: 85%; animation-duration: 13s; animation-delay: 4s; font-size: 0.9em; }
//       .snowflake:nth-child(18) { left: 5%; animation-duration: 18s; animation-delay: 5s; }
//       .snowflake:nth-child(19) { left: 95%; animation-duration: 10s; animation-delay: 6s; font-size: 1.1em; }
//       .snowflake:nth-child(20) { left: 50%; animation-duration: 17s; animation-delay: 7s; }
//     `;
//     document.head.appendChild(style);
//     return () => {
//       if (document.head.contains(style)) {
//         document.head.removeChild(style);
//       }
//     };
//   }, []);

//   return (
//     <>
//       {!fal && (
//         <div className="relative w-full max-w-md mx-auto cursor-pointer wheel-container" onClick={() => {
//           setFal(true);
//         }}>
//           <div className="flex flex-col gap-1 items-center text-primary-dark text-white">
//             {!stopSpinner ? (
//               <p className="text-md font-bold">
//                 فال تو در حال آماده‌شدن است، گوش جانت را تیز کن…
//               </p>
//             ) : (
//               <p className="text-xl font-bold">
//                 فال تو اماده است ...!!
//               </p>
//             )}
//           </div>
//           <img
//             src="./assets/images/round.png"
//             alt="fal"
//             className="w-full transition-transform duration-1000 ease-out" // حذف انیمیشن از میله، ثابت نگه داشتن
//             style={{ height: '201px' }} // ارتفاع ثابت
//           />
//           <div className={`absolute top-1/2 left-1/2 md:-translate-x-32 -translate-x-10/18 translate-y-3 flex md:gap-16 gap-10 transition-all duration-500 ${showFixedCards ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
//             }`}>
//             {currentCards.map((card, index) => (
//               <img
//                 key={`fixed-${index}`}
//                 src={card}
//                 alt={`card${index + 1}`}
//                 className="w-8 h-8 object-cover rounded-lg mx-auto text-center"
//               />
//             ))}
//           </div>
//           {/* spinning cards با انیمیشن عمودی (بالا پایین) */}
//           <div className={`absolute top-1/2 left-1/2 md:-translate-x-32 -translate-x-10/18 translate-y-3 flex md:gap-16 gap-10 transition-all duration-500 spinning-cards-container ${isSpinning ? 'animate-spin-vertical opacity-100 scale-100' : 'opacity-0 scale-95'
//             }`}>
//             {currentCards.map((card, index) => (
//               <img
//                 key={`spinning-${index}`}
//                 src={card}
//                 alt={`round${index + 1}`}
//                 className="w-8 h-8 object-cover rounded-lg animate-pulse"
//               />
//             ))}
//           </div>
//         </div>
//       )}
//       {showSnow && (
//         <div className={`snow-container ${showSnow ? 'show' : ''}`}>
//           {[...Array(20)].map((_, i) => (
//             <div key={i} className="snowflake">❄</div> // استفاده از ایموجی برف برای سادگی
//           ))}
//         </div>
//       )}
//       {fal && (
//         <div className="">
//           <div className="flex gap-3 items-center opacity-50">
//             <div className="h-[0.075rem] bg-gradient-to-l from-transparent to-primary-dark flex-1" />
//             <img alt="shape" className="w-full" src="./assets/images/shape.png" />
//             <div className="h-[0.075rem] bg-gradient-to-r from-transparent to-primary-dark flex-1" />
//           </div>
//           <div className="relative h-100 rounded-lg overflow-hidden">
//             <img
//               src="./assets/images/topcorner.png"
//               alt="topcorner"
//               className="absolute top-2 left-2 w-26 h-46 object-contain rounded"
//             />
//             <img
//               src="./assets/images/bcorner.png"
//               alt="corner"
//               className="absolute bottom-2 -right-14 w-56 h-46 object-contain rounded"
//             />
//             <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-lg font-semibold text-gray-800">
//               فال1 !
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default WheelSpinner;


// import { useState, useEffect } from 'react';

// const WheelSpinner = () => {
//   const cards = [
//     "./assets/images/cards/card1.png",
//     "./assets/images/cards/card2.png",
//     "./assets/images/cards/card3.png",
//     "./assets/images/cards/card4.png",
//     "./assets/images/cards/card5.png",
//     "./assets/images/cards/card6.png",
//     "./assets/images/cards/card7.png",
//     "./assets/images/cards/card8.png",
//     "./assets/images/cards/card9.png",
//     "./assets/images/cards/card10.png",
//     "./assets/images/cards/card11.png",
//     "./assets/images/cards/card12.png",
//     "./assets/images/cards/card13.png",
//     "./assets/images/cards/card14.png",
//     "./assets/images/cards/card15.png",
//   ];
//   const [isSpinning, setIsSpinning] = useState(false);
//   const [showFixedCards, setShowFixedCards] = useState(false);
//   const [showSnow, setShowSnow] = useState(false);
//   const [currentCards, setCurrentCards] = useState(cards.slice(0, 3));
//   const [stopSpinner, setStopSpinner] = useState(false);
//   const [fal, setFal] = useState(false);

//   const selectWinningCard = () => {
//     const randomIndex = Math.floor(Math.random() * cards.length);
//     return cards[randomIndex];
//   };

//   const startSpin = () => {
//     if (isSpinning) return;
//     setShowFixedCards(false);
//     setShowSnow(false);
//     setIsSpinning(true);
//     const spinInterval = setInterval(() => {
//       setCurrentCards([
//         cards[Math.floor(Math.random() * cards.length)],
//         cards[Math.floor(Math.random() * cards.length)],
//         cards[Math.floor(Math.random() * cards.length)]
//       ]);
//     }, 150);
//     setTimeout(() => {
//       clearInterval(spinInterval);
//       const winningCard = selectWinningCard();
//       setCurrentCards([winningCard, winningCard, winningCard]); // نمایش یکی از کارت‌ها به صورت تکراری برای همخوانی بصری
//       setIsSpinning(false);
//       setStopSpinner(true);
//       setTimeout(() => {
//         setShowFixedCards(true);
//         setTimeout(() => {
//           setShowSnow(true); // فعال کردن انیمیشن برف بعد از ثابت شدن کارت‌ها
//         }, 500);
//       }, 300);
//     }, 3000); // 3 ثانیه
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowFixedCards(true);
//       const autoSpinTimer = setTimeout(() => {
//         startSpin();
//       }, 100);
//       return () => clearTimeout(autoSpinTimer);
//     }, 100);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     const style = document.createElement('style');
//     style.innerHTML = `
//       .wheel-container {
//         perspective: 800px; /* کاهش perspective برای حس سه‌بعدی بیشتر */
//         height: 201px; /* ارتفاع ثابت برای میله */
//       }
//       @keyframes spin-vertical {
//         0% {
//           transform: rotateX(0deg);
//         }
//         100% {
//           transform: rotateX(360deg);
//         }
//       }
//       .animate-spin-vertical {
//         animation: spin-vertical 0.3s linear infinite; /* افزایش سرعت به 0.3s */
//         backface-visibility: hidden; /* پنهان کردن پشت کارت برای حس سه‌بعدی */
//       }
//       .spinning-cards-container {
//         perspective: 800px;
//       }
//       .spinning-cards-container.animate-spin-vertical {
//         animation: spin-vertical 0.3s linear infinite; /* افزایش سرعت */
//         backface-visibility: hidden;
//       }
//       /* انیمیشن برف کریسمسی */
//       .snow-container {
//         position: fixed;
//         top: 0;
//         left: 0;
//         width: 100vw;
//         height: 100vh;
//         pointer-events: none;
//         z-index: 9999;
//         opacity: 0;
//         transition: opacity 0.5s ease-in;
//       }
//       .snow-container.show {
//         opacity: 1;
//       }
//       .snowflake {
//         position: absolute;
//         color: #fff;
//         font-size: 1em;
//         animation: snowfall linear infinite;
//       }
//       @keyframes snowfall {
//         0% {
//           transform: translateY(-100vh) rotate(0deg);
//           opacity: 1;
//         }
//         100% {
//           transform: translateY(100vh) rotate(360deg);
//           opacity: 0;
//         }
//       }
//       /* تولید برفک‌ها با اندازه‌های مختلف */
//       .snowflake:nth-child(1) { left: 10%; animation-duration: 10s; animation-delay: 0s; }
//       .snowflake:nth-child(2) { left: 20%; animation-duration: 15s; animation-delay: 1s; font-size: 0.8em; }
//       .snowflake:nth-child(3) { left: 30%; animation-duration: 12s; animation-delay: 2s; }
//       .snowflake:nth-child(4) { left: 40%; animation-duration: 18s; animation-delay: 3s; font-size: 1.2em; }
//       .snowflake:nth-child(5) { left: 50%; animation-duration: 14s; animation-delay: 4s; }
//       .snowflake:nth-child(6) { left: 60%; animation-duration: 16s; animation-delay: 5s; font-size: 0.9em; }
//       .snowflake:nth-child(7) { left: 70%; animation-duration: 11s; animation-delay: 6s; }
//       .snowflake:nth-child(8) { left: 80%; animation-duration: 13s; animation-delay: 7s; font-size: 1.1em; }
//       .snowflake:nth-child(9) { left: 90%; animation-duration: 17s; animation-delay: 8s; }
//       .snowflake:nth-child(10) { left: 15%; animation-duration: 9s; animation-delay: 9s; font-size: 0.7em; }
//       .snowflake:nth-child(11) { left: 25%; animation-duration: 20s; animation-delay: 10s; }
//       .snowflake:nth-child(12) { left: 35%; animation-duration: 12s; animation-delay: 11s; font-size: 1em; }
//       /* تکرار برای برف بیشتر */
//       .snowflake:nth-child(13) { left: 45%; animation-duration: 15s; animation-delay: 0s; font-size: 0.8em; }
//       .snowflake:nth-child(14) { left: 55%; animation-duration: 14s; animation-delay: 1s; }
//       .snowflake:nth-child(15) { left: 65%; animation-duration: 16s; animation-delay: 2s; font-size: 1.2em; }
//       .snowflake:nth-child(16) { left: 75%; animation-duration: 11s; animation-delay: 3s; }
//       .snowflake:nth-child(17) { left: 85%; animation-duration: 13s; animation-delay: 4s; font-size: 0.9em; }
//       .snowflake:nth-child(18) { left: 5%; animation-duration: 18s; animation-delay: 5s; }
//       .snowflake:nth-child(19) { left: 95%; animation-duration: 10s; animation-delay: 6s; font-size: 1.1em; }
//       .snowflake:nth-child(20) { left: 50%; animation-duration: 17s; animation-delay: 7s; }
//       /* استایل برای کارت‌های کپسولی سه‌بعدی */
//       .card-wrapper {
//         width: 50px;
//         height: 50px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         overflow: hidden;
//         margin: 0 auto;
//         transform-style: preserve-3d; /* حفظ سه‌بعدی در transform */
//         transform: translate(-5px, -5px); /* شیفت کمی به چپ و بالا */
//       }
//       .card-image {
//         width: 40px;
//         height: 40px;
//         object-fit: cover;
//         border-radius: 20px;
//         box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* سایه برای عکس */
//       }
//     `;
//     document.head.appendChild(style);
//     return () => {
//       if (document.head.contains(style)) {
//         document.head.removeChild(style);
//       }
//     };
//   }, []);

//   const CardWrapper = ({ card, index, isSpinning = false }) => {
//     const spinningStyle = isSpinning ? {
//       backgroundImage: `url('./assets/images/whitebg.png')`, // استفاده از مسیر مستقیم بدون ایمپورت
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       borderRadius: '25px',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.5), inset 0 -2px 4px rgba(0, 0, 0, 0.1)',
//       opacity: 1
//     } : {};
//     return (
//       <div className="card-wrapper" style={spinningStyle}>
//         <img
//           src={card}
//           alt={`card${index + 1}`}
//           className={`card-image ${isSpinning ? 'animate-pulse' : ''}`}
//         />
//       </div>
//     );
//   };

//   return (
//     <>
//       {!fal && (
//         <div className="relative w-full max-w-md mx-auto cursor-pointer wheel-container" onClick={() => {
//           setFal(true);
//         }}>
//           <div className="flex flex-col gap-1 items-center text-primary-dark text-white">
//             {!stopSpinner ? (
//               <p className="text-md font-bold">
//                 فال تو در حال آماده‌شدن است، گوش جانت را تیز کن…
//               </p>
//             ) : (
//               <p className="text-xl font-bold">
//                 فال تو اماده است ...!!
//               </p>
//             )}
//           </div>
//           <img
//             src="./assets/images/round.png"
//             alt="fal"
//             className="w-full transition-transform duration-1000 ease-out" // حذف انیمیشن از میله، ثابت نگه داشتن
//             style={{ height: '201px' }} // ارتفاع ثابت
//           />
//           <div className={`absolute top-1/2 left-1/2 md:-translate-x-32 -translate-x-10/18 translate-y-3 flex md:gap-16 gap-10 transition-all duration-500 ${showFixedCards ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
//             }`}>
//             {currentCards.map((card, index) => (
//               <CardWrapper key={`fixed-${index}`} card={card} index={index} isSpinning={false} />
//             ))}
//           </div>
//           {/* spinning cards با انیمیشن عمودی (بالا پایین) */}
//           <div className={`absolute top-1/2 left-1/2 md:-translate-x-32 -translate-x-10/18 translate-y-3 flex md:gap-16 gap-10 transition-all duration-500 spinning-cards-container ${isSpinning ? 'animate-spin-vertical opacity-100 scale-100' : 'opacity-0 scale-95'
//             }`}>
//             {currentCards.map((card, index) => (
//               <CardWrapper key={`spinning-${index}`} card={card} index={index} isSpinning={true} />
//             ))}
//           </div>
//         </div>
//       )}
//       {showSnow && (
//         <div className={`snow-container ${showSnow ? 'show' : ''}`}>
//           {[...Array(20)].map((_, i) => (
//             <div key={i} className="snowflake">❄</div> // استفاده از ایموجی برف برای سادگی
//           ))}
//         </div>
//       )}
//       {fal && (
//         <div className="">
//           <div className="flex gap-3 items-center opacity-50">
//             <div className="h-[0.075rem] bg-gradient-to-l from-transparent to-primary-dark flex-1" />
//             <img alt="shape" className="w-full" src="./assets/images/shape.png" />
//             <div className="h-[0.075rem] bg-gradient-to-r from-transparent to-primary-dark flex-1" />
//           </div>
//           <div className="relative h-100 rounded-lg overflow-hidden">
//             <img
//               src="./assets/images/topcorner.png"
//               alt="topcorner"
//               className="absolute top-2 left-2 w-26 h-46 object-contain rounded"
//             />
//             <img
//               src="./assets/images/bcorner.png"
//               alt="corner"
//               className="absolute bottom-2 -right-14 w-56 h-46 object-contain rounded"
//             />
//             <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-lg font-semibold text-gray-800">
//               فال1 !
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default WheelSpinner;


// import { useState, useEffect } from 'react';

// const WheelSpinner = () => {
//   const cards = [
//     "./assets/images/cards/card1.png",
//     "./assets/images/cards/card2.png",
//     "./assets/images/cards/card3.png",
//     "./assets/images/cards/card4.png",
//     "./assets/images/cards/card5.png",
//     "./assets/images/cards/card6.png",
//     "./assets/images/cards/card7.png",
//     "./assets/images/cards/card8.png",
//     "./assets/images/cards/card9.png",
//     "./assets/images/cards/card10.png",
//     "./assets/images/cards/card11.png",
//     "./assets/images/cards/card12.png",
//     "./assets/images/cards/card13.png",
//     "./assets/images/cards/card14.png",
//     "./assets/images/cards/card15.png",
//   ];
//   const [isSpinning, setIsSpinning] = useState(false);
//   const [showFixedCards, setShowFixedCards] = useState(false);
//   const [showSnow, setShowSnow] = useState(false);
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [currentCards, setCurrentCards] = useState(cards.slice(0, 3));
//   const [stopSpinner, setStopSpinner] = useState(false);
//   const [fal, setFal] = useState(false);

//   const confettiImages = [
//     "./assets/images/confetti1.png", // مسیر عکس‌های ریزت رو اینجا بگذار (مثلاً confetti1.png, confetti2.png, confetti3.png)
//     "./assets/images/confetti2.png",
//     "./assets/images/confetti3.png",
//   ];

//   const selectWinningCard = () => {
//     const randomIndex = Math.floor(Math.random() * cards.length);
//     return cards[randomIndex];
//   };

//   const startSpin = () => {
//     if (isSpinning) return;
//     setShowFixedCards(false);
//     setShowSnow(false);
//     setShowConfetti(false);
//     setIsSpinning(true);
//     const spinInterval = setInterval(() => {
//       setCurrentCards([
//         cards[Math.floor(Math.random() * cards.length)],
//         cards[Math.floor(Math.random() * cards.length)],
//         cards[Math.floor(Math.random() * cards.length)]
//       ]);
//     }, 150);
//     setTimeout(() => {
//       clearInterval(spinInterval);
//       const winningCard = selectWinningCard();
//       setCurrentCards([winningCard, winningCard, winningCard]); // نمایش یکی از کارت‌ها به صورت تکراری برای همخوانی بصری
//       setIsSpinning(false);
//       setStopSpinner(true);
//       setTimeout(() => {
//         setShowFixedCards(true);
//         setTimeout(() => {
//           setShowSnow(true); // فعال کردن برف بعد از ثابت شدن
//           setTimeout(() => {
//             setShowConfetti(true); // فعال کردن confetti بعد از برف
//           }, 1000);
//         }, 500);
//       }, 300);
//     }, 3000); // 3 ثانیه
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowFixedCards(true);
//       const autoSpinTimer = setTimeout(() => {
//         startSpin();
//       }, 100);
//       return () => clearTimeout(autoSpinTimer);
//     }, 100);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     const style = document.createElement('style');
//     style.innerHTML = `
//       .wheel-container {
//         perspective: 800px; /* کاهش perspective برای حس سه‌بعدی بیشتر */
//         height: 201px; /* ارتفاع ثابت برای میله */
//       }
//       @keyframes spin-vertical {
//         0% {
//           transform: rotateX(0deg);
//         }
//         100% {
//           transform: rotateX(360deg);
//         }
//       }
//       .animate-spin-vertical {
//         animation: spin-vertical 0.3s linear infinite; /* افزایش سرعت به 0.3s */
//         backface-visibility: hidden; /* پنهان کردن پشت کارت برای حس سه‌بعدی */
//       }
//       .spinning-cards-container {
//         perspective: 800px;
//       }
//       .spinning-cards-container.animate-spin-vertical {
//         animation: spin-vertical 0.3s linear infinite; /* افزایش سرعت */
//         backface-visibility: hidden;
//       }
//       /* انیمیشن برف کریسمسی - فقط بعد از ثابت شدن، تعداد بیشتر (50) */
//       .snow-container {
//         position: fixed;
//         top: 0;
//         left: 0;
//         width: 100vw;
//         height: 100vh;
//         pointer-events: none;
//         z-index: 9999;
//         opacity: 0;
//         transition: opacity 0.5s ease-in;
//       }
//       .snow-container.show {
//         opacity: 1;
//       }
//       .snowflake {
//         position: absolute;
//         color: #fff;
//         font-size: 1em;
//         animation: snowfall linear infinite;
//       }
//       @keyframes snowfall {
//         0% {
//           transform: translateY(-100vh) rotate(0deg);
//           opacity: 1;
//         }
//         100% {
//           transform: translateY(100vh) rotate(360deg);
//           opacity: 0;
//         }
//       }
//       /* تولید برفک‌ها با اندازه‌های مختلف - افزایش به 50 */
//       .snowflake:nth-child(1) { left: 10%; animation-duration: 10s; animation-delay: 0s; }
//       .snowflake:nth-child(2) { left: 20%; animation-duration: 15s; animation-delay: 1s; font-size: 0.8em; }
//       .snowflake:nth-child(3) { left: 30%; animation-duration: 12s; animation-delay: 2s; }
//       .snowflake:nth-child(4) { left: 40%; animation-duration: 18s; animation-delay: 3s; font-size: 1.2em; }
//       .snowflake:nth-child(5) { left: 50%; animation-duration: 14s; animation-delay: 4s; }
//       .snowflake:nth-child(6) { left: 60%; animation-duration: 16s; animation-delay: 5s; font-size: 0.9em; }
//       .snowflake:nth-child(7) { left: 70%; animation-duration: 11s; animation-delay: 6s; }
//       .snowflake:nth-child(8) { left: 80%; animation-duration: 13s; animation-delay: 7s; font-size: 1.1em; }
//       .snowflake:nth-child(9) { left: 90%; animation-duration: 17s; animation-delay: 8s; }
//       .snowflake:nth-child(10) { left: 15%; animation-duration: 9s; animation-delay: 9s; font-size: 0.7em; }
//       .snowflake:nth-child(11) { left: 25%; animation-duration: 20s; animation-delay: 10s; }
//       .snowflake:nth-child(12) { left: 35%; animation-duration: 12s; animation-delay: 11s; font-size: 1em; }
//       .snowflake:nth-child(13) { left: 45%; animation-duration: 15s; animation-delay: 0s; font-size: 0.8em; }
//       .snowflake:nth-child(14) { left: 55%; animation-duration: 14s; animation-delay: 1s; }
//       .snowflake:nth-child(15) { left: 65%; animation-duration: 16s; animation-delay: 2s; font-size: 1.2em; }
//       .snowflake:nth-child(16) { left: 75%; animation-duration: 11s; animation-delay: 3s; }
//       .snowflake:nth-child(17) { left: 85%; animation-duration: 13s; animation-delay: 4s; font-size: 0.9em; }
//       .snowflake:nth-child(18) { left: 5%; animation-duration: 18s; animation-delay: 5s; }
//       .snowflake:nth-child(19) { left: 95%; animation-duration: 10s; animation-delay: 6s; font-size: 1.1em; }
//       .snowflake:nth-child(20) { left: 50%; animation-duration: 17s; animation-delay: 7s; }
//       .snowflake:nth-child(21) { left: 12%; animation-duration: 13s; animation-delay: 0s; font-size: 0.6em; }
//       .snowflake:nth-child(22) { left: 22%; animation-duration: 16s; animation-delay: 2s; }
//       .snowflake:nth-child(23) { left: 32%; animation-duration: 9s; animation-delay: 4s; font-size: 1em; }
//       .snowflake:nth-child(24) { left: 42%; animation-duration: 19s; animation-delay: 6s; }
//       .snowflake:nth-child(25) { left: 52%; animation-duration: 11s; animation-delay: 8s; font-size: 0.9em; }
//       .snowflake:nth-child(26) { left: 62%; animation-duration: 14s; animation-delay: 10s; }
//       .snowflake:nth-child(27) { left: 72%; animation-duration: 12s; animation-delay: 1s; font-size: 1.2em; }
//       .snowflake:nth-child(28) { left: 82%; animation-duration: 17s; animation-delay: 3s; }
//       .snowflake:nth-child(29) { left: 92%; animation-duration: 8s; animation-delay: 5s; font-size: 0.7em; }
//       .snowflake:nth-child(30) { left: 18%; animation-duration: 15s; animation-delay: 7s; }
//       .snowflake:nth-child(31) { left: 28%; animation-duration: 10s; animation-delay: 9s; font-size: 1.1em; }
//       .snowflake:nth-child(32) { left: 38%; animation-duration: 18s; animation-delay: 11s; }
//       .snowflake:nth-child(33) { left: 48%; animation-duration: 13s; animation-delay: 0s; font-size: 0.8em; }
//       .snowflake:nth-child(34) { left: 58%; animation-duration: 16s; animation-delay: 2s; }
//       .snowflake:nth-child(35) { left: 68%; animation-duration: 9s; animation-delay: 4s; font-size: 1em; }
//       .snowflake:nth-child(36) { left: 78%; animation-duration: 20s; animation-delay: 6s; }
//       .snowflake:nth-child(37) { left: 88%; animation-duration: 12s; animation-delay: 8s; font-size: 0.9em; }
//       .snowflake:nth-child(38) { left: 8%; animation-duration: 14s; animation-delay: 10s; }
//       .snowflake:nth-child(39) { left: 98%; animation-duration: 11s; animation-delay: 1s; font-size: 1.2em; }
//       .snowflake:nth-child(40) { left: 45%; animation-duration: 17s; animation-delay: 3s; }
//       .snowflake:nth-child(41) { left: 15%; animation-duration: 13s; animation-delay: 5s; font-size: 0.6em; }
//       .snowflake:nth-child(42) { left: 25%; animation-duration: 16s; animation-delay: 7s; }
//       .snowflake:nth-child(43) { left: 35%; animation-duration: 9s; animation-delay: 9s; font-size: 1em; }
//       .snowflake:nth-child(44) { left: 55%; animation-duration: 19s; animation-delay: 11s; }
//       .snowflake:nth-child(45) { left: 65%; animation-duration: 11s; animation-delay: 0s; font-size: 0.9em; }
//       .snowflake:nth-child(46) { left: 75%; animation-duration: 14s; animation-delay: 2s; }
//       .snowflake:nth-child(47) { left: 85%; animation-duration: 12s; animation-delay: 4s; font-size: 1.2em; }
//       .snowflake:nth-child(48) { left: 95%; animation-duration: 17s; animation-delay: 6s; }
//       .snowflake:nth-child(49) { left: 20%; animation-duration: 8s; animation-delay: 8s; font-size: 0.7em; }
//       .snowflake:nth-child(50) { left: 40%; animation-duration: 15s; animation-delay: 10s; }
//       /* انیمیشن confetti با عکس‌های ریز - انفجار از وسط صفحه، تعداد 100 برای پر کردن صفحه */
//       .confetti-container {
//         position: fixed;
//         top: 0;
//         left: 0;
//         width: 100vw;
//         height: 100vh;
//         pointer-events: none;
//         z-index: 10000;
//         opacity: 0;
//         transition: opacity 0.5s ease-in;
//       }
//       .confetti-container.show {
//         opacity: 1;
//       }
//       .confetti-img {
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         width: 20px;
//         height: 20px;
//         animation: confetti-burst 3s ease-out forwards;
//         pointer-events: none;
//         object-fit: cover;
//       }
//       @keyframes confetti-burst {
//         0% {
//           transform: translate(-50%, -50%) scale(0) rotate(0deg);
//           opacity: 1;
//         }
//         100% {
//           transform: translate(var(--x), var(--y)) scale(1) rotate(720deg);
//           opacity: 0;
//         }
//       }
//       /* تولید confetti با جهات مختلف - تکرار برای 100 تا */
//     `;
//     // اضافه کردن استایل‌های confetti برای 100 تا (به صورت دینامیک در JSX)
//     for (let i = 1; i <= 100; i++) {
//       const angle = (i * 360 / 100); // زاویه برای پخش
//       const distance = 200 + Math.random() * 200; // فاصله تصادفی
//       const x = Math.cos(angle * Math.PI / 180) * distance;
//       const y = Math.sin(angle * Math.PI / 180) * distance;
//       style.innerHTML += `.confetti-img:nth-child(${i}) { --x: ${x}px; --y: ${y}px; animation-delay: ${Math.random() * 0.5}s; }`;
//     }
//     document.head.appendChild(style);
//     return () => {
//       if (document.head.contains(style)) {
//         document.head.removeChild(style);
//       }
//     };
//   }, []);

//   const CardWrapper = ({ card, index, isSpinning = false }) => {
//     const spinningStyle = isSpinning ? {
//       backgroundImage: `url('./assets/images/whitebg.png')`, // استفاده از مسیر مستقیم بدون ایمپورت
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       borderRadius: '25px',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.5), inset 0 -2px 4px rgba(0, 0, 0, 0.1)',
//       opacity: 1
//     } : {};
//     return (
//       <div className="card-wrapper" style={spinningStyle}>
//         <img
//           src={card}
//           alt={`card${index + 1}`}
//           className={`card-image ${isSpinning ? 'animate-pulse' : ''}`}
//         />
//       </div>
//     );
//   };

//   return (
//     <>
//       {!fal && (
//         <div className="relative w-full max-w-md mx-auto cursor-pointer wheel-container" onClick={() => {
//           setFal(true);
//         }}>
//           <div className="flex flex-col gap-1 items-center text-primary-dark text-white">
//             {!stopSpinner ? (
//               <p className="text-md font-bold">
//                 فال تو در حال آماده‌شدن است، گوش جانت را تیز کن…
//               </p>
//             ) : (
//               <p className="text-xl font-bold">
//                 فال تو اماده است ...!!
//               </p>
//             )}
//           </div>
//           <img
//             src="./assets/images/round.png"
//             alt="fal"
//             className="w-full transition-transform duration-1000 ease-out" // حذف انیمیشن از میله، ثابت نگه داشتن
//             style={{ height: '201px' }} // ارتفاع ثابت
//           />
//           <div className={`absolute top-1/2 left-1/2 md:-translate-x-32 -translate-x-10/18 translate-y-3 flex md:gap-16 gap-10 transition-all duration-500 ${showFixedCards ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
//             }`}>
//             {currentCards.map((card, index) => (
//               <CardWrapper key={`fixed-${index}`} card={card} index={index} isSpinning={false} />
//             ))}
//           </div>
//           {/* spinning cards با انیمیشن عمودی (بالا پایین) */}
//           <div className={`absolute top-1/2 left-1/2 md:-translate-x-32 -translate-x-10/18 translate-y-3 flex md:gap-16 gap-10 transition-all duration-500 spinning-cards-container ${isSpinning ? 'animate-spin-vertical opacity-100 scale-100' : 'opacity-0 scale-95'
//             }`}>
//             {currentCards.map((card, index) => (
//               <CardWrapper key={`spinning-${index}`} card={card} index={index} isSpinning={true} />
//             ))}
//           </div>
//         </div>
//       )}
//       {showSnow && (
//         <div className={`snow-container ${showSnow ? 'show' : ''}`}>
//           {[...Array(50)].map((_, i) => (
//             <div key={i} className="snowflake">❄</div> // افزایش به 50 برای برف بیشتر
//           ))}
//         </div>
//       )}
//       {showConfetti && (
//         <div className={`confetti-container ${showConfetti ? 'show' : ''}`}>
//           {[...Array(100)].map((_, i) => (
//             <img 
//               key={i} 
//               src={confettiImages[i % confettiImages.length]} 
//               alt="confetti" 
//               className="confetti-img" 
//               style={{ width: '20px', height: '20px' }} 
//             /> // استفاده از عکس‌های ریزت برای confetti، تعداد 100 برای پر کردن صفحه
//           ))}
//         </div>
//       )}
//       {fal && (
//         <div className="">
//           <div className="flex gap-3 items-center opacity-50">
//             <div className="h-[0.075rem] bg-gradient-to-l from-transparent to-primary-dark flex-1" />
//             <img alt="shape" className="w-full" src="./assets/images/shape.png" />
//             <div className="h-[0.075rem] bg-gradient-to-r from-transparent to-primary-dark flex-1" />
//           </div>
//           <div className="relative h-100 rounded-lg overflow-hidden">
//             <img
//               src="./assets/images/topcorner.png"
//               alt="topcorner"
//               className="absolute top-2 left-2 w-26 h-46 object-contain rounded"
//             />
//             <img
//               src="./assets/images/bcorner.png"
//               alt="corner"
//               className="absolute bottom-2 -right-14 w-56 h-46 object-contain rounded"
//             />
//             <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-lg font-semibold text-gray-800">
//               فال1 !
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default WheelSpinner;


// import { useState, useEffect, useMemo } from 'react';

// const WheelSpinner = () => {
//   const cards = [
//     "./assets/images/cards/card1.png",
//     "./assets/images/cards/card2.png",
//     "./assets/images/cards/card3.png",
//     "./assets/images/cards/card4.png",
//     "./assets/images/cards/card5.png",
//     "./assets/images/cards/card6.png",
//     "./assets/images/cards/card7.png",
//     "./assets/images/cards/card8.png",
//     "./assets/images/cards/card9.png",
//     "./assets/images/cards/card10.png",
//     "./assets/images/cards/card11.png",
//     "./assets/images/cards/card12.png",
//     "./assets/images/cards/card13.png",
//     "./assets/images/cards/card14.png",
//     "./assets/images/cards/card15.png",
//   ];
//   const [isSpinning, setIsSpinning] = useState(false);
//   const [showFixedCards, setShowFixedCards] = useState(false);
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [currentCards, setCurrentCards] = useState(cards.slice(0, 3));
//   const [stopSpinner, setStopSpinner] = useState(false);
//   const [fal, setFal] = useState(false);
//   const [showSnow, setShowSnow] = useState(false);

//   const selectWinningCard = () => {
//     const randomIndex = Math.floor(Math.random() * cards.length);
//     return cards[randomIndex];
//   };

//   const startSpin = () => {
//     if (isSpinning) return;
//     setShowFixedCards(false);
//     setShowConfetti(false);
//     setIsSpinning(true);
//     const spinInterval = setInterval(() => {
//       setCurrentCards([
//         cards[Math.floor(Math.random() * cards.length)],
//         cards[Math.floor(Math.random() * cards.length)],
//         cards[Math.floor(Math.random() * cards.length)]
//       ]);
//     }, 150);
//     setTimeout(() => {
//       clearInterval(spinInterval);
//       const winningCard = selectWinningCard();
//       setCurrentCards([winningCard, winningCard, winningCard]);
//       setIsSpinning(false);
//       setStopSpinner(true);
//       setTimeout(() => {
//         setShowFixedCards(true);
//         setTimeout(() => {
//           setShowConfetti(true);
//           setShowSnow(true);
//         }, 500);
//       }, 300);
//     }, 3000);
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowFixedCards(true);
//       const autoSpinTimer = setTimeout(() => {
//         startSpin();
//       }, 100);
//       return () => clearTimeout(autoSpinTimer);
//     }, 100);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     const style = document.createElement('style');
//     style.innerHTML = `
//       .wheel-container {
//         perspective: 800px;
//         height: 201px;
//       }

//       .snow-container {
//   position: fixed;
//   inset: 0;
//   pointer-events: none;
//   z-index: 40;
//   overflow: hidden;
// }

// .snowflake {
//   position: absolute;
//   top: -10px;
//   color: white;
//   opacity: 0.8;
//   animation: snow-fall linear infinite;
// }

// @keyframes snow-fall {
//   0% {
//     transform: translateY(0);
//   }
//   100% {
//     transform: translateY(110vh);
//   }
// }

//       @keyframes spin-vertical {
//         0% {
//           transform: rotateX(0deg);
//         }
//         100% {
//           transform: rotateX(360deg);
//         }
//       }
//       .animate-spin-vertical {
//         animation: spin-vertical 0.3s linear infinite;
//         backface-visibility: hidden; 
//       }
//       .spinning-cards-container {
//         perspective: 800px;
//       }
//       .spinning-cards-container.animate-spin-vertical {
//         animation: spin-vertical 0.3s linear infinite; 
//         backface-visibility: hidden;
//       }
//     .confetti-container {
//   position: absolute;
//   top: 20%;
//   left: 50%;
//   width: 50%;
//   height: 100vh;
//   transform: translate(-50%, -50%);
//   pointer-events: none;
//   z-index: 50;
//   opacity: 0;
//   transition: opacity 0.4s ease-in;
// }

// .confetti-container.show {
//   opacity: 1;
// }

// .confetti-gif {
//   width: 100%;
//   height: 100%;
//   object-fit: contain;
// }
//       .card-wrapper {
//         width: 50px;
//         height: 50px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         overflow: hidden;
//         margin: 0 auto;
//         transform-style: preserve-3d;
//         transform: translate(-5px, -5px);
//       }
//       .card-image {
//         width: 50px;
//         height: 50px;
//         object-fit: cover;
//       }
//     `;
//     document.head.appendChild(style);
//     return () => {
//       if (document.head.contains(style)) {
//         document.head.removeChild(style);
//       }
//     };
//   }, []);

//   const CardWrapper = ({ card, index, isSpinning = false }) => {
//     const spinningStyle = isSpinning ? {
//       backgroundImage: `url('./assets/images/whitebg.png')`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       borderRadius: '25px',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.5), inset 0 -2px 4px rgba(0, 0, 0, 0.1)',
//       opacity: 1
//     } : {};
//     return (
//       <div className="card-wrapper" style={spinningStyle}>
//         <img
//           src={card}
//           alt={`card${index + 1}`}
//           className={`card-image ${isSpinning ? 'animate-pulse' : ''}`}
//         />
//       </div>
//     );
//   };

//   const SnowContainer = () => {
//     const snowflakes = useMemo(() =>
//       Array.from({ length: 40 }).map((_, i) => ({
//         id: i,
//         left: `${Math.random() * 100}%`,
//         fontSize: `${Math.random() * 6 + 8}px`,
//         animationDuration: `${Math.random() * 5 + 5}s`,
//       })),
//       []
//     );
//   }


//   return (
//     <>
//       {!fal && (
//         <div className="relative w-full max-w-md mx-auto cursor-pointer wheel-container" onClick={() => {
//           setFal(true);
//         }}>
//           <div className="flex flex-col gap-1 items-center text-primary-dark text-white">
//             {!stopSpinner ? (
//               <p className="text-md font-bold">
//                 فال تو در حال آماده‌شدن است، گوش جانت را تیز کن…
//               </p>
//             ) : (
//               <p className="text-xl font-bold">
//                 فال تو آماده است ...!!
//               </p>
//             )}
//           </div>
//           <img
//             src="./assets/images/round.png"
//             alt="fal"
//             className="w-full transition-transform duration-1000 ease-out"
//             style={{ height: '201px' }}
//           />
//           <div className={`absolute top-1/2 left-1/2  -translate-x-6/10 translate-y-6 flex md:gap-10 gap-10 transition-all duration-500 ${showFixedCards ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
//             }`}>
//             {currentCards.map((card, index) => (
//               <CardWrapper key={`fixed-${index}`} card={card} index={index} isSpinning={false} />
//             ))}
//           </div>
//           <div className={`absolute top-1/2 left-1/2   -translate-x-6/10  translate-y-3 flex md:gap-10 gap-10 transition-all duration-500 spinning-cards-container ${isSpinning ? 'animate-spin-vertical opacity-100 scale-100' : 'opacity-0 scale-95'
//             }`}>
//             {currentCards.map((card, index) => (
//               <CardWrapper key={`spinning-${index}`} card={card} index={index} isSpinning={true} />
//             ))}
//           </div>
//         </div>
//       )}
//       {showConfetti && (
//         <div className={`confetti-container w-5 ${showConfetti ? 'show' : ''}`}>
//           <img
//             src="./assets/images/confetti.gif"
//             alt=""
//             width={100}
//             height={50}
//             className="confetti-gif object-cover"
//           />
//         </div>
//       )}
//       {showSnow && (
//         <div className="snow-container">
//           {Array.from({ length: 100 }).map((_, i) => (
//             <span
//               key={i}
//               className="snowflake"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 fontSize: `${Math?.random() * 6 + 8}px`,
//                 animationDuration: `${Math.random() * 5 + 5}s`,
//               }}
//             >
//               ❄
//             </span>
//           ))}

//         </div>
//       )}


//       {fal && (
//         <div className="">
//           <div className="flex gap-3 items-center opacity-50">
//             <div className="h-[0.075rem] bg-gradient-to-l from-transparent to-primary-dark flex-1" />
//             <img alt="shape" className="w-full h-full" src="./assets/images/shape.png" />
//             <div className="h-[0.075rem] bg-gradient-to-r from-transparent to-primary-dark flex-1" />
//           </div>
//           <div className="relative h-100 rounded-lg overflow-hidden">
//             <img
//               src="./assets/images/topcorner.png"
//               alt="topcorner"
//               className="absolute top-2 left-2 w-26 h-46 object-contain rounded"
//             />
//             <img
//               src="./assets/images/bcorner.png"
//               alt="corner"
//               className="absolute bottom-2 -right-14 w-56 h-46 object-contain rounded"
//             />
//             <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-lg font-semibold text-gray-800">
//               فال1 !
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default WheelSpinner;


// import { useState, useEffect, useMemo } from 'react';

// const WheelSpinner = () => {
//   const cards = [
//     "./assets/images/cards/card1.png",
//     "./assets/images/cards/card2.png",
//     "./assets/images/cards/card3.png",
//     "./assets/images/cards/card4.png",
//     "./assets/images/cards/card5.png",
//     "./assets/images/cards/card6.png",
//     "./assets/images/cards/card7.png",
//     "./assets/images/cards/card8.png",
//     "./assets/images/cards/card9.png",
//     "./assets/images/cards/card10.png",
//     "./assets/images/cards/card11.png",
//     "./assets/images/cards/card12.png",
//     "./assets/images/cards/card13.png",
//     "./assets/images/cards/card14.png",
//     "./assets/images/cards/card15.png",
//   ];
//   const [isSpinning, setIsSpinning] = useState(false);
//   const [showFixedCards, setShowFixedCards] = useState(false);
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [currentCards, setCurrentCards] = useState(cards.slice(0, 3));
//   const [stopSpinner, setStopSpinner] = useState(false);
//   const [fal, setFal] = useState(false);
//   const [showSnow, setShowSnow] = useState(false);

//   const selectWinningCard = () => {
//     const randomIndex = Math.floor(Math.random() * cards.length);
//     return cards[randomIndex];
//   };

//   const startSpin = () => {
//     if (isSpinning) return;
//     setShowFixedCards(false);
//     setShowConfetti(false);
//     setIsSpinning(true);
//     const spinInterval = setInterval(() => {
//       setCurrentCards([
//         cards[Math.floor(Math.random() * cards.length)],
//         cards[Math.floor(Math.random() * cards.length)],
//         cards[Math.floor(Math.random() * cards.length)]
//       ]);
//     }, 150);
//     setTimeout(() => {
//       clearInterval(spinInterval);
//       const winningCard = selectWinningCard();
//       setCurrentCards([winningCard, winningCard, winningCard]);
//       setIsSpinning(false);
//       setStopSpinner(true);
//       setTimeout(() => {
//         setShowFixedCards(true);
//         setTimeout(() => {
//           setShowConfetti(true);
//           setShowSnow(true);
//           setTimeout(() => {
//             setFal(true);
//             setShowSnow(false);
//             setShowConfetti(false);
//           }, 3000);
//         }, 500);
//       }, 300);
//     }, 3000);
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowFixedCards(true);
//       const autoSpinTimer = setTimeout(() => {
//         startSpin();
//       }, 100);
//       return () => clearTimeout(autoSpinTimer);
//     }, 100);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     const style = document.createElement('style');
//     style.innerHTML = `
//       .wheel-container {
//         perspective: 800px;
//         height: 201px;
//       }
//       .snow-container {
//   position: fixed;
//   inset: 0;
//   pointer-events: none;
//   z-index: 40;
//   overflow: hidden;
// }
// .snowflake {
//   position: absolute;
//   top: -10px;
//   color: white;
//   opacity: 0.8;
//   animation: snow-fall linear infinite;
// }
// @keyframes snow-fall {
//   0% {
//     transform: translateY(0);
//   }
//   100% {
//     transform: translateY(110vh);
//   }
// }
//       @keyframes spin-vertical {
//         0% {
//           transform: rotateX(0deg);
//         }
//         100% {
//           transform: rotateX(360deg);
//         }
//       }
//       .animate-spin-vertical {
//         animation: spin-vertical 0.3s linear infinite;
//         backface-visibility: hidden;
//       }
//       .spinning-cards-container {
//         perspective: 800px;
//       }
//       .spinning-cards-container.animate-spin-vertical {
//         animation: spin-vertical 0.3s linear infinite;
//         backface-visibility: hidden;
//       }
//     .confetti-container {
//   position: absolute;
//   top: 20%;
//   left: 50%;
//   width: 50%;
//   height: 100vh;
//   transform: translate(-50%, -50%);
//   pointer-events: none;
//   z-index: 50;
//   opacity: 0;
//   transition: opacity 0.4s ease-in;
// }
// .confetti-container.show {
//   opacity: 1;
// }
// .confetti-gif {
//   width: 100%;
//   height: 100%;
//   object-fit: contain;
// }
//       .card-wrapper {
//         width: 50px;
//         height: 50px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         overflow: hidden;
//         margin: 0 auto;
//         transform-style: preserve-3d;
//         transform: translate(-5px, -5px);
//       }
//       .card-image {
//         width: 50px;
//         height: 50px;
//         object-fit: cover;
//       }
//     `;
//     document.head.appendChild(style);
//     return () => {
//       if (document.head.contains(style)) {
//         document.head.removeChild(style);
//       }
//     };
//   }, []);

//   const CardWrapper = ({ card, index, isSpinning = false }) => {
//     const spinningStyle = isSpinning ? {
//       backgroundImage: `url('./assets/images/whitebg.png')`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       borderRadius: '25px',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.5), inset 0 -2px 4px rgba(0, 0, 0, 0.1)',
//       opacity: 1
//     } : {};
//     return (
//       <div className="card-wrapper" style={spinningStyle}>
//         <img
//           src={card}
//           alt={`card${index + 1}`}
//           className={`card-image ${isSpinning ? 'animate-pulse' : ''}`}
//         />
//       </div>
//     );
//   };

//   const SnowContainer = () => {
//     const snowflakes = useMemo(() =>
//       Array.from({ length: 40 }).map((_, i) => ({
//         id: i,
//         left: `${Math.random() * 100}%`,
//         fontSize: `${Math.random() * 6 + 8}px`,
//         animationDuration: `${Math.random() * 5 + 5}s`,
//       })),
//       []
//     );
//   }

//   return (
//     <>
//       {!fal && (
//         <div className="relative w-full max-w-md mx-auto cursor-pointer wheel-container" onClick={() => {
//           setFal(true);
//         }}>
//           <div className="flex flex-col gap-1 items-center text-primary-dark text-white">
//             {!stopSpinner ? (
//               <p className="text-md font-bold">

//               </p>
//             ) : (
//               <p className="text-xl font-bold">

//               </p>
//             )}
//           </div>
//           <img
//             src="./assets/images/round.png"
//             alt="fal"
//             className="w-full transition-transform duration-1000 ease-out"
//             style={{ height: '201px' }}
//           />
//           <div className={`absolute top-1/2 left-1/2 -translate-x-6/10 translate-y-6 flex md:gap-10 gap-10 transition-all duration-500 ${showFixedCards ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
//             }`}>
//             {currentCards.map((card, index) => (
//               <CardWrapper key={`fixed-${index}`} card={card} index={index} isSpinning={false} />
//             ))}
//           </div>
//           <div className={`absolute top-1/2 left-1/2 -translate-x-6/10 translate-y-3 flex md:gap-10 gap-10 transition-all duration-500 spinning-cards-container ${isSpinning ? 'animate-spin-vertical opacity-100 scale-100' : 'opacity-0 scale-95'
//             }`}>
//             {currentCards.map((card, index) => (
//               <CardWrapper key={`spinning-${index}`} card={card} index={index} isSpinning={true} />
//             ))}
//           </div>
//         </div>
//       )}
//       {showConfetti && (
//         <div className={`confetti-container w-5 ${showConfetti ? 'show' : ''}`}>
//           <img
//             src="./assets/images/confetti.gif"
//             alt=""
//             width={100}
//             height={50}
//             className="confetti-gif object-cover"
//           />
//         </div>
//       )}
//       {showSnow && (
//         <div className="snow-container">
//           {Array.from({ length: 100 }).map((_, i) => (
//             <span
//               key={i}
//               className="snowflake"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 fontSize: `${Math?.random() * 6 + 8}px`,
//                 animationDuration: `${Math.random() * 5 + 5}s`,
//               }}
//             >
//               ❄
//             </span>
//           ))}
//         </div>
//       )}
//       {fal && (
//         <div className="">
//           <div className="flex gap-3 items-center opacity-50">
//             <div className="h-[0.075rem] bg-gradient-to-l from-transparent to-primary-dark flex-1" />
//             <img alt="shape" className="w-full h-full" src="./assets/images/shape.png" />
//             <div className="h-[0.075rem] bg-gradient-to-r from-transparent to-primary-dark flex-1" />
//           </div>
//           <div className="relative h-100 rounded-lg overflow-hidden">
//             <img
//               src="./assets/images/topcorner.png"
//               alt="topcorner"
//               className="absolute top-2 left-2 w-26 h-46 object-contain rounded"
//             />
//             <img
//               src="./assets/images/bcorner.png"
//               alt="corner"
//               className="absolute bottom-2 -right-14 w-56 h-46 object-contain rounded"
//             />
//             <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-lg font-semibold text-gray-800">

//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default WheelSpinner;



import { useState, useEffect, useMemo } from 'react';

type WheelSpinnerProps = {
  onReset?: () => void;
};

const WheelSpinner: React.FC<WheelSpinnerProps> = ({ onReset }) => {
  const cards = [
    "./assets/images/cards/card1.png",
    "./assets/images/cards/card2.png",
    "./assets/images/cards/card3.png",
    "./assets/images/cards/card4.png",
    "./assets/images/cards/card5.png",
    "./assets/images/cards/card6.png",
    "./assets/images/cards/card7.png",
    "./assets/images/cards/card8.png",
    "./assets/images/cards/card9.png",
    "./assets/images/cards/card10.png",
    "./assets/images/cards/card11.png",
    "./assets/images/cards/card12.png",
    "./assets/images/cards/card13.png",
    "./assets/images/cards/card14.png",
    "./assets/images/cards/card15.png",
  ];
  const [isSpinning, setIsSpinning] = useState(false);
  const [showFixedCards, setShowFixedCards] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentCards, setCurrentCards] = useState(cards.slice(0, 3));
  const [stopSpinner, setStopSpinner] = useState(false);
  const [fal, setFal] = useState(false);
  const [showSnow, setShowSnow] = useState(false);
  const [randomFaal, setRandomFaal] = useState(1);

  // const selectWinningCard = () => {
  //   const randomIndex = Math.floor(Math.random() * cards.length);
  //   return cards[randomIndex];
  // };
  useEffect(() => {
    if (fal) {
      const randomNumber = Math.floor(Math.random() * 42) + 1;
      setRandomFaal(randomNumber);
    }
  }, [fal]);


  const startSpin = () => {
    if (isSpinning) return;
    setShowFixedCards(false);
    setShowConfetti(false);
    setIsSpinning(true);
    const spinInterval = setInterval(() => {
      setCurrentCards([
        cards[Math.floor(Math.random() * cards.length)],
        cards[Math.floor(Math.random() * cards.length)],
        cards[Math.floor(Math.random() * cards.length)]
      ]);
    }, 150);
    setTimeout(() => {
      clearInterval(spinInterval);
      // const winningCard = selectWinningCard();
      const winningCard = "./assets/images/cards/card15.png";

      setCurrentCards([winningCard, winningCard, winningCard]);
      setIsSpinning(false);
      setStopSpinner(true);
      setTimeout(() => {
        setShowFixedCards(true);
        setTimeout(() => {
          setShowConfetti(true);
          setShowSnow(true);
          setTimeout(() => {
            setFal(true);
            setShowSnow(false);
            setShowConfetti(false);
          }, 6000);
        }, 500);
      }, 300);
    }, 3000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFixedCards(true);
      const autoSpinTimer = setTimeout(() => {
        startSpin();
      }, 100);
      return () => clearTimeout(autoSpinTimer);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .wheel-container {
        perspective: 800px;
        height: 201px;
      }
      .snow-container {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 40;
  overflow: hidden;
}
.snowflake {
  position: absolute;
  top: -10px;
  color: white;
  opacity: 0.8;
  animation: snow-fall linear infinite;
}
@keyframes snow-fall {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(110vh);
  }
}
      @keyframes spin-vertical {
        0% {
          transform: rotateX(0deg);
        }
        100% {
          transform: rotateX(360deg);
        }
      }
      .animate-spin-vertical {
        animation: spin-vertical 0.3s linear infinite;
        backface-visibility: hidden;
      }
      .spinning-cards-container {
        perspective: 800px;
        top: 70px;
    height: 150px;
      }
      .spinning-cards-container.animate-spin-vertical {
        animation: spin-vertical 0.3s linear infinite;
        backface-visibility: hidden;
      }
    .confetti-container {
  position: absolute;
  top: 20%;
  left: 50%;
  width: 50%;
  height: 100vh;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 50;
  opacity: 0;
  transition: opacity 0.4s ease-in;
}
.confetti-container.show {
  opacity: 1;
}
.confetti-gif {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
      .card-wrapper {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        margin: 0 auto;
        transform-style: preserve-3d;
        transform: translate(-5px, -5px);
      }
      .card-image {
        width: 50px;
        height: 50px;
        object-fit: cover;
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  type CardWrapperProps = {
    card: string;
    index: number | string;
    isSpinning?: boolean;
  };

  const CardWrapper: React.FC<CardWrapperProps> = ({ card, isSpinning = false }) => {
    const spinningStyle = isSpinning ? {
      // backgroundImage: `url('./assets/images/whitebg.png')`,
      // backgroundSize: 'contain',
      // backgroundPosition: 'center',
      // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.5), inset 0 -2px 4px rgba(0, 0, 0, 0.1)',
      // opacity: 1,
      // height: '142px',
      // width: '95px',
      // backgroundRepeat : 'no-repeat'
    } : {};
    return (
      // <div className="card-wrapper" style={spinningStyle}>
      //   <img
      //     src={card}
      //     alt=""
      //     className={`card-image ${isSpinning ? 'animate-pulse' : ''}`}
      //   />
      // </div>

      <div className="card-wrapper" style={{ ...spinningStyle, position: 'relative' }}>
        <img
          src={card}
          alt=""
          className={`card-image ${isSpinning ? 'animate-pulse' : ''}`}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '40px',
            height: '40px'
          }}
        />
      </div>
    );
  };


  const SnowContainer = () => {
    const snowflakes = useMemo(() =>
      Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        fontSize: `${Math.random() * 6 + 8}px`,
        animationDuration: `${Math.random() * 5 + 5}s`,
      })),
      []
    );

    return (
      <div className="snow-container">
        {snowflakes.map(flake => (
          <span
            key={flake.id}
            className="snowflake"
            style={{
              left: flake.left,
              fontSize: flake.fontSize,
              animationDuration: flake.animationDuration,
            }}
          >
            ❄
          </span>
        ))}
      </div>
    );
  };


  // const SnowContainer = () => {
  //   const snowflakes = useMemo(() =>
  //     Array.from({ length: 40 }).map((_, i) => ({
  //       id: i,
  //       left: `${Math.random() * 100}%`,
  //       fontSize: `${Math.random() * 6 + 8}px`,
  //       animationDuration: `${Math.random() * 5 + 5}s`,
  //     })),
  //     []
  //   );
  // }


  return (
    <>
      {!fal && (
        <div className="relative w-full max-w-md mx-auto cursor-pointer wheel-container" onClick={() => {
          setFal(true);
        }}>
          <div className="flex flex-col gap-1 items-center text-primary-dark text-white">
            {!stopSpinner ? (
              <p className="text-md font-bold">
                فال تو در حال آماده‌شدن است، گوش جانت را تیز کن…
              </p>
            ) : (
              <p className="text-xl font-bold">
                فال تو آماده است ...!!
              </p>
            )}
          </div>
          <img
            src="./assets/images/round.png"
            alt="fal"
            className="w-full transition-transform duration-1000 ease-out"
            style={{ height: '201px' }}
          />
          <div className={`absolute top-1/2 left-1/2 -translate-x-12/20 translate-y-9 flex md:gap-10 gap-9 transition-all duration-500 ${showFixedCards ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
            {currentCards.map((card, index) => (
              <CardWrapper key={`fixed-${index}`} card={card} index={index} isSpinning={false} />
            ))}
          </div>
          <div className={`absolute top-1/2 left-1/2 -translate-x-12/20 translate-y-9 flex md:gap-10 gap-9 transition-all duration-500 spinning-cards-container ${isSpinning ? 'animate-spin-vertical opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
            {currentCards.map((card, index) => (
              <CardWrapper key={`spinning-${index}`} card={card} index={index} isSpinning={true} />
            ))}
          </div>
        </div>
      )}
      {showConfetti && (
        <div className={`confetti-container w-5 ${showConfetti ? 'show' : ''}`}>
          <img
            src="./assets/images/confetti.gif"
            alt=""
            width={100}
            height={50}
            className="confetti-gif object-cover"
          />
        </div>
      )}
      {showSnow && (
        <div className="snow-container">
          <SnowContainer />
        </div>
      )}
      {fal && (
        <div className="">
          <div className="flex gap-2 items-center opacity-50">
            <div className="h-[0.075rem] bg-gradient-to-l from-transparent to-primary-dark flex-1" />
            <img alt="shape" className="w-full h-full" src="./assets/images/shape.png" />
            <div className="h-[0.075rem] bg-gradient-to-r from-transparent to-primary-dark flex-1" />
          </div>
          <div className="relative h-130 rounded-lg overflow-hidden">
            {/* Top corner */}
            <img
              src="./assets/images/topcorner.png"
              alt="topcorner"
              className="absolute top-2 -left-3 w-26 h-36 object-contain rounded z-10"
            />
            {/* Bottom corner */}
            <img
              src="./assets/images/bcorner.png"
              alt="corner"
              className="absolute bottom-2 -right-18 w-56 h-36 object-contain rounded z-10"
            />
            {/* Faal image: زوم با scale-110 (110% بزرگ‌تر)، همچنان center و fit بدون overflow */}
            <img
              src={`./assets/images/faals/${randomFaal}.png`}
              alt=""
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-110 object-contain rounded w-4/5 max-w-full max-h-full z-0"
            />
          </div>
          <button
            onClick={() => {
              onReset?.();
            }}
            style={{ fontWeight: 700 }}
            className="!cursor-pointer !bg-[#AA2828] !border-[0.2rem] sm:!border-[0.3rem]
          !border-[#F7F2DC] px-8 sm:px-12 md:px-16 lg:px-32 py-3 rounded-lg font-bold z-99 text-white shadow-[0.25rem_0.75rem_8px_rgba(0,0,0,0.25)] cursor-pointer active:shadow-[0.25rem_0.5rem_8px_rgba(0,0,0,0.25)] active:translate-y-0.5 !w-full"
          >
            تفأل دوباره
          </button>
        </div>
      )}
    </>
  );
};

export default WheelSpinner;