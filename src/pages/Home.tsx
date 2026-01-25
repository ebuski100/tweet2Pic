import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Contact from "../components/Contact";
import Settings from "../components/Settings";
import Edit from "../components/Edit";

const Home = () => {
  const [dark, setDark] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [tweetUrl, setTweetUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();

  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const url = searchParams.get("tweet");
    if (url) {
      setTweetUrl(url);
    }
  }, [searchParams]);

  const clearUrl = () => {
    setTweetUrl("");
  };

  const [settingsModal, setShowSettingsModal] = useState(false);

  const [infoModal, setInfoModal] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const convertTweetToImage = async () => {
    if (!tweetUrl) return;

    setIsLoading(true);
    setImageUrl(null);

    try {
      const res = await fetch("http://localhost:4000/tweet-to-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tweetUrl,
          theme: dark ? "dark" : "light",
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to generate image");
      }

      const data = await res.json();
      setImageUrl(data.image); // base64 image
    } catch (err) {
      console.error(err);
      alert("Could not generate tweet image");
    } finally {
      setIsLoading(false);
    }
  };

  const downloadImage = () => {
    if (!imageUrl) return;

    const a = document.createElement("a");
    a.href = imageUrl;
    a.download = "tweet2pic.png";
    a.click();
  };

  const showSavedToast = () => {
    setTimeout(() => {
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }, 1000);
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
            value={tweetUrl}
            onChange={(e) => setTweetUrl(e.target.value)}
            placeholder="Paste tweet URL here"
            className="flex-1 border-b border-b-white  outline-none placeholder-gray-400  text-gray-200 "
            type="text"
          />
          <div className="flex flex-row items-center  ">
            <img
              onClick={clearUrl}
              className="p-2 cursor-pointer"
              src="/images/close.png"
              alt=""
            />
            <button
              onClick={convertTweetToImage}
              className="bg-blue-400 p-2 text-white font-bold rounded cursor-pointer active:scale-105 hover:bg-blue-300"
            >
              {isLoading ? "Loading…" : "Generate"}
            </button>
          </div>
        </div>
        <div className="imgCont border border-green-300 w-full h-[70%] mb-3 p-2 flex items-center justify-center">
          {isLoading && <div className="text-white">Generating image…</div>}

          {!isLoading && imageUrl && (
            <img
              src={imageUrl}
              className="w-full rounded-lg"
              alt="Tweet preview"
            />
          )}

          {!isLoading && !imageUrl && (
            <div className="text-gray-400 text-sm">
              Generated image will appear here
            </div>
          )}
        </div>

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

            <div
              onClick={() => setIsEditModalOpen(true)}
              className="hover bg-gray-400 rounded py-2 px-4 w-[40%] flex  justify-center cursor-pointer active:scale-105 transition-transform duration-200"
            >
              <img src="/images/edit.png" className="h-5 w-5" alt="" />
            </div>
          </div>

          <div className="flex flex-row items-center justify-between py-2 px-4">
            <div
              onClick={() => {
                downloadImage();
                showSavedToast();
              }}
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

        <Settings
          settingsModal={settingsModal}
          setShowSettingsModal={setShowSettingsModal}
        />

        <Edit
          isEditModalOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
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
    </div>
  );
};

export default Home;
