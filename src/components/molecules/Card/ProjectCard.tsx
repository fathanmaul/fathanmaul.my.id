import type React from "react";
import { BsGithub, BsLink } from "react-icons/bs";

function Card({ children }: { children: React.ReactNode }) {
  return <div className="flex w-full flex-col gap-1">{children}</div>;
}

function CardImage({ image_url, alt }: { image_url: string; alt?: string }) {
  return (
    <div className="w-full overflow-hidden 2xl:h-[400px]">
      <img
        src={`${image_url}`}
        className="h-full w-full object-cover"
        alt={alt ?? `image of ${image_url}`}
      />
    </div>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="block text-lg font-light 2xl:text-xl">{children}</h3>;
}

function CardHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-1 flex w-full items-center justify-between 2xl:mt-4">
      {children}
    </div>
  );
}

function CardAction({
  title,
  demo_url,
  github_url,
}: {
  title?: string;
  demo_url?: string;
  github_url?: string;
}) {
  return (
    <div className="flex items-center gap-2">
      {github_url && (
        <a href={github_url} target="_blank" rel="noopener noreferrer" aria-label={`Go to github link for ${title}`}>
          <BsGithub />
        </a>
      )}
      {demo_url && (
        <a href={demo_url} target="_blank" rel="noopener noreferrer" aria-label={`Go to demo link for ${title}`}>
          <BsLink />
        </a>
      )}
    </div>
  );
}

function CardDescription({ children }: { children: React.ReactNode }) {
  return <div className="text-sm 2xl:text-base">{children}</div>;
}

export { Card, CardImage, CardTitle, CardHeading, CardAction, CardDescription };
