import LowerPortion from "./components/LowerPortion";
import UpperPortion from "./components/UpperPortion";

export default function FooterComp() {
  return (
    <div className="w-11/12 p-8 sm:p-12 md:p-14 lg:p-16 bg-black text-white mx-auto rounded-3xl leading-loose tracking-wide">
      <UpperPortion />
      <div className="w-full h-[1px] bg-white opacity-60 my-12"></div>
      <LowerPortion />
    </div>
  );
}
