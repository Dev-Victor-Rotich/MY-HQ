import React from "react";

const ComingSoon: React.FC = () => {
  return (
    <div className="bg min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="banner">Coming Soon!</h1>
      <p className="tagline">
        We're working hard to bring you something amazing. Stay tuned!
      </p>
      <form className="auth-box mt-8 p-6 rounded-lg shadow-lg bg-gray-800">
        <input
          type="email"
          placeholder="Enter your email"
          className="form-input mb-4"
          required
        />
        <button type="submit" className="form-btn">
          Notify Me
        </button>
      </form>
    </div>
  );
};

export default ComingSoon;
