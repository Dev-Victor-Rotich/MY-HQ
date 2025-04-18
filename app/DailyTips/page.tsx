import React from "react";
import Services from "@/components/Services";
import ExpertsList from "@/components/ExpertsList";
import { Matches, Profile } from "@/constants";
import Expertize from "@/components/Expertize";
import SocialLinks from "@/components/SocialLinks";
import MatchDetails from "@/components/MatchDetails";
import MatchList from "@/components/MatchList";

const page = () => {
  return (
    <section>
      <div className="my-6 flex flex-col sm:flex-row sm:items-center sm:justify-between ">
        <div className="text-center">
          <div className="banner text-center font-raleway font-extrabold">
            Daily Tips
            <div className="tagline font-semibold">
              "Today’s Best Odds, Backed by Data!📈"
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-6">
        <MatchDetails {...Matches[0]} />
      </div>
      <div>
        <MatchList title="Previous Ten" matchDays={Matches} />
      </div>
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
    </section>
  );
};
export default page;
