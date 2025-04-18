import ExpertsDetails from "@/components/ExpertsDetails";
import { Profile } from "@/constants";
import React from "react";
import Expertize from "@/components/Expertize";
import SocialLinks from "@/components/SocialLinks";
import ExpertsList from "@/components/ExpertsList";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <div className="my-6 flex flex-col sm:flex-row sm:items-center sm:justify-between ">
        <div className="text-center">
          <div className="banner text-center font-raleway font-extrabold">
            WELCOME
            <div className="tagline font-semibold">
              Designed to Inspire and Delight! ✔
            </div>
          </div>
        </div>
      </div>
      <ExpertsDetails {...Profile[0]} />
      <div>
        <Services />
      </div>
      <div>
        <ExpertsList
          title="EXPERTS (COMMUNITY)"
          experts={Profile}
          containerClassName="mt-28"
        />
        <div>
          <Expertize />
        </div>
        <div>
          <SocialLinks />
        </div>
      </div>
    </>
  );
}
