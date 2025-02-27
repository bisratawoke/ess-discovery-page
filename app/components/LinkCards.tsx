"use client";

import LinkButton from "./LinkButton";
import { useRouter } from "next/navigation";

export interface ILinkCard {
  iconLink: string;
  title: string;
  content: string;
  href: string;
}

const LinkCard: React.FC<ILinkCard> = (props) => {
  const router = useRouter();
  return (
    <div
      className="bg-[#1E50A0] flex flex-col rounded-xl px-5 pb-10 pt-10 gap-10"
      onClick={() => router.push(props.href)}
    >
      <div className="flex justify-between items-center text-[24px]/[25px] font-bold">
        <span className="text-white">{props.title}</span>
        <LinkButton href={props.href} />
      </div>
      <div className="flex flex-col">
        <span className="text-left text-white">{props.content}</span>
      </div>
    </div>
  );
};

export default LinkCard;
