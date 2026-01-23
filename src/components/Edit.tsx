import { useState } from "react";
type EditProps = {
  isEditModalOpen: boolean;
  setIsEditModalOpen: (value: boolean) => void;
};
const Edit = ({ isEditModalOpen, setIsEditModalOpen }: EditProps) => {
  const [styles, setStyles] = useState({
    fontFamily: "Inter",
    fontWeight: 400,
    color: "#ffffff",
    fontSize: 18,
    fontStyle: "normal" as "normal" | "italic",
    textDecoration: "none" as "none" | "underline",
  });

  const [isItalic, setItalic] = useState(false);
  const [isBold, setBold] = useState(false);
  const [isUnderlined, setUnderlined] = useState(false);

  const fonts = [
    "Arial",
    "Times New Roman",
    "Georgia",
    "Courier New",
    "Verdana",
    "Tahoma",
    "Trebuchet MS",
    "Impact",
    "Comic Sans MS",
    "Lucida Console",
    "Palatino",
    "Garamond",
  ];

  const colors = [
    "#000000",
    "#1A1A1A",
    "#333333",
    "#4D4D4D",
    "#666666",
    "#808080",
    "#999999",
    "#B3B3B3",
    "#CCCCCC",
    "#E6E6E6",
    "#FFFFFF",
    "#FF0000",
    "#FF4D4D",
    "#FF9999",
    "#FFB3B3",
    "#FF6666",
    "#CC0000",
    "#990000",
    "#660000",
    "#330000",
    "#00FF00",
    "#4DFF4D",
    "#99FF99",
    "#B3FFB3",
    "#66FF66",
    "#00CC00",
    "#009900",
    "#006600",
    "#003300",
    "#99CC00",
    "#0000FF",
    "#4D4DFF",
    "#9999FF",
    "#B3B3FF",
    "#6666FF",
    "#0000CC",
    "#000099",
    "#000066",
    "#000033",
    "#3399FF",
    "#FFFF00",
    "#FFFF4D",
    "#FFFF99",
    "#FFFFB3",
    "#FFFF66",
    "#CCCC00",
    "#999900",
    "#666600",
    "#333300",
    "#FFCC00",
    "#FF00FF",
    "#FF4DFF",
    "#FF99FF",
    "#FFB3FF",
    "#FF66FF",
    "#CC00CC",
    "#990099",
    "#660066",
    "#330033",
    "#FF66CC",
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isFontColorModalOpen, setIsFontColorModalOpen] = useState(false);
  const [selectedFont, setSelectedFont] = useState(fonts[0]);
  const [isFillColorModalOpen, setIsFillColorModalOpen] = useState(false);

  const [selectedFillColor, setSelectedFillColor] = useState(colors[0]);
  const [selectedFontColor, setSelectedFontColor] = useState(colors[0]);

  const handleFillColorClick = (color: string) => {
    setSelectedFillColor(color);
    setIsFillColorModalOpen(false);
  };

  const handleFontClick = (font: string) => {
    setSelectedFont(font);
    setIsModalOpen(false);
  };
  const handleFontColorClick = (color: string) => {
    setSelectedFontColor(color);
    setIsFontColorModalOpen(false);
  };

  const makeActive = (actionType: string) => {
    if (actionType === "bold") {
      setBold((prev) => !prev);
    } else if (actionType === "italic") {
      setItalic((prev) => !prev);
    } else {
      setUnderlined((prev) => !prev);
    }
  };

  const tweetText = "Learning TypeScript and building cool tools with React 🚀";

  return (
    <div>
      {isEditModalOpen && (
        <div
          className="fixed inset-0 bg-black/10 "
          onClick={() => setIsEditModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`
          fixed left-0 right-0 bottom-0 bg-gray-500  shadow-xl
          transform transition-transform duration-300
          ${isEditModalOpen ? "translate-y-0" : "translate-y-full"}
          max-h-[50vh] overflow-y-auto
        `}
          >
            <div className="flex flex-row items-center justify-between p-2  mb-2">
              <div className="text-white font-bold ">Edit Tweet</div>

              <img
                onClick={() => setIsEditModalOpen(false)}
                src="/images/down.png"
                className="h-6 w-6"
                alt=""
              />
            </div>

            {/* <div className="bg-black p-6 rounded-xl">
          <p
            style={{
              fontFamily: styles.fontFamily,
              fontWeight: styles.fontWeight,
              fontStyle: styles.fontStyle,

              color: styles.color,
              fontSize: `${styles.fontSize}px`,
              lineHeight: 1.4,
            }}
            className={`whitespace-pre-wrap ${styles.textDecoration === "underline" ? "underline decoration-2 underline-offset-3 " : ""}`}
          >
            {tweetText}
          </p>
        </div> */}

            <div
              onClick={() => setIsModalOpen(true)}
              className="flex flex-row justify-between items-center mb-2 p-2"
            >
              <div
                className="text-white cursor-pointer "
                style={{ fontFamily: selectedFont }}
              >
                {selectedFont}
              </div>
              <img className="h-4 w-4" src="/images/right-arrow.png" alt="" />
            </div>

            <div className="flex flex-row w-full items-center justify-between">
              <button
                className={`text-center  w-[33%] p-4 font-bold text-2xl text-white ${isBold ? "bg-gray-900" : ""}`}
                onClick={() => {
                  makeActive("bold");
                  setStyles((s) => ({
                    ...s,
                    fontWeight: s.fontWeight === 700 ? 400 : 700,
                  }));
                }}
              >
                B
              </button>

              <button
                className={`text-center  w-[33%] p-4  text-2xl text-white italic ${isItalic ? "bg-gray-900" : ""}`}
                onClick={() => {
                  makeActive("italic");
                  setStyles((s) => ({
                    ...s,
                    fontStyle: s.fontStyle === "italic" ? "normal" : "italic",
                  }));
                }}
              >
                I
              </button>

              <button
                className={`text-center  w-[33%] p-4 underline text-2xl text-white ${isUnderlined ? "bg-gray-900" : ""} `}
                onClick={() => {
                  makeActive("underlined");
                  setStyles((s) => ({
                    ...s,
                    textDecoration:
                      s.textDecoration === "underline" ? "none" : "underline",
                  }));
                }}
              >
                U
              </button>
            </div>
            <div className="flex flex-row justify-between items-center border-b border-gray-900">
              <div
                onClick={() => setIsFontColorModalOpen(true)}
                className="py-4 px-2 items-center flex flex-row  flex-1"
              >
                <div className="mr-3">
                  <div className="text-2xl font-bold  text-center text-gray-300">
                    A
                  </div>
                  <div
                    style={{ backgroundColor: selectedFontColor }}
                    className={`h-2 w-[40px] `}
                  ></div>
                </div>

                <div style={{ color: selectedFontColor }}>font Color</div>
              </div>
              <img
                className="w-4 h-4 mr-4"
                src="/images/right-arrow.png"
                alt=""
              />
            </div>

            <div
              onClick={() => setIsFillColorModalOpen(true)}
              className="flex flex-row justify-between items-center"
            >
              <div className="py-4 px-2 items-center flex flex-row  flex-1">
                <div className="mr-3">
                  <img
                    className="m-1 h-8 w-8"
                    src="/images/paint-bucket.png"
                    alt=""
                  />
                  <div
                    style={{ backgroundColor: selectedFillColor }}
                    className="h-2 w-[40px] bg-green-500"
                  ></div>
                </div>

                <div
                  style={{ backgroundColor: selectedFillColor }}
                  className="text-white p-2"
                >
                  fill Color
                </div>
              </div>
              <img
                className="w-4 h-4 mr-4"
                src="/images/right-arrow.png"
                alt=""
              />
            </div>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 bg-black/10"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`
          fixed left-0 right-0 bottom-0 bg-gray-500  shadow-xl
          transform transition-transform duration-300
          ${isModalOpen ? "translate-y-0" : "translate-y-full"}
          h-[50vh] overflow-y-auto
        `}
          >
            <div className="p-4 sticky top-0 left-0 border-b bg-gray-400 border-gray-600 flex justify-between items-center">
              <h2 className="text-lg font-bold text-blue-500">Font</h2>
              <button
                className="text-gray-900 text-xl font-bold"
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 p-4">
              {fonts.map((font) => (
                <div
                  key={font}
                  className="cursor-pointer p-2   hover:bg-gray-300 rounded text-white cursor-pointer"
                  style={{ fontFamily: font }}
                  onClick={() => handleFontClick(font)}
                >
                  {font}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {isFontColorModalOpen && (
        <div
          onClick={() => setIsFontColorModalOpen(false)}
          className="fixed inset-0 bg-black/10"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`
          fixed left-0 right-0 bottom-0 bg-gray-500  shadow-xl
          transform transition-transform duration-300
          ${isFontColorModalOpen ? "translate-y-0" : "translate-y-full"}
          h-[50vh] overflow-y-auto
        `}
          >
            <div className="p-4 sticky top-0 left-0 border-b bg-gray-400 border-gray-600 flex justify-between items-center">
              <h2 className="text-lg font-bold text-blue-500">
                Standard colors
              </h2>
              <button
                className="text-gray-900 text-xl font-bold"
                onClick={() => setIsFontColorModalOpen(false)}
              >
                ×
              </button>
            </div>
            <div className="grid grid-cols-8  gap-2 p-4 ">
              {colors.map((color) => (
                <div
                  key={color}
                  className="cursor-pointer p-2   hover:bg-gray-300 rounded text-white cursor-pointer h-[30px]"
                  style={{ backgroundColor: color }}
                  onClick={() => handleFontColorClick(color)}
                >
                  {/* {colors} */}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {isFillColorModalOpen && (
        <div
          onClick={() => setIsFillColorModalOpen(false)}
          className="fixed inset-0 bg-black/10"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`
          fixed left-0 right-0 bottom-0 bg-gray-500  shadow-xl
          transform transition-transform duration-300
          ${isFillColorModalOpen ? "translate-y-0" : "translate-y-full"}
          h-[50vh] overflow-y-auto
        `}
          >
            <div className="p-4 sticky top-0 left-0 border-b bg-gray-400 border-gray-600 flex justify-between items-center">
              <h2 className="text-lg font-bold text-blue-500">Theme colors</h2>
              <button
                className="text-gray-900 text-xl font-bold"
                onClick={() => setIsFillColorModalOpen(false)}
              >
                ×
              </button>
            </div>
            <div className="grid grid-cols-8  gap-2 p-4 ">
              {colors.map((color) => (
                <div
                  key={color}
                  className="cursor-pointer p-2   hover:bg-gray-300 rounded text-white cursor-pointer h-[30px]"
                  style={{ backgroundColor: color }}
                  onClick={() => handleFillColorClick(color)}
                >
                  {/* {colors} */}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Edit;
