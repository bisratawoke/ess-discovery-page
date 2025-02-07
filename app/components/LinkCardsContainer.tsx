import LinkCard, { ILinkCard } from "./LinkCards";

export default function LinkCardsContainer() {
  const links: ILinkCard[] = [
    {
      iconLink: "/LmsIcon.png",
      title: "Lms",
      content:
        "Offers online courses and training to enhance skills in data analysis and statistics.",
      href: `${process.env.LMS_LINK}`,
    },
    {
      iconLink: "/dataBankIcon.png",
      title: "Data Bank",
      content:
        "Offers online courses and training to enhance skills in data analysis and statistics.",
      href: `${process.env.DATABANK_LINK}`,
    },
    {
      iconLink: "/AtsIcon.png",
      title: "Ats",
      content:
        "Offers online courses and training to enhance skills in data analysis and statistics.",
      href: `${process.env.ATS_LINK}`,
    },
  ];
  return (
    <div className="grid grid-cols-12">
      <div className="col-start-2 col-end-12 grid grid-cols-3 gap-5">
        {links.map((link) => (
          <LinkCard {...link} />
        ))}
      </div>
    </div>
  );
}
