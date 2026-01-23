type goInfo = {
  infoModal: boolean;
  setInfoModal: (value: boolean) => void;
};

const Contact = ({ infoModal, setInfoModal }: goInfo) => {
  return (
    <div
      className={`contactOverlay fixed top-0 left-0 right-0 bottom-0 bg-[#3b3b3b] transform transition-transform duration-500 ease-out ${infoModal ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="ContactCont animate-slide-in">
        <div className="contactHead bg-black p-2 flex flex-row items-center">
          <img
            onClick={() => setInfoModal(false)}
            src="/images/arrow.png"
            className="h-5 w-5 mr-4"
            alt=""
          />
          <div className="text-white font-bold">tweet2pic</div>
        </div>
        <div className="my-12">
          <div className="bg-gray-800 h-[100px] w-[100px] rounded-2xl flex items-center justify-center mx-auto my-8">
            <img src="/images/inkwell.png" alt="" />
          </div>
          <p className="text-white text-center font-bold mb-8">Tweet2Pic</p>
        </div>

        <div className="text-white font-bold p-4">Connect With Us:</div>

        <div className="px-2">
          <div
            onClick={() =>
              (window.location.href = "mailto:felixebus042@gmail.com")
            }
            className=" p-4 flex  flex-row items-center cursor-pointer contactItem "
          >
            <img className="mr-3" src="/images/email.png" alt="" />
            <div className="font-bold text-white">Email</div>
          </div>
          <a
            href="https://x.com/@ebube_dev"
            target="_blank"
            rel="noopener noreferrer"
            className=" p-4 flex  flex-row items-center cursor-pointer contactItem "
          >
            <div className="bg-white h-8 w-8 rounded mr-3">
              <img className="mr-3 h-8 w-8" src="/images/twitter.png" alt="" />
            </div>
            <div className="font-bold text-white">X(formerly Twitter)</div>
          </a>
          <a
            href="https://www.linkedin.com/in/ebube-felix-🧑🏽%E2%80%8D💻-820a3724a/"
            target="_blank"
            rel="noopener noreferrer"
            className=" p-4 flex  flex-row items-center cursor-pointer contactItem "
          >
            <img className="mr-3 h-8 w-8" src="/images/linkedin.png" alt="" />
            <div className="font-bold text-white">linkedIn</div>
          </a>
          <a
            href="https://www.github.com/ebuski100/"
            target="_blank"
            rel="noopener noreferrer"
            className=" p-4 flex  flex-row items-center cursor-pointer contactItem "
          >
            <div className="bg-white h-7 w-7 rounded mr-3">
              <img className="mr-3 h-7 w-7" src="/images/github.png" alt="" />
            </div>
            <div className="font-bold text-white">Github</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
