"use client";

import {
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { useState } from "react";

const SocialLinks = () => {
  const [selectedMessage, setSelectedMessage] = useState("");

  const messages = [
    "Hey Rotich! Quick question about what you offer 😄",

    "Hi! Mind sharing a quote for a project I'm planning?",

    "Yo! I’ve heard good things—how can we work together?",

    "Hey there! Just wondering how your pricing works 💬",

    "Hey Rotich 👋 Just saying hi and checking out your services!",

    "I'd love to learn more about what you do!",

    "Hi! Could you hook me up with some project rates?",
  ];

  const handleWhatsAppSend = () => {
    if (!selectedMessage) return;
    const url = `https://wa.me/254704967186?text=${encodeURIComponent(selectedMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <h1 className="title">Socials</h1>

      {/* Social Icons */}
      <div
        className="grid grid-cols-5 sm:grid-cols-5 gap-6 xl:text-4xl sm:text-2xl mb-10 p-4 mx-10
        bg-secondary-light rounded-2xl shadow-md hover:shadow-lg transition duration-300"
      >
        <a
          href="https://wa.me/254704967186"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-600 transition-transform hover:scale-110 xl:ml-16"
        >
          <FaWhatsapp />
        </a>
        {/* Email */}
        <a
          href="mailto:chelelgovictorrotich2604@gmail.com"
          className="text-red-500 hover:text-red-700 transition-transform hover:scale-110 xl:ml-16"
        >
          <FaEnvelope />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/victor-rotich-611ab1349"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition-transform hover:scale-110 xl:ml-16"
        >
          <FaLinkedin />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/devvictorrotich?igsh=MXR4aTdwN2Zudjl5dg=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-900 transition-transform hover:scale-110 xl:ml-16"
        >
          <FaInstagram />
        </a>

        {/* X (Twitter) */}
        <a
          href="https://x.com/cloudcity2604?t=PYnMwrdatRyLJ4bsC2UYnA&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition-transform hover:scale-110 xl:ml-16"
        >
          <FaXTwitter />
        </a>
      </div>

      {/* WhatsApp Dropdown & Button */}
      <div className="font-raleway col-span-5 flex flex-col sm:flex-row gap-3 items-center xl:ml-16 mb-10">
        <select
          className="rounded-2xl w-full sm:w-auto px-3 py-2 text-xs sm:text-sm bg-accent-light hover:bg-accent-dark"
          defaultValue=""
          onChange={(e) => setSelectedMessage(e.target.value)}
        >
          <option value="" disabled>
            "Need something quick? Select a message 💬 and hit send"
          </option>
          {messages.map((msg, idx) => (
            <option key={idx} value={msg}>
              {msg}
            </option>
          ))}
        </select>

        <button
          onClick={handleWhatsAppSend}
          disabled={!selectedMessage}
          className="bg-green-500 hover:bg-green-600 text-secondary px-3 py-2 text-xs sm:text-sm rounded transition-all flex items-center gap-2"
        >
          <FaWhatsapp className="text-base sm:text-lg" />
          Send ✔
        </button>
      </div>
    </div>
  );
};

export default SocialLinks;
