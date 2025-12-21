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

    // if (step === 1) {
    //   audio.play().catch(e => console.log('Autoplay blocked:', e)); // autoplay در step 1
    //   audio.loop = true;
    //   audio.volume = 0.5;
    // } else if (step === 3) {
    //   audio.play();
    // } else {
    //   audio.pause();
    // }

    // return () => {
    //   audio.pause();
    // };
  }, []);


  const handleActivate = async () => {
    setError("");

    // if (!name.trim() || !mobile.trim()) {
    //   setError("لطفا فیلدهای الزامی (نام و شماره تلفن) را پر کنید.");
    //   return;
    // }

    // if (mobile.length !== 11 || !/^09\d{9}$/.test(mobile)) {
    //   setError("شماره تلفن باید 11 رقم باشد و فقط شامل اعداد.");
    //   return;
    // }

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
      // setError("خطا در ارتباط با سرور. لطفا دوباره تلاش کنید.");
      setStep(3);
    }
  };

  const handleResetToStepOne = () => {
    setStep(1);
  };

  return (
    <div dir="rtl" className="h-full relative overflow-hidden w-full max-w-full mx-auto  md:max-w-[calc(100dvh*9/16)] mx-auto">
      <audio ref={audioRef} src="./assets/sound.mp3" />
      {/* Background */}
      <div className="relative h-full w-full bg-cover bg-center bg-no-repeat bg-[url('/assets/images/bg.png')]">
        <img
          src="./assets/images/bottom.png"
          alt="bg"
          className="absolute bottom-0 w-full h-auto"
        />
        {step === 1 && (
          <div className="flex min-h-dvh flex-col items-center justify-start pt-24 sm:pt-26 md:pt-8 lg:pt-35">
            <div className="relative z-10 flex pt-5 flex-col items-center justify-start px-4 sm:px-6 md:px-8 w-full max-w-md">
              {/* logo */}
              <img
                src="./assets/images/logo.png"
                alt="logo"
                className="w-3/5 sm:w-1/2 md:w-2/5 max-w-xs mx-auto pt-9 mb-10 sm:mb-4"
              />
              {/* Start */}
              <button
                onClick={() => {
                  setName("")
                  setMobile("")
                  setStep(2)
                }}
                className="!bg-[#AA2828] !border-[0.2rem] !cursor-pointer sm:!border-[0.3rem] h-12 sm:h-12 !p-0 mt-13 !border-[#F7F2DC] px-4 sm:px-6 md:px-10 lg:px-12 rounded-lg
                 font-bold text-white shadow-[0.25rem_0.75rem_8px_rgba(0,0,0,0.25)]
                  active:shadow-[0.25rem_0.5rem_8px_rgba(0,0,0,0.25)] active:translate-y-0.5 
                   w-full sm:w-3/4 md:w-3/4 max-w-sm"
                style={{ fontWeight: 700 }}
              >
                شـــــروع
              </button>
            </div>
            <img
              src="./assets/images/yalda.png"
              alt="logo"
              className="absolute bottom-0 left-1/2 md:w-[75%] sm:w-[80%]  -translate-x-1/2 h-auto px-12 sm:px-0"

            />
          </div>
        )}
        {step === 2 && (
          <div className="relative min-h-dvh w-full flex flex-col">
            <div className="z-10 flex flex-col items-center justify-start pt-18 sm:pt-18 md:pt-8 lg:pt-18 px-4 sm:px-6 md:px-8 flex-1">
              <img
                src="./assets/images/logo2.png"
                alt="bg"
                className="w-2/5 sm:w-1/3 md:w-2/5 max-w-xs mb-4 sm:mb-6"
              />
              <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-md flex-1">
                <div className="flex flex-col gap-1 items-center text-primary-dark text-white">
                  <p className="text-sm sm:text-base text-center">لطفـــا بــرای ادامـــه</p>
                  <p className="text-lg sm:text-xl font-bold text-center">
                    اطلاعات خـــود را وارد نمـــایید.
                  </p>
                </div>
                <div className="flex gap-2 sm:gap-3 items-center opacity-50 w-full">
                  <div className="h-[0.075rem] bg-gradient-to-l from-transparent to-primary-dark flex-1" />
                  <img alt="shape" className="w-full h-full flex-shrink-0" src="./assets/images/shape.png" />
                  <div className="h-[0.075rem] bg-gradient-to-r from-transparent to-primary-dark flex-1" />
                </div>
                <input
                  className="p-3 w-full bg-[#D7C7BB] !text-black border-[0.2rem] sm:border-[0.3rem] border-white rounded-lg outline-primary text-sm sm:text-base"
                  placeholder="نام و نام خانوادگی"
                  dir="rtl"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="p-3 w-full !text-black bg-[#D7C7BB] border-[0.2rem] sm:border-[0.3rem] border-white rounded-lg outline-primary text-sm sm:text-base"
                  placeholder="09-- --- ----"
                  dir="ltr"
                  inputMode="tel"
                  maxLength={11}
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
                {error && (
                  <div className="text-red-500 text-xs sm:text-sm text-center bg-red-100 p-2 rounded-lg w-full">
                    {error}
                  </div>
                )}
                <button
                  onClick={handleActivate}
                  style={{ fontWeight: 700 }}
                  className="!cursor-pointer !bg-[#AA2828] !border-[0.2rem] sm:!border-[0.3rem] 
                  !border-[#F7F2DC] px-8 sm:px-12 md:px-16 lg:px-32 py-3 rounded-lg font-bold z-99 text-white shadow-[0.25rem_0.75rem_8px_rgba(0,0,0,0.25)] cursor-pointer active:shadow-[0.25rem_0.5rem_8px_rgba(0,0,0,0.25)] active:translate-y-0.5 !w-full"
                >
                  تفأل
                </button>
              </div>
            </div>
            <img
              src="./assets/images/yalda2.png"
              alt="logo"
              className="absolute bottom-0 left-1/2 w-full  md:w-full  -translate-x-1/2 h-auto  sm:px-0"
            />
          </div>
        )}
        {step === 3 && (
          <div className="relative min-h-dvh w-full flex flex-col">
            <div className="z-10 flex flex-col items-center justify-start pt-10 sm:pt-16 md:pt-10 lg:pt-10 px-4 sm:px-6 md:px-8 flex-1">
              <img
                src="./assets/images/logo2.png"
                alt="bg"
                className="w-2/5 sm:w-1/3 md:w-2/5 max-w-xs mb-4"
              />
              <div className="flex flex-col gap-4 w-full max-w-lg flex-1">
                <WheelSpinner onReset={handleResetToStepOne} />
              </div>
            </div>
            <img
              src="./assets/images/yalda2.png"
              alt="logo"
              className="absolute bottom-0 left-1/2 w-full md:w-full  -translate-x-1/2 h-auto  sm:px-0"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default App
