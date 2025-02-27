import LinkCard, { ILinkCard } from "./LinkCards";

export default function LinkCardsContainer() {
  const links: ILinkCard[] = [
    {
      iconLink: "/LmsIcon.png",
      title: "LMS",
      content:
        "Offers online courses and training to enhance skills in data analysis and statistics.",
      href: `${process.env.LMS_LINK}`,
    },
    {
      iconLink: "/dataBankIcon.png",
      title: "DATA BANK",
      content:
        "Access aggregated data for in-depth analysis and insights.Explore trends and statistics for informed decision-making.",

      href: `${process.env.DATABANK_LINK}`,
    },
    {
      iconLink: "/AtsIcon.png",
      title: "ATS",
      content:
        "An Application Tracking System (ATS) streamlines the hiring process by automating job applications, resume screening, and candidate management",
      href: `${process.env.ATS_LINK}`,
    },
    {
      iconLink: "",
      title: "STAT BANK",
      content:
        "Access aggregated data for in-depth analysis and insights.Explore trends and statistics for informed decision-making.",
      href: `${process.env.STAT_BANK_LINK}`,
    },
    {
      iconLink: "",
      title: "WEB PORTAL",
      content:
        "A comprehensive repository of diverse datasets and resources.Centralized access to data for research, analysis, and reporting",
      href: `${process.env.WEB_PORTAL}`,
    },
  ];
  return (
    <div className="grid grid-cols-12">
      <div className="col-start-2 col-end-12 grid lg:grid-cols-3 grid-cols-1 gap-5">
        {links.map((link, index) => (
          <LinkCard key={index} {...link} />
        ))}
      </div>
    </div>
  );
}
