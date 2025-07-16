import React from "react";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeading,
  CardImage,
  CardTitle,
} from "../molecules/Card/ProjectCard";
import Tag from "../atoms/Tag";

export default function ProjectList() {
  return (
    <div>
      <h3 className="uppercase">Featured Projects</h3>
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:mt-[51px] 2xl:gap-x-16 2xl:gap-y-5">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Card key={idx}>
            <CardImage image_url="https://i.pinimg.com/1200x/5d/30/69/5d30696197589005cb50ce40d0f13c37.jpg" />
            <CardHeading>
              <CardTitle>Project {idx + 1}</CardTitle>
              <CardAction demo_url="#" github_url="#" />
            </CardHeading>
            <CardDescription>This is Project</CardDescription>
            <div className="flex gap-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <span key={i} className="flex items-center gap-1">
                  <Tag className="text-sm 2xl:text-base">
                    <a href="#">Lorem</a>
                  </Tag>
                  {i < 2 && <span>-</span>}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
