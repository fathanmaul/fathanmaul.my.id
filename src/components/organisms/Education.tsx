import React from "react";
import {
  InfoCard,
  InfoDate,
  InfoDescription,
  InfoHeading,
  InfoTitle,
} from "../molecules/Card/InfoCard";
import Tag from "../atoms/Tag";

type EducationProps = {
  title: string;
  location: string;
  start_date: string;
  end_date: string;
  description: string[];
};

type Props = {
  educations: EducationProps[];
};

export default function Education({ educations }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-9 lg:gap-0">
      <div className="col-span-12 lg:col-span-2">
        <h3 className="uppercase">Education</h3>
      </div>
      <div className="col-span-12 flex flex-col gap-8 lg:col-span-7 2xl:gap-12">
        {educations.map((education, idx) => (
          <InfoCard key={idx}>
            <InfoHeading>
              <InfoTitle className="max-w-[50%] 2xl:max-w-none">{education.title}</InfoTitle>
              <InfoDate>
                {education.start_date} - {education.end_date}
              </InfoDate>
            </InfoHeading>
            <Tag className="text-sm 2xl:text-base">{education.location}</Tag>
            <InfoDescription>
              <ul className="flex flex-col gap-3">
                {education.description.map((i, idx) => (
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
