import IntroText from "../molecules/IntroText";
import SayHi from "../molecules/SayHi";

export default function Hero() {
  return (
    <div className="container h-screen 2xl:mt-[297px] 2xl:h-auto flex items-center 2xl:static">
      <div>
        <IntroText />
        <SayHi />
      </div>
    </div>
  );
}
