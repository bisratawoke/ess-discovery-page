import Image from "next/image";
import CoverImage from "@/public/Rectangle 41968.png";
import SecondaryImage from "@/public/Rectangle 41969.png";
export default function DiscoverEthiopiaSection() {
  const tickImage = "/Tick.png";
  const textList = [
    "Comprehensive Data Access",
    "Educational Resources",
    "Job and Recruitment Support",
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-12 pt-40 justify-center">
        <div className="col-start-3 col-end-11 grid grid-cols-2 gap-10">
          <div>
            <Image src={CoverImage} alt={""} />
            <div className="relative bottom-40 left-60">
              <Image src={SecondaryImage} alt={""} />
            </div>
          </div>
          <div className="flex flex-col gap-10 pt-20">
            <div className="flex flex-col gap-3">
              <span className="text-[52px]/[50px] font-bold">
                Discover Ethiopian Statistics
              </span>
              <span className="text-[16px]">
                Explore the wealth of statistical data shaping Ethiopia’s
                future,Empowering research, policy-making, and development.
              </span>
            </div>
            <div className="flex flex-col gap-1">
              {textList.map((text) => {
                return (
                  <div className="flex gap-2">
                    <Image src={tickImage} alt={""} width={20} height={6} />
                    <span>{text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
