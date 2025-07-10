import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BiSolidHide } from "react-icons/bi";
import { FaLock } from "react-icons/fa";
import { IoWatch } from "react-icons/io5";
import { TbLockSquareRoundedFilled } from "react-icons/tb";
import BatteryIndicator from "./battery";

const Watch = () => {
  const [time, setTime] = useState(new Date());
  const [isLocked, setIsLocked] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTwoDigits = (val) => val.toString().padStart(2, "0");
  const day = time.toLocaleString("en-US", { weekday: "short" });
  const month = time.toLocaleString("en-US", { month: "short" });
  const date = time.getDate();
  const hour = formatTwoDigits(time.getHours());
  const minute = formatTwoDigits(time.getMinutes());

  return (
    <div className="relative w-full h-64 flex items-center justify-center">
      {/* Unhide button */}
      {!isVisible && (
        <button
          onClick={() => setIsVisible(true)}
          className="absolute right-0 bottom-6 z-10 bg-[#2b2b2b] text-white px-2 py-1.5 rounded-full shadow cursor-pointer hover:bg-[#1f1f1f]"
        >
          <IoWatch size={30} color="#6f6f6f" />{" "}
        </button>
      )}

      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key="watch-box"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-52 h-52 bg-gray-500 rounded-3xl shadow-inner shadow-gray-50 before:absolute before:bg-sky-500 before:w-3 before:h-12 before:top-24 before:-right-2 before:-z-10 before:rounded-2xl before:shadow-inner before:shadow-gray-50 flex justify-center items-center overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {isLocked ? (
                <motion.div
                  key="locked"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-white"
                >
                  <button
                    onClick={() => setIsLocked(false)}
                    className="focus:outline-none cursor-pointer"
                  >
                    <TbLockSquareRoundedFilled size={50} color="#fff" />
                  </button>
                  <span className="text-sm mt-2">Tap to Unlock</span>
                </motion.div>
              ) : (
                <motion.div
                  key="watch"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-48 h-48 bg-neutral-900 rounded-3xl shadow-inner shadow-gray-50 flex flex-col items-center justify-center relative"
                >
                  <div className="flex flex-col items-center justify-center rounded-2xl bg-neutral-900 shadow-inner shadow-gray-50 w-48 h-48">
                    <div className="before:absolute before:w-12 before:h-12 before:bg-orange-800 before:rounded-full before:blur-xl before:top-16 relative flex flex-col justify-around items-center w-44 h-36 bg-neutral-900 text-gray-50">
                      <span>{`${day}, ${month} ${date}`}</span>
                      <span className="z-10 flex !gap-[0.2em] items-center text-6xl text-amber-600 [text-shadow:_2px_2px_#fff,_1px_2px_#fff]">
                        {hour}
                        <span className="text-xl font-bold text-gray-50 [text-shadow:none]">
                          :
                        </span>
                        {minute}
                      </span>

                      <div className="text-gray-50 w-48 flex flex-row justify-center !gap-[1.4em] mt-2">
                        <BatteryIndicator />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 fill-red-500 animate-bounce"
                          viewBox="0 0 100 100"
                        >
                          <path
                            fillRule="evenodd"
                            d="M23,27.6a15.8,15.8,0,0,1,22.4,0L50,32.2l4.6-4.6A15.8,15.8,0,0,1,77,50L50,77,23,50A15.8,15.8,0,0,1,23,27.6Z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <span className="text-gray-700 text-lg font-light">
                      CLOCK
                    </span>
                  </div>

                  {/* Lock icon to relock */}
                  <button
                    className="absolute bottom-4 right-4 cursor-pointer"
                    onClick={() => setIsLocked(true)}
                  >
                    <FaLock size={20} color="grey" />
                  </button>

                  {/* Hide button */}
                  <button
                    className="absolute bottom-3 left-4 cursor-pointer"
                    onClick={() => setIsVisible(false)}
                  >
                    <BiSolidHide size={25} color="grey" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Watch;
