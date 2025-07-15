import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Hero() {
  return (
    <div className="container h-screen 2xl:mt-[297px] 2xl:h-auto flex items-center 2xl:static">
      <div>
        <h3>Hey, I'm</h3>
        <h1 className="font-hero">Fathan Maulana</h1>
        <div className="2xl:mt-[24px]">
          <p className="text-justify">
            I'm a Software Engineer based in Bondowoso, East Java. I am a
            detail-oriented and dedicated individual with a focus on Front-End
            Development. I have hands-on experience with various front-end
            frameworks. In addition to front-end work, I occasionally take on
            Full-Stack Development projects using Laravel, While my main focus
            is on the front end, I also have experience working on full-stack
            projects using Laravel, which helps me understand the full
            development cycle..
          </p>
        </div>
        <div className="mt-4 2xl:mt-[40px]">
          <p className="flex items-center gap-2">
            Say hi
            <span>
              <HiOutlineArrowNarrowRight className="font-extralight" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
