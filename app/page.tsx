import FirstSection from "./components/FIrstSection";
import LandingPageContainer from "./components/layout/LandingPageContainer";
import LinkCardsContainer from "./components/LinkCardsContainer";
import Image from "next/image";

export default function Home() {
  return (
    <LandingPageContainer>
      <div className="grid grid-cols-12 h-[100px]">
        <div className="col-start-2 col-end-12 flex items-center">
          <Image src={"/logo.png"} alt="logo" width={333} height={67} />
        </div>
      </div>
      <FirstSection />
      <LinkCardsContainer />
    </LandingPageContainer>
  );
}
