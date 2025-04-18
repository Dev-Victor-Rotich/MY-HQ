import React from "react";
import Image from "next/image";
import ExpertsImg from "@/components/ExpertsImg";

const ExpertDetails = ({
  name,
  introduction,
  developer,
  role,
  sector,
  rating,
  total_projects,
  coming_soon,
  description,
  color,
  cover,
}: Expert) => {
  return (
    <section className="page-overview">
      <div className="flex flex-1 flex-col gap-6">
        <div className="flex flex-row gap-1">
          <div className=" introduction ">{introduction}</div>
          <div className="name">{name}</div>
        </div>
        <div className="flex flex-row gap-1">
          <p className="role font-rockwell italic font-bold">{role}</p>
          <p className="developer font-rockwell italic font-extrabold">
            {developer}
          </p>
        </div>
        <p className="font-montagu description">{description}</p>
        <div className="expert-info flex flex-row gap-5 text-md ">
          <p className="flex flex-row gap-2">
            <span className="font-semibold font-montagu italic text-light-200">
              {" "}
              Sector:
            </span>
            <span className="text-red-500 font-raleway  text-md">{sector}</span>
          </p>
          <div className=" flex items-center gap-1">
            <Image src="/icons/star.svg" alt="star" width={22} height={22} />
            <p>{rating}</p>
          </div>
        </div>
        <div className="projects font-montagu flex flex-row gap-4">
          <p>
            Solo Builds :{" "}
            <span className="font-semibold text-primary">{total_projects}</span>
          </p>
          <p>
            Together with Legends :{" "}
            <span className="font-semibold text-primary">{coming_soon}</span>
          </p>
        </div>
      </div>
      <div className="relative flex flex-1 justify-center">
        <div>
          <ExpertsImg
            variant="wide"
            className="z-10"
            coverColor={color}
            coverImage={cover}
          />
          <div className="absolute right-16 top-10 rotate-12 opacity-40 max-sm:hidden">
            <ExpertsImg variant="wide" coverColor={color} coverImage={cover} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertDetails;
