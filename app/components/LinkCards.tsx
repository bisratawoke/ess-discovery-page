import Image from "next/image";
import LinkButton from "./LinkButton";

export interface ILinkCard {
  iconLink: string;
  title: string;
  content: string;
  href: string;
}

export default function LinkCard(props: ILinkCard) {
  return (
    <div className="bg-[#1E50A0] flex flex-col rounded-xl px-5 pb-10 pt-10 gap-10">
      <div className="flex justify-between">
        <Image src={props.iconLink} width={62} height={57} alt="Card Image" />
        <LinkButton href={props.href} />
      </div>
      <div className="flex flex-col">
        <span className="text-left text-white">{props.content}</span>
      </div>
    </div>
  );
}
