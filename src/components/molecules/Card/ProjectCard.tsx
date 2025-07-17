import type React from "react";
import { BsGithub, BsLink } from "react-icons/bs";

function Card({ children }: { children: React.ReactNode }) {
  return <div className="w-full flex flex-col gap-1">{children}</div>;
}

function CardImage({ image_url }: { image_url: string }) {
  return (
    <div className="w-full overflow-hidden 2xl:h-[400px]">
      <img src={`${image_url}`} className="h-full w-full object-cover" />
    </div>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return <h5 className="block text-lg 2xl:text-xl font-light">{children}</h5>;
}

function CardHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-1 2xl:mt-4 flex w-full items-center justify-between">
      {children}
    </div>
  );
}

function CardAction({
  demo_url,
  github_url,
}: {
  demo_url?: string;
  github_url?: string;
}) {
  return (
    <div className="flex items-center gap-2">
      {github_url && (
        <a href={github_url} target="_blank" rel="noopener noreferrer">
          <BsGithub />
        </a>
      )}
      {demo_url && (
        <a href={demo_url} target="_blank" rel="noopener noreferrer">
          <BsLink />
        </a>
      )}
    </div>
  );
}

function CardDescription({children}: {children: React.ReactNode}) {
    return <div className="text-sm 2xl:text-base">
        {children}
    </div>

}

export { Card, CardImage, CardTitle, CardHeading, CardAction, CardDescription };
