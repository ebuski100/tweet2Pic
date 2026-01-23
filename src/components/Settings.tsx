import { useState } from "react";
import Toggle from "../components/Toggle";

type goSettings = {
  settingsModal: boolean;
  setShowSettingsModal: (value: boolean) => void;
};

const Settings = ({ settingsModal, setShowSettingsModal }: goSettings) => {
  const [includeLink, setIncludeLink] = useState(false);
  const [saveImage, setSaveImage] = useState(false);
  return (
    <div
      className={`settingsModalOverlay h-full w-full bg-gray-800   fixed top-0 right-0 left-0 bottom-0 transform transition-transform duration-500 ease-out ${settingsModal ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="ModalCont flex flex-col">
        <div className="flex flex-row p-3  mb-6 bg-black w-full items-center">
          <img
            onClick={() => setShowSettingsModal(false)}
            className="h-6 w-6 mr-10"
            src="/images/arrow.png"
            alt=""
          />
          <div className="text-white font-bold text-2xl">Settings</div>
        </div>
        <div className=" pl-19 pr-4">
          <p className="text-blue-600 font-bold mb-4">Sharing</p>

          <div className="flex flex-row items-center justify-between mb-6">
            <div>
              <p className="text-white">Include Post link when sharing</p>
              {includeLink ? (
                <p className="text-gray-400 text-sm">
                  Post link will be included
                </p>
              ) : (
                <p className="text-gray-400 text-sm">
                  Post link will not be included
                </p>
              )}
            </div>
            <Toggle on={includeLink} setOn={setIncludeLink} />
          </div>
          <div className="flex flex-row items-center justify-between mb-10">
            <div>
              <p className="text-white">Save Image on Sharing</p>
              {saveImage ? (
                <p className="text-gray-400 text-sm">
                  Image will be saved when Shared
                </p>
              ) : (
                <p className="text-gray-400 text-sm">
                  Image will not be saved when Shared
                </p>
              )}
            </div>
            <Toggle on={saveImage} setOn={setSaveImage} />
          </div>
        </div>

        <hr className="border-gray-500/50 border m" />
      </div>
    </div>
  );
};

export default Settings;
