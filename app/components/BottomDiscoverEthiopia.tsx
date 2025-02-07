import Image from "next/image";
import CoverImage from "@/public/Rectangle 41967.png";
export default function BottomDiscoverEthiopiaSection() {
  const tickImage = "/Tick.png";
  const textList = [
    "Comprehensive Data Access",
    "Educational Resources",
    "Job and Recruitment Support",
  ];

  return (
    <div className="grid grid-cols-12">
      <div className="col-start-3 col-end-13 grid grid-cols-12">
        <div className="flex flex-col gap-10 justify-center col-start-1 col-end-5">
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

        <div className="col-start-6 col-end-13">
          <Image src={CoverImage} alt={""} />
        </div>
      </div>
    </div>
  );
}
