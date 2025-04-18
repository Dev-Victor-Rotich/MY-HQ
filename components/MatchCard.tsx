"use client";
import React from "react";
import { motion } from "framer-motion";

interface Match {
  matchName: string;
  kickOff: string;
  odds: number;
  marketChoice: string;
  whatToPlace: string;
  outcome: string;
}

interface MatchCardProps {
  id: number;
  date: string;
  matches: Match[];
  totalOdds: number;
  matchDayImage: string;
}

const MatchCard: React.FC<MatchCardProps> = ({ date, matches, totalOdds }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className="rounded-lg p-4 shadow-lg bg-gray-900 text-white"
    >
      <div className="mt-0">
        <motion.p
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="text-lg font-bold"
        >
          {date}
        </motion.p>

        <div className="mt-2 font-montagu">
          {matches.map((match, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
              className="border-b border-gray-700 py-2 gap-2"
            >
              <p className="text-xs font-semibold">{match.matchName}</p>
              <p className="text-xs text-secondary-dark">
                Kickoff: {match.kickOff}
              </p>
              <p className="text-xs">Market: {match.marketChoice}</p>
              <p className="text-xs text-primary">{match.outcome}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="mt-3 text-size font-semibold"
        >
          Total Odds: <span className="text-yellow-400">{totalOdds}</span>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default MatchCard;
