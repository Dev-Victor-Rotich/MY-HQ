import React from "react";
import ExpertsCard from "@/components/ExpertsCard";

interface Props {
  title: string;
  experts: Expert[];
  containerClassName?: string;
}
const ExpertsList = ({ title, experts, containerClassName }: Props) => {
  return (
    <section className={containerClassName}>
      <h2 className="title"> {title}</h2>

      <ul className="grid grid-cols-2 sm:grid-cols-5 gap-6">
        {experts.map((experts) => (
          <ExpertsCard key={experts.id} {...experts} />
        ))}
      </ul>
    </section>
  );
};
export default ExpertsList;
