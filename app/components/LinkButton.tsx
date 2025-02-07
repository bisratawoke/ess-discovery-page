"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function LinkButton({ href }: { href: string }) {
  const router = useRouter();
  return (
    <Image
      src={"/link.png"}
      alt={""}
      width={60}
      height={20}
      onClick={() => {
        router.push(href);
      }}
      className="cursor-pointer"
    />
  );
}
