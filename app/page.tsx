import FirstSection from "./components/FIrstSection";
import LandingPageContainer from "./components/layout/LandingPageContainer";
import LinkCardsContainer from "./components/LinkCardsContainer";

export default function Home() {
  return (
    <LandingPageContainer>
      <FirstSection />
      <LinkCardsContainer />
    </LandingPageContainer>
  );
}
