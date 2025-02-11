import DiscoverButton from "./DiscoverButton";

interface ICard {
  title: string;
  content: string;
}
const Card = ({ title, content }: ICard) => (
  <div className="flex flex-col gap-5">
    <span className="text-[22px]/[22px] font-bold">{title}</span>
    <span className="text-[#667085] text-[18px]">{content}</span>
  </div>
);
export default function DiscorverEthiopiaSecondSection() {
  const CardList: ICard[] = [
    {
      title: "Featured Reports",
      content: "Access the latest surveys and publications.",
    },
    {
      title: "Learning System",
      content: "Build your skills with online courses",
    },
    {
      title: "Data Bank",
      content: "Find comprehensive and reliable datasets.",
    },
    {
      title: "Data Visualizations",
      content: "Explore statistics with interactive charts.",
    },
    {
      title: "Applicant System",
      content: "Simplify job applications and tracking.",
    },
    {
      title: "Search Tools",
      content: "Quickly locate data and resources.",
    },
  ];
  return (
    <div className="flex flex-col gap-20  bg-[#F8FAFC] py-40">
      <div className="flex flex-col items-center">
        <DiscoverButton />
        <div className="flex flex-col items-center text-[18px] text-gray-400 gap-5">
          <div
            className="
            "
          >
            <span className="text-[49px]/[49px] font-bold text-black">
              Discover Ethiopian Statistics
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span>
              Explore a wealth of reliable data and innovative resources{" "}
            </span>
            <span>
              Driving informed decisions and sustainable development for
              Ethiopia’s future.
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-start-2 col-end-12 grid grid-cols-3 gap-20 bg-white p-20 rounded-lg">
          {CardList.map((card, index) => (
            <Card {...card} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
