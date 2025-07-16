import React from 'react'
import { InfoCard, InfoDate, InfoDescription, InfoHeading, InfoTitle } from '../molecules/Card/InfoCard'
import Tag from '../atoms/Tag'

export default function Education() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:gap-0 lg:grid-cols-9">
      <div className="col-span-12 lg:col-span-2">
        <h3 className="uppercase">Education</h3>
      </div>
      <div className="flex flex-col gap-8 2xl:gap-12 col-span-12 lg:col-span-7">
        {Array.from({ length: 2 }).map((_, idx) => (
          <InfoCard key={idx}>
            <InfoHeading>
              <InfoTitle>State Polytechnic of Jember</InfoTitle>
              <InfoDate>Sep 2021 - Jul 2025</InfoDate>
            </InfoHeading>
            <Tag className="text-sm 2xl:text-base">Jember, East Java</Tag>
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
  )
}
