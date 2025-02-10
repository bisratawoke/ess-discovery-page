import Image from "next/image";
import Logo from "@/public/logo.png";
export default function FirstSection() {
  return (
    <div className="flex flex-col items-center bg-red gap-10">
      <Image src={Logo} alt="logo" width={333} height={67} />
      <div className="flex flex-col text-gray-400 text-[18px] items-center">
        <span className="text-[35px] text-black font-bold">
          ESS Application Dashboard
        </span>
        <span className="text-black">
          Access All Essential Directories and Resources in One Place.
        </span>
      </div>
    </div>
  );
}
