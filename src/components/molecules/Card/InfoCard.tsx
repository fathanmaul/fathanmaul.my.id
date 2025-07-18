import React from "react";

type InfoCardProps = {
  children: React.ReactNode;
  className?: string;
};

function InfoCard({ children, className }: InfoCardProps) {
  return <div className={`flex flex-col 2xl:gap-3 ${className}`}>{children}</div>;
}

function InfoTitle({ children, className }: InfoCardProps) {
  return <h5 className={`text-base 2xl:text-2xl ${className}`}>{children}</h5>;
}

function InfoDate({ children, className }: InfoCardProps) {
  return <p className={`text-xs 2xl:text-xl text-end ${className}`}>{children}</p>;
}

function InfoHeading({ children, className }: InfoCardProps) {
  return (
    <div className={`flex w-full items-center justify-between ${className}`}>{children}</div>
  );
}

function InfoDescription({children, className}: InfoCardProps) {
  return <div className={`text-sm 2xl:text-lg ${className}`}>{children}</div>
}
export { InfoCard, InfoTitle, InfoDate, InfoHeading, InfoDescription };
