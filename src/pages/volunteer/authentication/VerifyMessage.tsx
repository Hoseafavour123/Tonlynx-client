import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const VerifyEmailMessage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-sm w-full">
        <div className="flex justify-center items-center mb-4 text-green-600">
          <AiOutlineMail className="text-4xl" />
        </div>
        <h1 className="text-2xl font-semibold text-gray-800">
          Verify Your Email
        </h1>
        <p className="text-gray-600 mt-2">
          A verification link has been sent to your email. Please check your
          inbox and verify your email address to continue.
        </p>
        <a
          href="https://mail.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Open Gmail
        </a>
      </div>
    </div>
  );
};

export default VerifyEmailMessage;