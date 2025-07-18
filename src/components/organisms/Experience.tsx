import React from "react";
import {
  InfoCard,
  InfoDate,
  InfoDescription,
  InfoHeading,
  InfoTitle,
} from "../molecules/Card/InfoCard";
import Tag from "../atoms/Tag";

type ExperienceProps = {
  title: string;
  location: string;
  start_date: string;
  end_date: string;
  job_desks: string[];
};

type Props = {
  experiences: ExperienceProps[];
};

export default function Experience({ experiences }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-9 lg:gap-0" id="resumes">
      <div className="col-span-12 lg:col-span-2">
        <h3 className="uppercase">Experience</h3>
      </div>
      <div className="col-span-12 flex flex-col gap-8 lg:col-span-7 2xl:gap-12">
        {experiences.map((experience, i) => (
          <InfoCard key={i}>
            <InfoHeading>
              <InfoTitle className="max-w-[50%] 2xl:max-w-none">{experience.title}</InfoTitle>
              <InfoDate>{experience.start_date} - {experience.end_date}</InfoDate>
            </InfoHeading>
            <Tag className="text-sm 2xl:text-base">{experience.location}</Tag>
            <InfoDescription> 
              <ul className="flex flex-col gap-3">
                {experience.job_desks.map((i, idx) => (
                  <li key={idx}>
                    - {i}
                  </li>
                ))}
              </ul>
            </InfoDescription>
          </InfoCard>
        ))}
      </div>
    </div>
  );
}
