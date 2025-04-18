import React from "react";
import Services from "@/components/Services";
import ExpertsList from "@/components/ExpertsList";
import { Profile } from "@/constants";
import Expertize from "@/components/Expertize";
import SocialLinks from "@/components/SocialLinks";

const page = () => {
  return (
    <section>
      <div className="my-6 flex flex-col sm:flex-row sm:items-center sm:justify-between ">
        <div className="text-center">
          <div className="banner text-center font-raleway font-extrabold">
            Explore My Projects
            <div className="tagline font-raleway font-semibold">
              "Let My Work Speak for Itself – Take a Tour! 🎭"
            </div>
          </div>
        </div>
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
