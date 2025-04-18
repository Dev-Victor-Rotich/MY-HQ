import React from "react";
import MatchCard from "@/components/MatchCard";

interface Match {
  matchName: string;
  kickOff: string;
  odds: number;
  marketChoice: string;
  whatToPlace: string;
  outcome: string;
}

interface MatchDay {
  id: number;
  date: string;
  matches: Match[];
  totalOdds: number;
  matchDayImage: string;
}

interface Props {
  title: string;
  matchDays: MatchDay[];
  containerClassName?: string;
}

const MatchList: React.FC<Props> = ({
  title,
  matchDays,
  containerClassName,
}) => {
  return (
    <section className={containerClassName}>
      <h2 className="title">{title}</h2>

      <ul className="grid grid-cols-2 sm:grid-cols-5 gap-6">
        {matchDays.map((matchDay) => (
          <MatchCard key={matchDay.id} {...matchDay} />
        ))}
      </ul>
    </section>
  );
};

export default MatchList;
