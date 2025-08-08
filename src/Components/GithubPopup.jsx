import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import toast from "react-hot-toast";

const GithubPopup = () => {
  const [show, setShow] = useState(false);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenGithubPopup");

    if (!hasSeenPopup) {
      setShow(true);
      sessionStorage.setItem("hasSeenGithubPopup", "true");
    }
  }, []);

  useEffect(() => {
    if (show && countdown === 0) {
      setShow(false);
    }

    if (show && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [countdown, show]);

  if (!show) {
    return null;
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("borhansiddque19@gmail.com");
      toast.success("Email copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="fixed flex items-center justify-center bg-black/60 z-50 w-full h-full">
      <div className="bg-neutral-900 text-white p-6 rounded-xl shadow-xl relative w-full max-w-sm">
        <div className="flex items-center justify-between mb-5">
          <div
            className="inline-block bg-[#2a2a2a] p-2 rounded cursor-pointer scale-95 hover:scale-110 shadow-none hover:shadow-lg hover:shadow-green-500 border-none transition-all duration-300"
            onClick={handleCopyEmail}
          >
            <CiMail size={25} />
          </div>
          <button
            onClick={() => setShow(false)}
            className=" text-gray-400 hover:text-white cursor-pointer "
          >
            <IoCloseCircleOutline
              size={30}
              className="hover:rotate-360 transition-all duration-300 text-red-500"
            />
          </button>
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          <div className="bg-green-500/20 p-3 rounded-full ring-2 ring-green-500/50">
            <FaGithub size={30} />
          </div>

          <div>
            <h2 className="text-lg font-bold">Thanks for visiting!</h2>
            <p className="text-sm text-gray-400 mt-2">
              If you liked this, please follow me on GitHub – it’d make my day!
            </p>
          </div>

          <a
            href="https://github.com/borhansiddque"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full px-4 py-2 text-base font-bold bg-gradient-to-r from-green-800 via-green-600 to-green-800 font-mono hover:from-green-700  hover:to-green-700 text-orange-100 shadow-none hover:shadow-sm hover:shadow-green-500 hover:scale-95 transition-all duration-300 w-full my-2"
          >
            Follow on GitHub
          </a>

          <p className="text-xs text-gray-400">
            Closing in <span className="font-bold">{countdown}s</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GithubPopup;
