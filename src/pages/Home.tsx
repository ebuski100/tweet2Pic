import { useState } from "react";

import Contact from "../components/Contact";
import Settings from "../components/Settings";
const Home = () => {
  const [dark, setDark] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const [settingsModal, setShowSettingsModal] = useState(false);

  const [infoModal, setInfoModal] = useState(false);

  const showSavedToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Tweet2Pic",
          text: "Convert tweets to beautiful images 🔥",
          url: window.location.href,
        });
      } catch (error) {
        console.log("Share cancelled", error);
      }
    } else {
      alert("Sharing is not supported on this browser");
    }
  };

  return (
    <div className="border pb-10 appCont ">
      <div className="header bg-black flex flex-row items-center justify-between p-4">
        <div className="text-2xl font-bold text-white">tweet2pic</div>

        <div className="flex  text-white flex-row items-center">
          <div
            onClick={() => setInfoModal(true)}
            className="my-2 mx-4 cursor-pointer active:scale-105"
          >
            <img src="/images/info.png" alt="" />
          </div>
          <div
            onClick={() => setShowSettingsModal(true)}
            className="my-2 mx-4 cursor-pointer active:scale-105"
          >
            <img src="/images/settings.png" alt="" />
          </div>
        </div>
      </div>

      <div className="homecont h-[87%]  flex flex-col ">
        <div className=" w-full flex flex-row  p-3 items-center justify-between">
          <input
            className="flex-1 border-b border-b-white  outline-none   "
            type="text"
          />
          <div className="flex flex-row items-center  ">
            <img
              className="p-2 cursor-pointer"
              src="/images/close.png"
              alt=""
            />
            <button className="bg-blue-400 p-2 text-white font-bold rounded cursor-pointer active:scale-105 hover:bg-blue-300">
              submit
            </button>
          </div>
        </div>
        <div className="imgCont w-full h-[70%] mb-3  p-2 "></div>

        <div>
          <div className="flex flex-row  items-center justify-between px-4">
            <div className="flex flex-row  items-center justify-center">
              <button
                onClick={() => setDark(!dark)}
                className={`  m-2 h-[30px] w-[30px] cursor-pointer flex items-center 
                justify-center
                 p-2 rounded
                ${dark ? "bg-blue-400" : "border-3 border-gray-300  "}
                `}
              >
                {dark && (
                  <img
                    className={`w-4 h-4 scale`}
                    src="/images/check.png"
                    alt=""
                  />
                )}
              </button>
              <div className="text-white font-medium">Dark theme</div>
            </div>

            <div className="hover bg-gray-400 rounded py-2 px-4 w-[40%] flex  justify-center cursor-pointer active:scale-105 transition-transform duration-200">
              <img src="/images/edit.png" className="h-5 w-5" alt="" />
            </div>
          </div>

          <div className="flex flex-row items-center justify-between py-2 px-4">
            <div
              onClick={showSavedToast}
              className=" hover  rounded py-2 px-4 w-[40%] flex justify-center cursor-pointer active:scale-105 transition-transform duration-200 "
            >
              <img className="w-6 h-6" src="/images/downloads.png" alt="" />
            </div>
            <div
              onClick={handleShare}
              className="hover rounded py-2 px-4 w-[40%] flex justify-center cursor-pointer active:scale-105 transition-transform duration-200"
            >
              <img className="w-6 h-6" src="/images/share.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Settings
        settingsModal={settingsModal}
        setShowSettingsModal={setShowSettingsModal}
      />

      <Contact infoModal={infoModal} setInfoModal={setInfoModal} />

      <div
        className={`
    fixed bottom-6 left-1/2 -translate-x-1/2
    bg-green-500 text-white text-sm
    px-4 py-2 rounded-2xl shadow-lg
    
    ${showToast ? "toast" : "opacity-0"} 
    
    `}
      >
        Picture saved
      </div>
    </div>
  );
};

export default Home;
