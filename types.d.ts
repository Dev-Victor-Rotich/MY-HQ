interface Expert {
  id: number;
  name: string;
  introduction: string;
  developer: string;
  role: string;
  sector: string;
  rating: number;
  total_projects: number;
  coming_soon: number;
  description: string;
  color: string;
  cover: string;
}
interface Match {
  matchName: string;
  kickOff: string;
  odds: number;
  marketChoice: string;
  whatToPlace: string;
  outcome: string;
}

interface PreviousMonthStats {
  month: string;
  won: number;
  lost: number;
  rejected: number;
}

interface MatchDay {
  id: number;
  date: string;
  matches: Match[];
  totalOdds: number;
  previousMonthStats: PreviousMonthStats;
  matchDayImage: string;
}
interface AuthCredentials {
  fullName: string;
  email: string;
  password: string;
  workId: number;
  workCard: string;
}
