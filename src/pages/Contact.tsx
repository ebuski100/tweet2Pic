// import React from "react";

const Contact = () => {
  return (
    <div className="ContactCont">
      <div className="contactHead bg-black p-2 flex flex-row items-center">
        <img src="/images/arrow.png" className="h-5 w-5 mr-4" alt="" />
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
        <div className=" p-4 flex  flex-row items-center cursor-pointer contactItem ">
          <img className="mr-3 h-8 w-8" src="/images/twitter.png" alt="" />
          <div className="font-bold text-white">X(formerly Twitter)</div>
        </div>
        <div className=" p-4 flex  flex-row items-center cursor-pointer contactItem ">
          <img className="mr-3 h-8 w-8" src="/images/linkedin.png" alt="" />
          <div className="font-bold text-white">linkedIn</div>
        </div>
        <div className=" p-4 flex  flex-row items-center cursor-pointer contactItem ">
          <img className="mr-3 h-7 w-7" src="/images/share.png" alt="" />
          <div className="font-bold text-white">Share</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
