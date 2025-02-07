import BottomDiscoverEthiopiaSection from "./components/BottomDiscoverEthiopia";
import DiscoverEthiopiaSection from "./components/DiscorverEthiopia";
import DiscorverEthiopiaSecondSection from "./components/DiscoverEthiopiaSectionSection";
import FirstSection from "./components/FIrstSection";
import LandingPageContainer from "./components/layout/landingPageContainer";
import LinkCardsContainer from "./components/LinkCardsContainer";

export default function Home() {
  return (
    <LandingPageContainer>
      <FirstSection />
      <LinkCardsContainer />
      <DiscoverEthiopiaSection />
      <DiscorverEthiopiaSecondSection />
      <BottomDiscoverEthiopiaSection />
    </LandingPageContainer>
  );
}
