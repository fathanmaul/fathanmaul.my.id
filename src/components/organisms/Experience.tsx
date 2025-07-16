import React from "react";
import {
  InfoCard,
  InfoDate,
  InfoDescription,
  InfoHeading,
  InfoTitle,
} from "../molecules/Card/InfoCard";
import Tag from "../atoms/Tag";

export default function Experience() {
  return (
    <div className="grid grid-cols-1 pb-[120px] gap-4 lg:gap-0 lg:grid-cols-9">
      <div className="col-span-12 lg:col-span-2">
        <h3 className="uppercase">Experience</h3>
      </div>
      <div className="flex flex-col gap-8 2xl:gap-12 col-span-12 lg:col-span-7">
        {Array.from({ length: 4 }).map((_, idx) => (
          <InfoCard key={idx}>
            <InfoHeading>
              <InfoTitle>Front End Engineer</InfoTitle>
              <InfoDate>Sep 2025 - Present</InfoDate>
            </InfoHeading>
            <Tag className="text-sm 2xl:text-xl">Softbank</Tag>
            <InfoDescription>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              porro nostrum dolorem veritatis deserunt? Repudiandae a ea sit
              voluptatibus corporis. Voluptates quaerat quidem, doloribus neque
              incidunt minus tenetur ab adipisci.
            </InfoDescription>
          </InfoCard>
        ))}
      </div>
    </div>
  );
}
