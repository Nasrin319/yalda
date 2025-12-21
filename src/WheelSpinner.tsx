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
          <div className={`absolute top-1/2 left-1/2 -translate-x-12/20 translate-y-9 flex md:gap-10 gap-7 sm:gap-4 transition-all duration-500 ${showFixedCards ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
            {currentCards.map((card, index) => (
              <CardWrapper key={`fixed-${index}`} card={card} index={index} isSpinning={false} />
            ))}
          </div>
          <div className={`absolute top-1/2 left-1/2 -translate-x-12/20 translate-y-9 flex md:gap-10 gap-7 sm:gap-4 transition-all duration-500 spinning-cards-container ${isSpinning ? 'animate-spin-vertical opacity-100 scale-100' : 'opacity-0 scale-95'
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
          <div className="relative h-80 sm:h-130 md:h-130 lg:h-130 rounded-lg overflow-hidden">
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
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:scale-80 md:scale-90 lg:scale-110 object-contain rounded w-4/5 max-w-full max-h-full z-0"
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