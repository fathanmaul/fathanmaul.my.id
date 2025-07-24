import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function SayHi() {
  return (
    <div className="mt-4 2xl:mt-[40px]">
      <a href="/CV_Fathan_Maulana.pdf" target="_blank" className="flex items-center gap-2 text-lg 2xl:text-2xl group">
        Download CV
        <span className="relative left-0 transition-all ease-in-out duration-300 group-hover:left-1">
          <HiOutlineArrowNarrowRight className="font-extralight" />
        </span>
      </a>
    </div>
  );
}
