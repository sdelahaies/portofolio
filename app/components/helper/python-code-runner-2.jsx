"use client";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";

const PythonCodeRunner = () => {
  const [showDialog, setShowDialog] = useState(false);

  const handleRun = () => {
    setShowDialog(true);
  };

  const handleClose = () => {
    setShowDialog(false);
  };

  return (
    <div className="flex justify-center items-center p-12">
    <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-orange-500 to-stone-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" href={''}>
      <button
        onClick={handleRun}
        // className="bg-orange-600 text-white px-8 py-2 rounded-lg hover:bg-orange-700 transition"
      >
        <span>RUN</span>
        {/* <FaPlay size={15} /> */}
      </button>
      </Link>
      {showDialog && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-black p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-lg font-bold mb-2">Output:</h2>
            <pre className="bg-gray-100 p-4 rounded-lg text-sm text-gray-800">
              {`I'm Sylvain Delahaies, 
proficient in python, transformers, fastapi,
docker, AWS, SQL, and more,
and looking for opportunities!`}
            </pre>
            <button
              onClick={handleClose}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PythonCodeRunner;
