
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
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        margin: 0 auto;
        transform-style: preserve-3d;
      }
      .card-image {
        object-fit: contain;
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

  const CardWrapper: React.FC<CardWrapperProps> = ({ card }) => {
    return (
      <div
        className="card-wrapper flex items-center justify-center"
        style={{
          position: 'relative',
          width: '20%',
          aspectRatio: '3/4',
        }}
      >
        <img
          src={card}
          alt=""
          className="card-image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
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
        fontSize: `${Math.random() * 1.5 + 2}vh`,
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
        <div
          className="relative w-full mx-auto cursor-pointer wheel-container"
          onClick={() => {
            setFal(true);
          }}
        >
          <div
            className="flex flex-col items-center text-white"
            style={{ marginBottom: 'clamp(8px, 1.3vh, 14px)' }}
          >
            {!stopSpinner ? (
              <p
                className="font-bold text-center"
                style={{
                  fontSize: 'clamp(12px, 2vh, 22px)',
                  lineHeight: '1.4',
                  fontWeight: 700
                }}
              >
                فال تو در حال آماده‌شدن است، گوش جانت را تیز کن…
              </p>
            ) : (
              <p
                className="font-bold text-center"
                style={{
                  fontSize: 'clamp(16px, 2.5vh, 28px)',
                  lineHeight: '1.4',
                  fontWeight: 700
                }}
              >
                فال تو آماده است ...!!
              </p>
            )}
          </div>

          <div className="relative w-full">
            <img
              src="./assets/images/round.png"
              alt="fal"
              className="w-full transition-transform duration-1000 ease-out"
              style={{
                height: 'auto',
                display: 'block'
              }}
            />

            <div
              className={`absolute top-1/2 flex transition-all duration-500 ${showFixedCards ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              style={{
                left: '13%',
                transform: 'translateY(-50%)',
                top: '58%',
                gap: '0',
                width: '62%',
                justifyContent: 'space-between'
              }}
            >
              {currentCards.map((card, index) => (
                <CardWrapper key={`fixed-${index}`} card={card} index={index} isSpinning={false} />
              ))}
            </div>

            <div
              className={`absolute top-1/2 flex transition-all duration-500 spinning-cards-container ${isSpinning ? 'animate-spin-vertical opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              style={{
                left: '13%',
                top: '40%',
                transform: 'translateY(-50%)',
                gap: '0',
                width: '62%',
                justifyContent: 'space-between'
              }}
            >
              {currentCards.map((card, index) => (
                <CardWrapper key={`spinning-${index}`} card={card} index={index} isSpinning={true} />
              ))}
            </div>
          </div>
        </div>
      )}

      {showConfetti && (
        <div className={`confetti-container ${showConfetti ? 'show' : ''}`}>
          <img
            src="./assets/images/confetti.gif"
            alt=""
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
        <div className="w-full">
          <div
            className="flex items-center opacity-50"
            style={{
              gap: 'clamp(6px, 1.2vw, 14px)',
              marginBottom: 'clamp(8px, 1.5vh, 20px)'
            }}
          >
            <div className="h-[0.075rem] bg-gradient-to-l from-transparent to-primary-dark flex-1" />
            <img
              alt="shape"
              src="./assets/images/shape.png"
            />
            <div className="h-[0.075rem] bg-gradient-to-r from-transparent to-primary-dark flex-1" />
          </div>

          <div
            className="relative rounded-lg overflow-visible"
            style={{
              // height: 'clamp(220px, 32vh, 380px)',
               height: 'clamp(240px, 35vh, 520px)',
              marginBottom: 'clamp(10px, 1.8vh, 18px)'
            }}
          >
            <img
              src={`./assets/images/faals/${randomFaal}.png`}
              alt="faal"
              className="absolute top-1/2 left-1/2 object-contain rounded"
              style={{
                transform: 'translate(-50%, -50%)',
                width: '88%',
                height: '92%',
                maxWidth: '100%',
                maxHeight: '100%',
                zIndex: 1
              }}
            />

            <img
              src="./assets/images/topcorner.png"
              alt="topcorner"
              className="absolute object-contain pointer-events-none"
              style={{
                top: '2%',
                left: '2%',
                width: 'clamp(45px, 9%, 75px)',
                height: 'auto',
                zIndex: 2
              }}
            />

            <img
              src="./assets/images/bcorner.png"
              alt="corner"
              className="absolute object-contain pointer-events-none"
              style={{
                bottom: '2%',
                right: '2%',
                width: 'clamp(70px, 16%, 140px)',
                height: 'auto',
                zIndex: 2
              }}
            />
          </div>

          <button
            onClick={() => {
              onReset?.();
            }}
            className="!cursor-pointer !bg-[#AA2828] 
            !border-[#F7F2DC] rounded-lg font-bold text-white 
            shadow-[0.25rem_0.75rem_8px_rgba(0,0,0,0.25)] 
            active:shadow-[0.25rem_0.5rem_8px_rgba(0,0,0,0.25)] active:translate-y-0.5 
            !w-full transition-all"
            style={{
              fontWeight: 700,
              border: 'clamp(2px, 0.3vh, 4px) solid #F7F2DC',
              height: 'clamp(44px, 6.5vh, 72px)',
              fontSize: 'clamp(14px, 2.2vh, 24px)'
            }}
          >
            تفأل دوباره
          </button>
        </div>
      )}
    </>
  );
};

export default WheelSpinner;