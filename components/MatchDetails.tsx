import React from "react";
import MatchImg from "@/components/MatchImg";

const MatchDetails = ({
  date,
  matches,
  totalOdds,
  previousMonthStats,
  matchDayImage,
}: MatchDay) => {
  return (
    <section className="page-overview">
      <div className="flex flex-1 flex-col text-size gap-6">
        <div className="flex flex-row gap-3">
          <p className="description font-montagu">Today's Tip :</p>
          <p className="description  text-primary">{date}</p>
        </div>

        <div className="flex flex-col gap-4 ">
          {matches.map((match, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 mt-4 p-4 border rounded-lg bg-gray-950 text-light-100"
            >
              <p className="font-bold font-montagu text-primary">
                {match.matchName}
              </p>
              <p>
                Kickoff:{" "}
                <span className="font-semibold text-red-500">
                  {match.kickOff}
                </span>
              </p>
              {/*<p>
                Market Choice:{" "}
                <span className="italic">{match.marketChoice}</span>
              </p>*/}
              <p>
                Market:{" "}
                <span className="font-semibold text-primary">
                  {match.whatToPlace}
                </span>
              </p>
              <div className="flex flex-row gap-6">
                <p>
                  Odds:{" "}
                  <span className="font-semibold text-secondary">
                    {match.odds}
                  </span>
                </p>
                <p>
                  Result:{" "}
                  <span className="font-semibold text-secondary">
                    {match.outcome}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-5 text-size text-secondary-light mt-4">
          <p>
            Total Odds:{" "}
            <span className="font-bold text-green-500">{totalOdds}</span>
          </p>
        </div>

        <div className="previous-stats flex flex-col gap-2 mt-4 p-4 border rounded-lg bg-red-500 text-size text-light-100">
          <p className=" font-bold font-montagu text-secondary-dark ">
            {previousMonthStats.month} Analysis
          </p>
          <div className="flex flex-row gap-5">
            <p>✅ Won: {previousMonthStats.won}</p>
            <p>❌ Lost: {previousMonthStats.lost}</p>
            <p>🚫 Rejected: {previousMonthStats.rejected}</p>
          </div>
        </div>
      </div>

      <div className="relative flex flex-1 justify-center">
        <MatchImg
          variant="wide"
          matchDayImage={matchDayImage}
          className="z-10 "
        />
      </div>
    </section>
  );
};

export default MatchDetails;
