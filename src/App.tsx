
import { useEffect, useRef, useState } from 'react';
import './App.css'
import WheelSpinner from './WheelSpinner';

function App() {
  const [name, setName] = useState("");
  const [step, setStep] = useState(1)
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.preload = 'auto'
    audio.volume = 1;
    audio.play().catch(e => console.log('Initial autoplay (muted) error:', e));
  }, []);

  const handleActivate = async () => {
    setError("");

    try {
      const response = await fetch('https://apinescafe.ecoshaar.com/api/fal/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, mobile }),
      });

      if (!response.ok) {
        throw new Error('API error');
      }

      const data = await response.json();
      console.log('API Response:', data);

      setStep(3);
    } catch (err) {
      console.error('API Call Failed:', err);
      setStep(3);
    }
  };

  const handleResetToStepOne = () => {
    setStep(1);
  };

  return (
    <div dir="rtl" className="h-screen w-screen overflow-hidden flex items-center justify-center bg-black">
      <div className="relative h-full w-full max-w-[calc(100vh*9/16)] mx-auto">
        <audio ref={audioRef} src="./assets/sound.mp3" />

        <div className="relative h-full w-full bg-cover bg-center bg-no-repeat bg-[url('/assets/images/bg.png')]">

          <img
            src="./assets/images/bottom.png"
            alt="bg"
            className="absolute bottom-0 left-0 w-full h-auto pointer-events-none z-0"
          />

          {step === 1 && (
            <div className="relative h-full w-full flex flex-col">
              <div
                className="flex flex-col items-center justify-center px-[4vw]"
                style={{ height: '75%' }}
              >
                <div
                  className="flex flex-col items-center w-full max-w-[90%]"
                  style={{ gap: 'clamp(24px, 4vh, 48px)' }}
                >
                  <img
                    src="./assets/images/logo.png"
                    alt="logo"
                    style={{
                      width: 'clamp(200px, 35vw, 400px)',
                      height: 'auto',
                      maxHeight: '25vh'
                    }}
                  />

                  <button
                    onClick={() => {
                      setName("")
                      setMobile("")
                      setStep(2)
                    }}
                    className="!bg-[#AA2828] !cursor-pointer
                    !border-[#F7F2DC] rounded-lg sm:rounded-xl
                    font-bold text-white 
                    shadow-[0.25rem_0.75rem_8px_rgba(0,0,0,0.25)]
                    active:shadow-[0.25rem_0.5rem_8px_rgba(0,0,0,0.25)] active:translate-y-0.5 
                    w-full max-w-[500px]
                    transition-all"
                    style={{
                      fontWeight: 700,
                      border: 'clamp(2px, 0.3vh, 4px) solid #F7F2DC',
                      padding: '0 clamp(24px, 6vw, 60px)',
                      height: 'clamp(48px, 7vh, 80px)',
                      fontSize: 'clamp(16px, 2.5vh, 28px)'
                    }}
                  >
                    شـــــروع
                  </button>
                </div>
              </div>

              <div style={{ height: '25%' }}></div>

              <div className="absolute bottom-0 left-0 w-full h-auto pointer-events-none z-10">
                <img
                  src="./assets/images/yalda.png"
                  alt="yalda"
                  className="w-full h-auto object-contain object-bottom"
                  style={{ maxHeight: '45vh' }}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="relative h-full w-full flex flex-col">
              <div
                className="flex flex-col items-center justify-center px-[4vw]"
                style={{
                  height: '75%',
                  paddingTop: 'clamp(25px, 4vh, 50px)'
                }}
              >
                <div
                  className="flex flex-col items-center w-full max-w-[90%] sm:max-w-[500px]"
                  style={{ gap: 'clamp(10px, 1.8vh, 20px)' }}
                >
                  <img
                    src="./assets/images/logo2.png"
                    alt="logo"
                    style={{
                      width: 'clamp(120px, 20vw, 220px)',
                      height: 'auto',
                      // maxHeight: '16vh'
                    }}
                  />

                  <div
                    className="flex flex-col w-full"
                    style={{ gap: 'clamp(8px, 1.5vh, 16px)' }}
                  >
                    <div
                      className="flex flex-col items-center text-white"
                      style={{ gap: 'clamp(3px, 0.4vh, 6px)' }}
                    >
                      <p
                        className="text-center"
                        style={{ fontSize: 'clamp(12px, 1.8vh, 20px)' }}
                      >
                        لطفـــا بــرای ادامـــه
                      </p>
                      <p
                        className="font-bold text-center"
                        style={{
                          fontSize: 'clamp(16px, 2.5vh, 26px)',
                          fontWeight: 700
                        }}
                      >
                        اطلاعات خـــود را وارد نمـــایید.
                      </p>
                    </div>

                    <div
                      className="flex items-center opacity-50 w-full"
                      style={{ gap: 'clamp(6px, 1.2vw, 14px)' }}
                    >
                      <div className="h-[0.075rem] bg-gradient-to-l from-transparent to-primary-dark flex-1" />
                      <img
                        alt="shape"
                        src="./assets/images/shape.png"
                      // style={{
                      //   width: 'clamp(20px, 3.5vh, 32px)',
                      //   height: 'clamp(20px, 3.5vh, 32px)'
                      // }}
                      />
                      <div className="h-[0.075rem] bg-gradient-to-r from-transparent to-primary-dark flex-1" />
                    </div>

                    <input
                      className="w-full bg-[#D7C7BB] !text-black 
            border-white rounded-lg outline-primary"
                      placeholder="نام و نام خانوادگی"
                      dir="rtl"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{
                        border: 'clamp(2px, 0.3vh, 4px) solid white',
                        padding: 'clamp(10px, 1.8vh, 18px)',
                        fontSize: 'clamp(12px, 1.8vh, 18px)'
                      }}
                    />

                    <input
                      className="w-full !text-black bg-[#D7C7BB] 
            border-white rounded-lg outline-primary"
                      placeholder="09-- --- ----"
                      dir="ltr"
                      inputMode="tel"
                      maxLength={11}
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      style={{
                        border: 'clamp(2px, 0.3vh, 4px) solid white',
                        padding: 'clamp(10px, 1.8vh, 18px)',
                        fontSize: 'clamp(12px, 1.8vh, 18px)'
                      }}
                    />

                    {error && (
                      <div
                        className="text-red-500 text-center bg-red-100 rounded-lg w-full"
                        style={{
                          fontSize: 'clamp(11px, 1.5vh, 16px)',
                          padding: 'clamp(8px, 1.3vh, 14px)'
                        }}
                      >
                        {error}
                      </div>
                    )}

                    <button
                      onClick={handleActivate}
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
                      تفأل
                    </button>
                  </div>
                </div>
              </div>

              <div style={{ height: '25%' }}></div>

              <div className="absolute bottom-0 left-0 w-full h-auto pointer-events-none z-10">
                <img
                  src="./assets/images/yalda2.png"
                  alt="yalda"
                  className="w-full h-auto object-contain object-bottom"
                  style={{ maxHeight: '45vh' }}
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="relative h-full w-full flex flex-col">
              <div
                className="flex flex-col items-center px-[4vw]"
                style={{
                  minHeight: '75%',
                  // paddingTop: 'clamp(40px, 8vh, 100px)',
                   paddingTop: 'clamp(40px, 8vh, 170px)',
                  paddingBottom: 'clamp(60px, 10vh, 100px)',
                  justifyContent: 'flex-start'
                }}
              >
                <div
                  className="flex flex-col items-center w-full max-w-[95%]"
                  style={{ gap: 'clamp(50px, 1.8vh, 30px)' }}
                >
                  <img
                    src="./assets/images/logo2.png"
                    alt="logo"
                    style={{
                      width: 'clamp(120px, 20vw, 220px)',
                      height: 'auto',
                    }}
                  />

                  <div className="w-full">
                    <WheelSpinner onReset={handleResetToStepOne} />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-auto pointer-events-none z-10">
                <img
                  src="./assets/images/yalda2.png"
                  alt="yalda"
                  className="w-full h-auto object-contain object-bottom"
                  style={{ maxHeight: '45vh' }}
                />
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default App