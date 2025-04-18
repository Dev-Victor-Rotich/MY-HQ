import React from "react";
import ExpertsImg from "@/components/ExpertsImg";
//import Link from "next/link";

interface Expert {
  id: number;
  name: string;
  role: string;
  developer: string;
  color: string;
  cover: string;
}

const ExpertsCard: React.FC<Expert> = ({
  name,
  role,
  developer,
  color,
  cover,
}) => {
  return (
    <div>
      <ExpertsImg coverColor={color} coverImage={cover} />
      <div>
        <p className="expertise-p">{name} </p>
        <div className="flex flex-row gap-1">
          <p className="expertise">{role} </p>
          <p className="expertise-p">{developer}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertsCard;
{
  /* <div className="cursor-pointer">
      <Link href={`./${id}`}></Link></div>*/
}
